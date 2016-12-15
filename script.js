$(document).ready(function(){
  //mobile nav
  $('.navbutton').on('click', function() {
      $('ul.nav-list').toggleClass('nav-open');
      $('.navbutton').toggleClass('nav-open');
  });

  //closes mobile nav on escape key hit
  $(document).keyup(function(e) {

      if(e.keyCode=== 27) {
          $('.navbutton.nav-open').click();
      }
  });
});
