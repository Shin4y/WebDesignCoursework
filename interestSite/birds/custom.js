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

          $("#bird-text").hover(function(){
            var text = $(this);
            var image = $(".img");
            text.css("font-style", "italic");
            text.html("Or do they?");
            text.effect("shake");
            image.css("filter", "invert(100%)");

          },

          function(){
            var image = $(".img");
            image.css("filter", "invert(0%)");
          });          
        });
