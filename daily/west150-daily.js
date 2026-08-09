(function () {
  var carousels = document.querySelectorAll('.feed-card__media--carousel');

  carousels.forEach(function (media) {
    var track = media.querySelector('.carousel-track');
    var slides = track ? track.querySelectorAll('.carousel-slide') : [];
    var dots = media.querySelectorAll('.carousel-dots .dot');
    var counter = media.querySelector('.carousel-counter');
    if (!track || !slides.length) return;

    function setActive(index) {
      dots.forEach(function (d, i) {
        d.classList.toggle('is-active', i === index);
      });
      if (counter) counter.textContent = (index + 1) + '/' + slides.length;
    }

    var ticking = false;
    track.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var index = Math.round(track.scrollLeft / track.clientWidth);
        index = Math.max(0, Math.min(slides.length - 1, index));
        setActive(index);
        ticking = false;
      });
    });

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' });
      });
    });

    setActive(0);
  });
})();
