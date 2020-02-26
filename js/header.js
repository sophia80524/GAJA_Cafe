//以下為 header 滿板遮屏區
        $("button.menu_click").click(function(){
            if($("button.menu_click>i").hasClass("fas fa-bars")){
                $("button.menu_click>i").removeClass("fa-bars");
                $("button.menu_click>i").addClass("fa-times");
                $("header .container").fadeIn("fast");
                $("header .container").addClass("ph_nav_bg");
                $("body").addClass("overflow-h");
                $("header ul").removeClass("pt-20");
                $('header nav').removeClass("hight_auto");
                $('header .container').removeClass("hight_auto"); 
            }else{
                $("button.menu_click>i").removeClass("fa-times");
                $("button.menu_click>i").addClass("fa-bars");
                $("header .container").hide();
                $("header .container").removeClass("ph_nav_bg");
                $("body").removeClass("overflow-h");
            }//if else hasclass end  
        });// click function end

//螢幕偵測 nav 切換按鈕顯示
         $(window).resize(function(){
           if ($(window).outerWidth() >=768){
               $("header button.menu_click").hide();
               $("header .container").show();
               $("header .container").removeClass("ph_nav_bg");
               $(".page_name").delay(500).fadeIn();
           }else{
            $("header button.menu_click").show();
            $("header .container").hide();
            $("header button.menu_click>i").removeClass("fa-times").addClass("fa-bars");
            $("header .container").addClass("ph_nav_bg");
            $("header .page_name").delay(500).fadeIn();
           }//if else end
        });//window.resize end 取得有變化的視窗寬度    

//滾動上方條事件
$(window).bind('scroll', function() { 
    if($(window).width() >=768){
        if ($(window).scrollTop() > 200) { 
            $('header .container').addClass("hight_auto");
            $('header nav').addClass("hight_auto");
            $("header .white_bar").addClass("white_bar_top");
            $("header li.logo_down").addClass("logo_down_top");
            $("header ul").addClass("pt-20");
            $("header li.logo_down img").addClass("nobg");
        }else{ 
            $('header .container').removeClass("hight_auto");
            $('header nav').removeClass("hight_auto");
            $("header .white_bar").removeClass("white_bar_top");
            $("header li.logo_down").removeClass("logo_down_top");
            $("header ul").removeClass("pt-20");
            $("header li.logo_down img").removeClass("nobg");
        }//if else ph_hide scrollTop end 
    }else{}//if else width>768 end
}); //window bind('scroll', function) end


