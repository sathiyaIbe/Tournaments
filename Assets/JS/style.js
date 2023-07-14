window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    const element = document.getElementById("pills-tab");
    if (window.scrollY > 240) {
      header.classList.add('scrolled-header');
      element.classList.remove("d-none");
    } else {
     
      header.classList.remove('scrolled-header');
      element.classList.add("d-none");
    }
  });







  function myFunction() {
    window.scrollTo(0, 910);
   
  }