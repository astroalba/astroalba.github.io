// Shrink the header on scroll and toggle the mobile menu (mirrors the original Divi behaviour).
(function () {
  var header = document.getElementById('main-header');
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('top-menu');

  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 0); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toggle.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
})();
