$(function () {
  
  $('ul>li').on('click', 'a', function (e) {
    e.preventDefault();
    const anchor = $(this).attr('href');
    const linkScroll = $(anchor).offset().top;
    let body = $("html, body");
    body.stop().animate({
      scrollTop: linkScroll
    }, 500);
  });
  $('.hb').on('click', function () {
    $('ul').toggleClass('slidein');
  });
});

// $('#logo').on('click', function (e) {
  //   e.preventDefault();
  //   $('body').animate({
  //     scrollTop: 0,
  //   }, 700)
  // });