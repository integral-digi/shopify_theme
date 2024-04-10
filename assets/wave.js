window.addEventListener('scroll', function() {
    var wave = document.querySelector('.wave');
    var scrollPosition = window.scrollY;
    var waveHeight = wave.offsetHeight;
    var windowHeight = window.innerHeight;
  
    // Adjust text animation based on scroll position
    var textOffset = (scrollPosition / windowHeight) * waveHeight;
    wave.style.top = -textOffset + 'px';
  });
  