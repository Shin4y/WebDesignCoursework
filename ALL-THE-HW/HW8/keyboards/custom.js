 var colors = [
    "#eeeeee",
    "#00ff00",
    "#ff0000",
    "#000000"];

 $(document).ready(function(){
           $(".nav-item").hover(function(){
              var nav = $(this);
              console.log("nav item entered");
              nav.animate({color: "#0000ff"}, "fast");
           },

          function(){
              console.log("nav-item left");
              var nav = $(this);
              nav.animate({color:"#FFFFFF"}, "fast");  
          });

          $(".icon").hover(function(){
            var nav = $(this);
            nav.velocity({scale: 1.5}, "fast");
          },

          function(){
            var nav = $(this);
            nav.velocity({scale: 1}, "fast");
          });

          $(".main").hover(function(){
            var main = $(this);
            var counter = 0;
            while(counter < 100){
              main.velocity({backgroundColor: "#ff0000"});
              main.velocity({backgroundColor: "#FFFF00"});
              main.velocity({backgroundColor: "#00ff00"});
              main.velocity({backgroundColor: "#00FFFF"});
              main.velocity({backgroundColor: "#0000ff"});
              main.velocity({backgroundColor: "#0000A0"});
            
              console.log("something is happening");
              counter = counter + 1;
            }
            

          },

          function(){
            var main = $(this);
            main.velocity({backgroundColor: "#ffffff"});

          });



          });
