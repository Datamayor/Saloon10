$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 700) {
          $(".header-nav").css("background" , "#24252A");
        }
  
        else{
            $(".header-nav").css("background" , "transparent");  	
        }
    })
  })