// Recherche en ligne : mêmes parcours et mêmes appels API que l'application mobile
// (pathologie → type d'atteinte → agents ; agents pathogènes ; n° de tableau).
(function () {
  'use strict';

  var API = 'https://sandybrown-giraffe-796579.hostingersite.com/api';
  var PDF = 'https://sandybrown-giraffe-796579.hostingersite.com/FilesMP';
  var AR = document.documentElement.lang === 'ar';
  var LIB = AR ? 'LibelleAR' : 'LibelleFR';
  var FOLDER = AR ? 'AR' : 'FR';
  var MISSING_PDF = { FR: { '1-1-2': true }, AR: {} };

  var T = AR ? {
    home: 'عمّا تبحث؟',
    entries: [
      ['pathologies', 'activity', 'الأمراض', 'حسب المرض ونوع الإصابة'],
      ['agents', 'search', 'العوامل الممرضة', 'البحث عن عامل ممرض'],
      ['tableaux', 'grid', 'رقم الجدول', 'الوصول المباشر بالرقم']
    ],
    byPath: 'البحث حسب المرض', step1: 'الأمراض', ph1: 'اختر مرضًا', step2: 'نوع الإصابة', ph2: 'اختر نوع الإصابة',
    showAgents: 'عرض مسببات الأمراض', agents: 'العوامل الممرضة', paths: 'الأمراض', tableaux: 'رقم الجدول',
    tableau: 'رقم الجدول', searchAgent: 'البحث عن عامل أو رقم جدول', searchTab: 'رقم الجدول، مثال 1.1.4',
    pdf: 'النص الرسمي (PDF)', pdfMissing: 'النص الرسمي غير متوفر بالعربية لهذا الجدول.', openPdf: 'فتح PDF',
    seeTab: 'عرض الجدول', back: 'رجوع', loading: 'جارٍ التحميل…', none: 'لا توجد نتائج.',
    error: 'تعذر تحميل البيانات. تحقق من اتصالك ثم أعد المحاولة.', retry: 'إعادة المحاولة',
    results: function (n) { return n + ' نتيجة'; }
  } : {
    home: 'Que recherchez-vous ?',
    entries: [
      ['pathologies', 'activity', 'Pathologies', "Par pathologie et type d'atteinte"],
      ['agents', 'search', 'Agents pathogènes', 'Rechercher un agent'],
      ['tableaux', 'grid', 'N° de Tableau', 'Accès direct par numéro']
    ],
    byPath: 'Rechercher par pathologie', step1: 'Pathologies', ph1: 'Sélectionnez une pathologie',
    step2: "Type d'atteinte", ph2: "Sélectionnez type d'atteinte",
    showAgents: 'Afficher les agents', agents: 'Agents pathogènes', paths: 'Pathologies', tableaux: 'N° de Tableau',
    tableau: 'Tableau', searchAgent: 'Rechercher un agent ou un n° de tableau', searchTab: 'N° de tableau, ex. 1.1.4',
    pdf: 'Texte officiel (PDF)', pdfMissing: "Le texte officiel en français n'est pas disponible pour ce tableau.",
    openPdf: 'Ouvrir le PDF', seeTab: 'Voir le tableau', back: 'Retour', loading: 'Chargement…',
    none: 'Aucun résultat.', error: 'Impossible de charger les données. Vérifiez votre connexion et réessayez.',
    retry: 'Réessayer',
    results: function (n) { return n + (n > 1 ? ' résultats' : ' résultat'); }
  };

  // Icônes (chaînes constantes, jamais de données externes)
  var ICONS = {
    activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    chevron: '<path d="M9 6l6 6-6 6"/>',
    back: '<path d="M15 6l-6 6 6 6"/>',
    file: '<path d="M14 3H6v18h12V7z"/><path d="M14 3v4h4M9 13h6M9 17h6"/>'
  };

  var app = document.getElementById('app');
  var cache = {};
  var labels = {};          // libellés mémorisés pour les titres (pathologie choisie…)
  var state = { pt: '', p: '', paths: [], qAgents: '', qTabs: '' };
  var token = 0;

  // ── Utilitaires ─────────────────────────────────────
  function api(endpoint, params) {
    var qs = new URLSearchParams(params || {}).toString();
    var url = API + '/' + endpoint + (qs ? '?' + qs : '');
    if (!cache[url]) {
      cache[url] = fetch(url).then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      });
      cache[url].catch(function () { delete cache[url]; });
    }
    return cache[url];
  }

  function h(tag, attrs, children) {
    var el = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      var v = attrs[k];
      if (v == null || v === false) return;
      if (k === 'class') el.className = v;
      else if (k === 'text') el.textContent = v;
      else if (k.indexOf('on') === 0) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? '' : v);
    });
    (children || []).forEach(function (c) {
      if (c == null) return;
      el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return el;
  }

  function icon(name, size, cls) {
    var span = h('span', { class: cls || null, 'aria-hidden': 'true' });
    span.innerHTML = '<svg width="' + (size || 22) + '" height="' + (size || 22) + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block">' + ICONS[name] + '</svg>';
    return span;
  }

  function label(item) { return String(item[LIB] || item.LibelleFR || '').trim(); }

  function norm(s) {
    return String(s || '').normalize('NFKC').normalize('NFD')
      .replace(/[̀-ًͯ-ٰٟـ]/g, '').toLowerCase().trim();
  }

  function byLabel(a, b) { return label(a).localeCompare(label(b), AR ? 'ar' : 'fr'); }

  function ntabKey(n) {
    var parts = String(n).split(' ');
    var nums = parts[0].split('.').map(Number);
    while (nums.length < 4) nums.push(0);
    nums.push({ bis: 1, ter: 2 }[parts[1]] || 0);
    return nums;
  }
  function cmpNtab(a, b) {
    var x = ntabKey(a), y = ntabKey(b);
    for (var i = 0; i < x.length; i++) if (x[i] !== y[i]) return x[i] - y[i];
    return 0;
  }

  // « 1-1-1 » → 1.1.1 (et 1.1.1 bis) mais pas 1.1.10 ; « 1-1 » → toute la série 1.1
  function ntabQuery(q) {
    var m = norm(q).match(/^(.*?)[-\s_/,.]*((?:b|bi|bis|t|te|ter))?$/);
    var num = m[1].replace(/[-\s_/,]+/g, '.').replace(/^\.+|\.+$/g, '');
    return m[2] ? num + ' ' + m[2] : num;
  }
  function ntabMatch(ntab, q) {
    var n = norm(ntab);
    if (!q) return true;
    if (q.indexOf(' ') !== -1) return n.indexOf(q) === 0;   // suffixe bis/ter en cours de saisie
    return n === q || n.indexOf(q + ' ') === 0 || n.indexOf(q + '.') === 0;
  }

  function pdfUrl(ntab) {
    var file = String(ntab).replace(/\./g, '-');
    if (MISSING_PDF[FOLDER][file]) return null;
    return PDF + '/' + FOLDER + '/' + encodeURIComponent(file) + '.pdf';
  }

  function render(nodes) {
    app.innerHTML = '';
    nodes.forEach(function (n) { if (n) app.appendChild(n); });
  }

  function screen(title, backHash, body) {
    render([
      backHash != null ? h('a', { class: 'back', href: '#/' + backHash }, [icon('back', 20), T.back]) : null,
      title ? h('h2', { class: 'view-title', text: title }) : null
    ].concat(body));
  }

  function status(text) { return h('p', { class: 'status', role: 'status', text: text }); }

  function showError(tk) {
    if (tk !== token) return;
    app.appendChild(h('div', { class: 'status error', role: 'alert' }, [
      h('p', { text: T.error }),
      h('button', { class: 'btn', type: 'button', onclick: route }, [T.retry])
    ]));
    var loading = app.querySelector('.status[role=status]');
    if (loading) loading.remove();
  }

  function pdfButton(ntab, small) {
    var url = pdfUrl(ntab);
    if (!url) return small ? null : h('p', { class: 'note', text: T.pdfMissing });
    if (small) {
      var a = h('a', { class: 'icon-btn', href: url, target: '_blank', rel: 'noopener', 'aria-label': T.openPdf + ' — ' + T.tableau + ' ' + ntab, title: T.openPdf });
      a.appendChild(icon('file', 20));
      return a;
    }
    return h('a', { class: 'btn', href: url, target: '_blank', rel: 'noopener' }, [icon('file', 20), T.pdf]);
  }

  function chip(ntab) { return h('span', { class: 'chip' }, [T.tableau + ' ' + ntab]); }

  function band(ntab, title) {
    return h('div', { class: 'detail-band' }, [
      ntab ? h('span', { class: 'saffron' }, [T.tableau + ' ' + ntab]) : null,
      title ? h('h2', { text: title }) : null,
      ntab ? pdfButton(ntab, false) : null
    ]);
  }

  function results(items, make) {
    if (!items.length) return status(T.none);
    return h('ul', { class: 'results', role: 'list' }, items.map(function (it) { return h('li', null, [make(it)]); }));
  }

  function textCard(text) {
    return h('div', { class: 'result' }, [h('div', { class: 'result-text' }, [h('p', { text: text })])]);
  }

  function linkCard(href, title, ntab) {
    var a = h('a', { class: 'result', href: href }, [
      h('div', { class: 'result-text' }, [h('b', { text: title }), ntab ? chip(ntab) : null])
    ]);
    a.appendChild(icon('chevron', 22, 'chev'));
    return a;
  }

  // Liste filtrable sans re-rendre le champ (garde le focus pendant la saisie)
  function filterable(placeholder, initial, onQuery, all, match, make) {
    var input = h('input', { type: 'search', placeholder: placeholder, 'aria-label': placeholder, autocomplete: 'off', value: initial });
    var count = h('p', { class: 'count', role: 'status' });
    var box = h('div');
    function update() {
      onQuery(input.value);
      var q = norm(input.value);
      var shown = q ? all.filter(function (it) { return match(it, q); }) : all;
      count.textContent = T.results(shown.length);
      box.innerHTML = '';
      box.appendChild(results(shown, make));
    }
    input.addEventListener('input', update);
    var search = h('div', { class: 'search' }, [icon('search', 20), input]);
    update();
    return [search, count, box];
  }

  // ── Vues ────────────────────────────────────────────
  function viewHome() {
    screen(T.home, null, [
      h('nav', { class: 'entries', 'aria-label': T.home }, T.entries.map(function (e) {
        var tile = h('span', { class: 'icon-tile' });
        tile.appendChild(icon(e[1], 22));
        var a = h('a', { class: 'entry', href: '#/' + e[0] }, [
          tile,
          h('span', { class: 'entry-text' }, [h('b', { text: e[2] }), h('span', { text: e[3] })])
        ]);
        a.appendChild(icon('chevron', 22, 'chev'));
        return a;
      }))
    ]);
  }

  function fill(select, items, placeholder, selected) {
    select.innerHTML = '';
    select.appendChild(h('option', { value: '' }, [placeholder]));
    items.forEach(function (it) {
      select.appendChild(h('option', { value: String(it.ID), selected: String(it.ID) === String(selected) }, [label(it)]));
    });
    select.classList.toggle('filled', !!select.value);
  }

  function viewPathologies() {
    var tk = token;
    screen(T.byPath, '', [status(T.loading)]);
    api('pathtype.php').then(function (types) {
      if (tk !== token) return;
      types = types.slice().sort(byLabel);
      types.forEach(function (t) { labels['pt:' + t.ID] = t; });

      var s1 = h('select', { class: 'select', id: 'step1' });
      var s2 = h('select', { class: 'select', id: 'step2', disabled: true });
      var go = h('button', { class: 'btn block', type: 'button', disabled: true }, [T.showAgents]);
      var step2 = h('div', { class: 'step off' }, [
        h('label', { class: 'step-label', for: 'step2' }, [h('span', { class: 'step-dot' }, ['2']), T.step2]), s2
      ]);
      fill(s1, types, T.ph1, state.pt);
      fill(s2, [], T.ph2);

      function loadPaths() {
        s2.disabled = true; go.disabled = true; step2.classList.add('off');
        fill(s2, [], s1.value ? T.loading : T.ph2);
        if (!s1.value) return;
        var pt = s1.value;
        api('paths.php', { pathTypeID: pt }).then(function (paths) {
          if (tk !== token || s1.value !== pt) return;
          state.paths = paths.slice().sort(byLabel);
          state.paths.forEach(function (p) { labels['p:' + p.ID] = p; });
          fill(s2, state.paths, T.ph2, state.p);
          s2.disabled = false; step2.classList.remove('off');
          go.disabled = !s2.value;
        }).catch(function () { showError(tk); });
      }

      s1.addEventListener('change', function () {
        state.pt = s1.value; state.p = '';
        s1.classList.toggle('filled', !!s1.value);
        loadPaths();
      });
      s2.addEventListener('change', function () {
        state.p = s2.value;
        s2.classList.toggle('filled', !!s2.value);
        go.disabled = !s2.value;
      });
      go.addEventListener('click', function () { if (s2.value) location.hash = '#/pathologie/' + s2.value; });

      screen(T.byPath, '', [h('div', { class: 'panel' }, [
        h('div', { class: 'step' }, [
          h('label', { class: 'step-label', for: 'step1' }, [h('span', { class: 'step-dot' }, ['1']), T.step1]), s1
        ]),
        step2,
        go
      ])]);
      if (state.pt) loadPaths();
    }).catch(function () { showError(tk); });
  }

  function viewPathology(id) {
    var tk = token;
    var p = labels['p:' + id];
    var title = p ? label(p) : T.agents;
    screen(null, 'pathologies', [band(null, title), h('p', { class: 'section-label', text: T.agents }), status(T.loading)]);
    api('agents.php', { pathID: id }).then(function (agents) {
      if (tk !== token) return;
      agents = agents.slice().sort(byLabel);
      agents.forEach(function (a) { labels['a:' + a.ID] = a; });
      screen(null, 'pathologies', [
        band(null, title),
        h('p', { class: 'section-label', text: T.agents }),
        results(agents, function (a) {
          var row = h('div', { class: 'result' }, [
            h('a', { class: 'result-text', href: '#/tableau/' + encodeURIComponent(a.NTAB), style: 'color: inherit; text-decoration: none' }, [
              h('b', { text: label(a) }), chip(a.NTAB)
            ])
          ]);
          var pdf = pdfButton(a.NTAB, true);
          if (pdf) row.appendChild(pdf);
          return row;
        })
      ]);
    }).catch(function () { showError(tk); });
  }

  function viewAgents() {
    var tk = token;
    screen(T.agents, '', [status(T.loading)]);
    api('agents.php').then(function (agents) {
      if (tk !== token) return;
      agents = agents.slice().sort(byLabel);
      agents.forEach(function (a) { labels['a:' + a.ID] = a; });
      screen(T.agents, '', filterable(T.searchAgent, state.qAgents, function (q) { state.qAgents = q; }, agents,
        function (a, q) { return norm(label(a)).indexOf(q) !== -1 || (/^[\d.\-\s]+(bis|ter)?$/.test(q) && ntabMatch(a.NTAB, ntabQuery(q))); },
        function (a) { return linkCard('#/agent/' + a.ID, label(a), a.NTAB); }));
    }).catch(function () { showError(tk); });
  }

  function viewAgent(id) {
    var tk = token;
    screen(null, 'agents', [status(T.loading)]);
    var known = labels['a:' + id];
    var agentP = known ? Promise.resolve(known) : api('agents.php').then(function (all) {
      return all.filter(function (a) { return String(a.ID) === String(id); })[0];
    });
    agentP.then(function (agent) {
      if (tk !== token) return;
      if (!agent) { screen(null, 'agents', [status(T.none)]); return; }
      screen(null, 'agents', [band(agent.NTAB, label(agent)), h('p', { class: 'section-label', text: T.paths }), status(T.loading)]);
      return api('paths.php', { ntab: agent.NTAB }).then(function (paths) {
        if (tk !== token) return;
        screen(null, 'agents', [
          band(agent.NTAB, label(agent)),
          h('p', { class: 'section-label', text: T.paths }),
          results(paths.slice().sort(byLabel), function (p) { return textCard(label(p)); })
        ]);
      });
    }).catch(function () { showError(tk); });
  }

  function viewTableaux() {
    var tk = token;
    screen(T.tableaux, '', [status(T.loading)]);
    api('agents.php', { distinctNtab: '1' }).then(function (data) {
      if (tk !== token) return;
      var list = data.map(function (d) { return typeof d === 'string' ? d : d.NTAB; })
        .filter(function (n, i, arr) { return n && arr.indexOf(n) === i; })
        .sort(cmpNtab);
      screen(T.tableaux, '', filterable(T.searchTab, state.qTabs, function (q) { state.qTabs = q; }, list,
        function (n, q) { return ntabMatch(n, ntabQuery(q)); },
        function (n) { return linkCard('#/tableau/' + encodeURIComponent(n), T.tableau + ' ' + n); }));
    }).catch(function () { showError(tk); });
  }

  function viewTableau(ntab) {
    var tk = token;
    screen(null, 'tableaux', [band(ntab, null), status(T.loading)]);
    Promise.all([api('agents.php', { ntab: ntab }), api('paths.php', { ntab: ntab })]).then(function (res) {
      if (tk !== token) return;
      var agents = res[0].slice().sort(byLabel);
      agents.forEach(function (a) { labels['a:' + a.ID] = a; });
      screen(null, 'tableaux', [
        band(ntab, null),
        h('p', { class: 'section-label', text: T.agents }),
        results(agents, function (a) { return linkCard('#/agent/' + a.ID, label(a)); }),
        h('p', { class: 'section-label', text: T.paths }),
        results(res[1].slice().sort(byLabel), function (p) { return textCard(label(p)); })
      ]);
    }).catch(function () { showError(tk); });
  }

  // ── Routeur (#/agents, #/tableau/1.1.4 …) ───────────
  function route() {
    token++;
    var parts = location.hash.replace(/^#\/?/, '').split('/').map(function (s) {
      try { return decodeURIComponent(s); } catch (e) { return s; }
    });
    // le lien de langue garde la recherche en cours
    Array.prototype.forEach.call(document.querySelectorAll('[data-lang-switch]'), function (a) {
      a.setAttribute('href', a.getAttribute('data-lang-switch') + location.hash);
    });
    window.scrollTo(0, 0);
    switch (parts[0]) {
      case 'pathologies': return viewPathologies();
      case 'pathologie': return viewPathology(parts[1]);
      case 'agents': return viewAgents();
      case 'agent': return viewAgent(parts[1]);
      case 'tableaux': return viewTableaux();
      case 'tableau': return viewTableau(parts[1]);
      default: return viewHome();
    }
  }

  window.addEventListener('hashchange', route);
  route();
})();
