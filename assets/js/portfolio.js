(function($) {
  $(document).ready(function() {
    $('.page-content').click(function() {
      $('.flipped').removeClass('flipped');
    });
    
    $('.portfolio-project').click(function(e) {
      e.stopPropagation();
      if ($(this).hasClass('flipped')) {
          $(this).removeClass('flipped');
      } else {
        $('.flipped').removeClass('flipped');
        $(this).addClass('flipped');
      }
    })
  })
})(jQuery);
