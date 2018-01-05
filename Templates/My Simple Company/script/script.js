$(document).ready(function() {
  $('section').not('section.first').hide();
  $('#menu').children().click(function() {
    var page_id = $(this).attr('id');
    if (!$(this).hasClass('selected')) {
      $('#menu').find('.selected').toggleClass('selected');
      $(this).toggleClass('selected');
      $('section').hide();
      $('section.' + page_id).show();
    };
  });
});
