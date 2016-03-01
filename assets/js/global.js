(function($) {
  $(document).ready(function() {
    var body = $('body');

    $('.open-menu').click(function() {
      if (body.hasClass('sidebar')) {
        body.removeClass('sidebar');
      } else {
        body.addClass('sidebar');
      }
    });

    $('main').click(function() {
      if (body.hasClass('sidebar')) {
        body.removeClass('sidebar');
      }
    });
  })
})(jQuery)
