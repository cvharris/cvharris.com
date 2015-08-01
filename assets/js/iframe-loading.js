(function($) {
  $(document).ready(function() {
    setTimeout(function() {
      $('iframe').on('load', function() {
        $('#spinner').hide();
        $(this).show();
      });
    }, 500);
  })
})(jQuery);
