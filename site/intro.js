/* TMP Maroc — intro de l'application (logo qui bat + texte du Bulletin Officiel).
   Affichée une fois par session sur la page d'accueil ; clic, Entrée ou Échap pour entrer. */
(function () {
  var KEY = 'tmp-intro-vue';
  try { if (sessionStorage.getItem(KEY)) return; } catch (e) {}

  var ar = document.documentElement.lang === 'ar';
  var html =
    '<div class="intro-orb intro-orb-1"></div><div class="intro-orb intro-orb-2"></div><div class="intro-halo"></div>' +
    '<div class="intro-content">' +
      '<div class="intro-badge-wrap" aria-hidden="true">' +
        '<span class="intro-ring"></span><span class="intro-ring dub"></span>' +
        '<div class="intro-badge"><div class="intro-disc"></div><img class="intro-logo" src="logo.png" alt=""></div>' +
      '</div>' +
      '<div class="intro-text">' +
        '<div class="intro-eyebrow" lang="fr">Santé et sécurité au travail</div>' +
        '<h2 class="intro-title" lang="fr">Tableau des maladies<br>professionnelles</h2>' +
        '<div class="intro-region" lang="fr">Maroc</div>' +
        '<div class="intro-ar" lang="ar" dir="rtl">جدول الأمراض المهنية<br>بالمغرب</div>' +
      '</div>' +
      '<div class="intro-card">' +
        '<p lang="fr" dir="ltr">Cette application vous propose les dispositifs réglementaires concernant les maladies professionnelles extraits du Bulletin Officiel marocain N° <span class="intro-nb">160-14</span> du 19 Rabii I 1435 (21 janvier 2014)</p>' +
        '<hr>' +
        '<p lang="ar" dir="rtl">هذا التطبيق يقدم لك الأنظمة التنظيمية المتعلقة بأمراض العمل من مرسوم المغربي الرسمي رقم <span class="intro-nb">160-14</span> بتاريخ 19 ربيع الأول 1435 هـ (21 يناير 2014)</p>' +
      '</div>' +
      '<button type="button" class="intro-enter">' + (ar ? '<bdi lang="ar">اضغط للمتابعة</bdi> · <bdi lang="fr">Entrer</bdi>' : '<bdi lang="fr">Entrer</bdi> · <bdi lang="ar">اضغط للمتابعة</bdi>') + '</button>' +
    '</div>';

  var el = document.createElement('div');
  el.className = 'intro';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.setAttribute('aria-label', ar ? 'مقدمة التطبيق' : "Introduction de l'application");
  el.innerHTML = html;
  document.body.insertBefore(el, document.body.firstChild);
  document.documentElement.classList.add('intro-open');

  var btn = el.querySelector('.intro-enter');
  var closed = false;
  function close() {
    if (closed) return;
    closed = true;
    try { sessionStorage.setItem(KEY, '1'); } catch (e) {}
    document.removeEventListener('keydown', onKey);
    el.classList.add('intro-leaving');
    document.documentElement.classList.remove('intro-open');
    setTimeout(function () { el.remove(); }, 450);
  }
  function onKey(e) {
    if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') { e.preventDefault(); close(); }
    else if (e.key === 'Tab') { e.preventDefault(); btn.focus(); }
  }
  el.addEventListener('click', close);
  document.addEventListener('keydown', onKey);
  btn.focus({ preventScroll: true });
})();
