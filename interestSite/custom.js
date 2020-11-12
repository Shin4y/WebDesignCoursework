var soundID = "hyah";

function loadSound () {
  createjs.Sound.registerSound("sound/hyah.wav", soundID);
}

function playSound () {
  createjs.Sound.play(soundID);
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




           $(".pageLink").hover(function(){
            var p = $(this);
            p.velocity( {opacity: 0.2})
           },

           function(){
            var p = $(this);
            p.velocity( {opacity: 1})
           });

           $("#right-main-text").hover(function(){
            var element = $(this);
            element.html("They are very expensive");
           },

           function(){
            var element = $(this);
            element.html("My Interests");
           });


      });