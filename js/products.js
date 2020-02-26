    new WOW().init();

$('.coffees').slick({
    rows:1,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed:1000,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        rows:1,
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        rows:1,
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 550,
      settings: {
        rows:2,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    ]
});

$('.beans').slick({
    rows:2,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed:2000,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        rows:2,
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 501,
      settings: {
        rows:3,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    ]
});