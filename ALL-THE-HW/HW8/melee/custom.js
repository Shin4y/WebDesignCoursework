  var soundID1 = "hyah";
       var soundID2 = "shine";
       var soundID3 = "laser";

       var x = 1;

      function loadSound () {
        createjs.Sound.registerSound("../sound/hyah.wav", soundID1);
        createjs.Sound.registerSound("../sound/shine.wav", soundID2);
        createjs.Sound.registerSound("../sound/laser.wav", soundID3);
      }

      function playSound () {
        if(x == 1){
          createjs.Sound.play(soundID2);
          x+=1;
        }
        else if (x == 2){
          createjs.Sound.play(soundID1);
          x+=1;
        }
        else{
          createjs.Sound.play(soundID3);
          x = 1;
        }
      }

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

          $("#godBless").hover(function(){
            var nav = $(this);
            nav.html("Fox Marth is 40/60");
          },

          function(){
            var nav = $(this);
            nav.html("God Bless the Shine");
          });
        });
