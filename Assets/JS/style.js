window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 100) {
      header.classList.add('scrolled-header');
    } else {
      header.classList.remove('scrolled-header');
    }
  });





(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('my_audio');
    audio.volume = 0.5; // Adjust the volume as needed
  
    // Play the audio when the page loads
    audio.play();
  
    // Pause and reset the audio when the page is about to unload
    window.addEventListener('beforeunload', function() {
      audio.pause();
      audio.currentTime = 0;
    });
  });
})();


