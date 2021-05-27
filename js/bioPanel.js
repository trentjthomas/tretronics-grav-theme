$(document).ready(function () {
  // Optimalisation: Store the references outside the event handler:
  var $window     = $(window);
  // Infobar IDs
  var sidebar     = $('#sidebar');
  var bottombar   = $('#bottombar');
  // Main IDs
  var maincontent = $('#main-content');
  // Footer IDs
  var footertext  = $('#footer-text');

  function checkWidth() {
    var ws = $window.width();
      //if the window is less than 860px wide
    if (ws < 860) {
      sidebar.hide(); // hide the sidebar
      bottombar.show(); //show the bottombar
      maincontent.addClass('full'); //make maincontent 100%
      footertext.addClass('full');
    } else {
      // else revert to "normal"
      sidebar.show();
      bottombar.hide();
      maincontent.removeClass('full');
      footertext.removeClass('full');
    }
  }

  // Execute on load
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);

});
