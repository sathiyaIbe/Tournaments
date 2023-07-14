window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    const element = document.getElementById("tabs");
    if (window.scrollY > 240) {
      header.classList.add('scrolled-header');
      element.classList.add("scrolled-tabs");
    } else {
     
      header.classList.remove('scrolled-header');
      element.classList.remove("scrolled-tabs");
    }
  });







  function myFunction() {
   
    const element = document.getElementById("active");
    element.scrollIntoView();
   
  }