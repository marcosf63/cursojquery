$(document).ready(function(){
  var $topbarBar = $('.topbar-bar');
  var $topbarLever = $('.topbar-lever');
  var $body = $('body');
  var $bodyMargin = parseInt($body.css('margin-top').replace('px', ''));
  var $topbarHeight = $('.topbar-bar').outerHeight();

  $topbarBar.show();
  $body.animate({
    'margin': ($bodyMargin + $topbarHeight)
  });
  $topbarLever.hide();

  $('.closelink').on('click', function() {
    $topbarBar.slideUp('100');
    $topbarLever.delay('200').slideDown('100');
    $body.animate({
      'margin': $bodyMargin
    });
  });

  $topbarLever.on('click', function(){
    $topbarBar.delay('200').slideDown('100');
    $(this).slideUp('100');

    $body.animate({
      'margin': ($bodyMargin + $topbarHeight)
    });
  });
});
