$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 700) {
          $(".nav-links-a").css("color" , "#24252A");
        }
  
        else{
            $(".nav-links-a").css("color" , "#fff");  	
        }
    })
  })