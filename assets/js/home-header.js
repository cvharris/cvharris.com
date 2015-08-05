(function($) {
  $(document).ready(function() {
    if (window.innerWidth >= 600) {
      $('.page-head').css('background-image', 'url(' + $(".page-head").attr("data-background") + ')');
    } else {
      $('.page-head').css('background-image', 'url(' + $(".page-head").attr("data-background-mobile") + ')');
    }
  })
})(jQuery)
