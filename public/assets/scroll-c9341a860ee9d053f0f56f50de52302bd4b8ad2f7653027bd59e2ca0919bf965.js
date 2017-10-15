
function responsiveMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
      }
    } 



document.addEventListener("turbolinks:load", function() {

    

    $(".cargando").hide();

    $(document).on('ready ajax:before', function(event) {
        $(".cargando").show();
      });

    $(document).on('page:load ready', function(event) {
        $(".cargando").hide();
      });



       
// footer
    
var controller = new ScrollMagic.Controller();

    var ourScenedos = new ScrollMagic.Scene({
        triggerElement: '#footer',
        triggerHook: 'onEnter',
        offset: 20
    })
    .setClassToggle('.sim1', 'fadeInUp')
    .addTo(controller);

    var controller = new ScrollMagic.Controller();
    
        var ourScenedos = new ScrollMagic.Scene({
            triggerElement: '#footer',
            triggerHook: 'onEnter',
            offset: 20
        })
        .setClassToggle('.sim2', 'fadeInUp')
        .addTo(controller);

        var controller = new ScrollMagic.Controller();
        
            var ourScenedos = new ScrollMagic.Scene({
                triggerElement: '#footer',
                triggerHook: 'onEnter',
                offset: 20
            })
            .setClassToggle('.sim3', 'fadeInUp')
            .addTo(controller);

// galeria princ

    var anim8 = document.getElementsByClassName('anim8');        
    var anim7 = document.getElementsByClassName('anim7'); 
    var anim6 = document.getElementsByClassName('anim6');        
    var anim5 = document.getElementsByClassName('anim5');
    var anim4 = document.getElementsByClassName('anim4');
    var anim3 = document.getElementById('anim3');
    var anim2 = document.getElementById('anim2');
    var anim1 = document.getElementById('anim1');


    if ($( window ).width() >= 960) {

  

    //footer sim
    var fromBottomTimeline = new TimelineMax();
    var fromBottomFrom = TweenMax.from([anim4, anim3], 1, {
        y: 300,
        opacity:0
    });
    var fromBottomTo = TweenMax.to([anim4, anim3], 1, {
        y: 0,
        opacity:1,
    });
    fromBottomTimeline
        .add(fromBottomFrom)
        .add(fromBottomTo);
     
    new ScrollMagic.Scene({
            triggerElement: "#trig2",
            offset: 300
        })
        .setTween(fromBottomTimeline)
        .duration(500)
        .reverse(false)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);


    //uno

    var fromBottomTimeline = new TimelineMax();
    var fromBottomFrom = TweenMax.from([anim4, anim3], 1, {
        y: 300,
        opacity:0
    });
    var fromBottomTo = TweenMax.to([anim4, anim3], 1, {
        y: 0,
        opacity:1,
    });
    fromBottomTimeline
        .add(fromBottomFrom)
        .add(fromBottomTo);
     
    new ScrollMagic.Scene({
            triggerElement: "#trig2",
            offset: 300
        })
        .setTween(fromBottomTimeline)
        .duration(500)
        .reverse(false)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);

    //dos

    var fromBottomTimeline = new TimelineMax();
    var fromBottomFrom = TweenMax.from([anim2, anim1], 1, {
        y: 300,
        opacity:0
    });
    var fromBottomTo = TweenMax.to([anim2, anim1], 1, {
        y: 0,
        opacity:1
    });
    fromBottomTimeline
        .add(fromBottomFrom)
        .add(fromBottomTo);
     
    new ScrollMagic.Scene({
            triggerElement: "#trig1",
            offset: 200
        })
        .setTween(fromBottomTimeline)
        .duration(400)
        .reverse(false)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);

    //tres

    var fromBottomTimeline = new TimelineMax();
    var fromBottomFrom = TweenMax.from([anim5, anim6], 1, {
        y: 300,
        opacity:0
    });
    var fromBottomTo = TweenMax.to([anim5, anim6], 1, {
        y: 0,
        opacity:1
    });
    fromBottomTimeline
        .add(fromBottomFrom)
        .add(fromBottomTo);
     
    new ScrollMagic.Scene({
            triggerElement: "#trig3",
            offset: 300
        })
        .setTween(fromBottomTimeline)
        .duration(400)
        .reverse(false)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);

    //cuatro

    var fromBottomTimeline = new TimelineMax();
    var fromBottomFrom = TweenMax.from([anim7, anim8], 1, {
        y: 100
    });
    var fromBottomTo = TweenMax.to([anim7, anim8], 1, {
        y: 0
    });
    fromBottomTimeline
        .add(fromBottomFrom)
        .add(fromBottomTo);
     
    new ScrollMagic.Scene({
            triggerElement: ".galeria_princ",
            offset: 300
        })
        .setTween(fromBottomTimeline)
        .duration(100)
        .reverse(false)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);



        // scroll gal
var botongali = document.getElementById('botonside');
var fromBottomTimelinea = new TimelineMax();
var fromBottomFrom = TweenMax.from(botongali, 1, {
    x: -300,
    opacity:0
});
var fromBottomTo = TweenMax.to(botongali, 1, {
    x: 0,
    opacity:1
});
fromBottomTimeline
    .add(fromBottomFrom)
    .add(fromBottomTo);
 
new ScrollMagic.Scene({
        triggerElement: ".imafreefall",
        offset: 30
    })
    .setTween(fromBottomTimeline)
    .duration(100)
    //.reverse(false)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    }
    })

;
