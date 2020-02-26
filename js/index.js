
/*--------------------header修改區-------*/
//滾動上方條事件
$(window).bind('scroll', function() { 
    if($(window).width() >=768){
        if ($(window).scrollTop() > 100) { 
            $('header .container').addClass("hight_auto");
            $('header nav').addClass("hight_auto");
            $("header .white_bar").addClass("white_bar_top");
            $("header li.logo_down").addClass("logo_down_top");
            $("header ul").addClass("pt-20");
            $("header li.logo_down img").addClass("nobg");
            $("header ul li.item_bg").removeClass("item_bgc");
            $(".main").removeClass("main_down");
            $("header").addClass("header_top");
        }else{ 
            $('header .container').removeClass("hight_auto");
            $('header nav').removeClass("hight_auto");
            $("header .white_bar").removeClass("white_bar_top");
            $("header li.logo_down").removeClass("logo_down_top");
            $("header ul").removeClass("pt-20");
            $("header li.logo_down img").removeClass("nobg");
            $("header ul li.item_bg").addClass("item_bgc");
            $(".main").addClass("main_down");
            $("header").removeClass("header_top");
        }//if else ph_hide scrollTop end 
    }else{}//if else width>768 end
}); //window bind('scroll', function) end

/*--------------------index "內部" 區-------*/

//最新消息輪播
    $('.news').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });


//    門市資訊輪播
    $('.stores').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
        }
      }     
    ]      
    });  