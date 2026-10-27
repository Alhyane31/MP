// Filtre la liste des tableaux par numéro (ex. « 1-1-4 », « 1.1.4 », « 3 19 »)
(function () {
  var input = document.getElementById('q');
  var empty = document.getElementById('empty');
  if (!input) return;

  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
  var series = Array.prototype.slice.call(document.querySelectorAll('[data-series]'));

  function normalize(value) {
    return value.toLowerCase().trim().replace(/[.\s_/]+/g, '-').replace(/-+/g, '-');
  }

  input.addEventListener('input', function () {
    var q = normalize(input.value);
    var shown = 0;
    tabs.forEach(function (tab) {
      var match = !q || normalize(tab.getAttribute('data-num')).indexOf(q) === 0;
      tab.hidden = !match;
      if (match) shown++;
    });
    series.forEach(function (block) {
      block.hidden = !block.querySelector('.tab:not([hidden])');
    });
    empty.style.display = shown ? 'none' : 'block';
  });
})();
