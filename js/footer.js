$(window).bind('scroll', function() { 
        if ($(window).scrollTop() > 600) { 
            $('.backtotop').fadeIn();
        }else{ 
            $('.backtotop').fadeOut();
        }//if else ph_hide scrollTop end
}); //window bind('scroll', function) end

$(".backtotop").click(function (){
        $('html, body').animate({
            scrollTop: $("header").offset().top
        }, 500);
    });