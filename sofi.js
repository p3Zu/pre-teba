(function () {
  function updateResponsiveClass() {
    if (window.innerWidth < 768) {
      document.body.classList.add('small-screen');
    } else {
      document.body.classList.remove('small-screen');
    }
  }

  // Run on load
  updateResponsiveClass();

  // Run on resize
  window.addEventListener('resize', updateResponsiveClass);
})();
