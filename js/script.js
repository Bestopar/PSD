 $(function() {
    $('.scroll').click (function() {
      $('html, body').animate({scrollTop: $('.block2').offset().top }, 'slow');
      return false;
    });
  });