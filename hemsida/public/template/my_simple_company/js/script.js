var iframe_find = $('iframe').contents()


$(document).ready(()=> {
  iframe_find.find('section').not('section.home').hide();
  iframe_find.find('#menu').children().click(function() {
    var page_id = $(this).attr('id');
    if (!$(this).hasClass('selected')) {
      iframe_find.find('#menu').find('.selected').toggleClass('selected');
      $(this).toggleClass('selected');
      iframe_find.find('section').hide();
      iframe_find.find('section.' + page_id).show();
    };
  });
});
