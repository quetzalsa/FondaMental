


    // function openNav() {
    //     document.getElementById("myTopnav").style.width = "100%";
    // }
    
    // function closeNav() {
    //     document.getElementById("myTopnav").style.width = "0";
    // }
    
    function responsiveMenu() {
    var x = document.getElementById("myTopnav"),
        nav = document.getElementById("navegacion");
        // $(document).on('scroll', function() {
        //     if (($(document).scrollTop() > 605) && (document.getElementById("myTopnav").className === "menu responsive")) {
        //         var x = document.getElementById("myTopnav"),
        //         nav = document.getElementById("navegacion");
        //         x.className = "menu";
        //         nav.style.position = "fixed";
        //     }
        // });
    if (x.className === "menu") {
        $("html, body").stop(true, false).animate({ scrollTop: 0 },500, function() {
            x.className += " responsive";        
            nav.style.position = "static";
        });
    } else {
        x.className = "menu";
        nav.style.position = "fixed";
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
      if (window.location.pathname == "/") {
        var trigernav = '.main_content';
    } else {
        var trigernav = '.navcont';
    }
      var controller = new ScrollMagic.Controller();
            
          new ScrollMagic.Scene({
              triggerElement: trigernav,
              
              triggerHook: 'onLeave'
          })
          .setClassToggle('#navegacion', 'fixed')
        //   .addIndicators()
          .addTo(controller);
          
// // footer
    
// var controller = new ScrollMagic.Controller();

//     var ourScenedos = new ScrollMagic.Scene({
//         triggerElement: '#footer',
//         triggerHook: 'onEnter',
//         offset: 20
//     })
//     .setClassToggle('.sim1', 'fadeInUp')
//     .addTo(controller);

//     var controller = new ScrollMagic.Controller();
    
//         var ourScenedos = new ScrollMagic.Scene({
//             triggerElement: '#footer',
//             triggerHook: 'onEnter',
//             offset: 20
//         })
//         .setClassToggle('.sim2', 'fadeInUp')
//         .addTo(controller);

        
        
//             var ourScenedos = new ScrollMagic.Scene({
//                 triggerElement: '#footer',
//                 triggerHook: 'onEnter',
//                 offset: 20
//             })
//             .setClassToggle('.sim3', 'fadeInUp')
//             .addTo(controller);

// // galeria princ

//     var anim8 = document.getElementsByClassName('anim8');        
//     var anim7 = document.getElementsByClassName('anim7'); 
//     var anim6 = document.getElementsByClassName('anim6');        
//     var anim5 = document.getElementsByClassName('anim5');
//     var anim4 = document.getElementsByClassName('anim4');
//     var anim3 = document.getElementById('anim3');
//     var anim2 = document.getElementById('anim2');
//     var anim1 = document.getElementById('anim1');
    var backcol = document.getElementsByTagName('body');
    var alturaint = $(document).height();

    if ($( window ).width() >= 960) {


    
    //fondo
    
    var fromBottomTimeline = new TimelineMax();
    var fromBottomFrom = TweenMax.from(backcol, 0, {
        backgroundColor: '#292929'
    });
    var fromBottomTo = TweenMax.to(backcol, 1, {
        backgroundColor: '#d1abab'
    });
    var fromBottomTouno = TweenMax.to(backcol, 1, {
        backgroundColor: '#b4f0e4'
    });
    var fromBottomTodos = TweenMax.to(backcol, 1, {
        backgroundColor: '#d0b4f0'
    });
    fromBottomTimeline
        .add(fromBottomFrom)
        .add(fromBottomTo)
        .add(fromBottomTouno)
        .add(fromBottomTodos);
     
    new ScrollMagic.Scene({
            triggerElement: backcol
            
        })
        .setTween(fromBottomTimeline)
        .duration(alturaint)
        //.reverse(false)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);

    //footer sim
    // var fromBottomTimeline = new TimelineMax();
    // var fromBottomFrom = TweenMax.from([anim4, anim3], 1, {
    //     y: 300,
    //     opacity:0
    // });
    // var fromBottomTo = TweenMax.to([anim4, anim3], 1, {
    //     y: 0,
    //     opacity:1,
    // });
    // fromBottomTimeline
    //     .add(fromBottomFrom)
    //     .add(fromBottomTo);
     
    // new ScrollMagic.Scene({
    //         triggerElement: "#trig2",
    //         offset: 300
    //     })
    //     .setTween(fromBottomTimeline)
    //     .duration(500)
    //     .reverse(false)
    //     //.addIndicators() // add indicators (requires plugin)
    //     .addTo(controller);


    //uno

    // var fromBottomTimeline = new TimelineMax();
    // var fromBottomFrom = TweenMax.from([anim4, anim3], 5, {
    //     y: 300,
    //     opacity:0
    // });
    // var fromBottomTo = TweenMax.to([anim4, anim3], 1, {
    //     y: 0,
    //     opacity:1,
    // });
    // fromBottomTimeline
    //     .add(fromBottomFrom)
    //     .add(fromBottomTo);
     
    // new ScrollMagic.Scene({
    //         triggerElement: "#trig2",
    //         offset: 300
    //     })
    //     .setTween(fromBottomTimeline)
    //     .duration(500)
    //     .reverse(false)
    //     //.addIndicators() // add indicators (requires plugin)
    //     .addTo(controller);

    // //dos

    // var fromBottomTimeline = new TimelineMax();
    // var fromBottomFrom = TweenMax.from([anim2, anim1], 1, {
    //     y: 300,
    //     opacity:0
    // });
    // var fromBottomTo = TweenMax.to([anim2, anim1], 1, {
    //     y: 0,
    //     opacity:1
    // });
    // fromBottomTimeline
    //     .add(fromBottomFrom)
    //     .add(fromBottomTo);
     
    // new ScrollMagic.Scene({
    //         triggerElement: "#trig1",
    //         offset: 200
    //     })
    //     .setTween(fromBottomTimeline)
    //     .duration(400)
    //     .reverse(false)
    //     //.addIndicators() // add indicators (requires plugin)
    //     .addTo(controller);
        

    // //tres

    // var fromBottomTimeline = new TimelineMax();
    // var fromBottomFrom = TweenMax.from([anim5, anim6], 1, {
    //     y: 300,
    //     opacity:0
    // });
    // var fromBottomTo = TweenMax.to([anim5, anim6], 1, {
    //     y: 0,
    //     opacity:1
    // });
    // fromBottomTimeline
    //     .add(fromBottomFrom)
    //     .add(fromBottomTo);
     
    // new ScrollMagic.Scene({
    //         triggerElement: "#trig3",
    //         offset: 300
    //     })
    //     .setTween(fromBottomTimeline)
    //     .duration(400)
    //     .reverse(false)
    //     //.addIndicators() // add indicators (requires plugin)
    //     .addTo(controller);

    // //cuatro

    // var fromBottomTimeline = new TimelineMax();
    // var fromBottomFrom = TweenMax.from([anim7, anim8], 1, {
    //     y: 100
    // });
    // var fromBottomTo = TweenMax.to([anim7, anim8], 1, {
    //     y: 0
    // });
    // fromBottomTimeline
    //     .add(fromBottomFrom)
    //     .add(fromBottomTo);
     
    // new ScrollMagic.Scene({
    //         triggerElement: ".galeria_princ",
    //         offset: 300
    //     })
    //     .setTween(fromBottomTimeline)
    //     .duration(100)
    //     .reverse(false)
    //     //.addIndicators() // add indicators (requires plugin)
    //     .addTo(controller);



          // scroll gal
    // var botongali = document.getElementById('botonside');
    // var fromBottomTimelinea = new TimelineMax();
    // var fromBottomFrom = TweenMax.from(botongali, 1, {
    //     x: -300,
    //     opacity:0
    // });
    // var fromBottomTo = TweenMax.to(botongali, 1, {
    //     x: 0,
    //     opacity:1
    // });
    // fromBottomTimelinea
    // .add(fromBottomFrom)
    // .add(fromBottomTo);
    
    // new ScrollMagic.Scene({
    //     triggerElement: ".imafreefall",
    //     offset: 50
    // })
    // .setTween(fromBottomTimelinea)
    // .duration(100)
    // //.reverse(false)
    // //.addIndicators() // add indicators (requires plugin)
    // .addTo(controller);


    };
    
    
    
})




   