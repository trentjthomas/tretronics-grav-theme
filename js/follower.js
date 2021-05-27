$(document).ready(function () {
  // Optimalisation: Store the references outside the event handler:
  var $window     = $(window);
  // Header IDs
  var header      = $('#header');
  var hLogo       = $('#header-logo');
  var hTitle      = $('#header-title');
  // Nav IDs
  var nav         = $('#main-nav');
  // Infobar IDs
  var sidebar     = $('#sidebar');
  // Utility IDs
  var topbar      = $('#topbar');

  function windowScroll() {
    var ws = $window.scrollTop();
    // If the page is scrolled more than 50px add the follow and scroll classes
    if ( ws > 50 ) {
      sidebar.addClass('follow');
      hLogo.addClass('follow');
      header.addClass('follow');
      hTitle.addClass('follow');
      nav.addClass('follow');
      topbar.addClass('scroll');
    } else {
      // use else instead of setting a number
      sidebar.removeClass('follow');
      hLogo.removeClass('follow');
      header.removeClass('follow');
      hTitle.removeClass('follow');
      nav.removeClass('follow');
      topbar.removeClass('scroll');
    }
  }

  // Bind event listener
  $(window).scroll(windowScroll);

});
