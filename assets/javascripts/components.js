//****************************************************************************************************
//
// .. EVENTS
//
//****************************************************************************************************
//
// .. Close alert
//
$(document).on('click', '.js-c-alert_close', function() {
  $(this).closest('.c-alert').fadeOut(500, function() {
    $(this).remove();
  });
});