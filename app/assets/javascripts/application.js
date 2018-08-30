// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery2
//= require jquery_ujs
//= require turbolinks
//= require swipebox
//= require owljs
//= require_tree .





// filter
var lisa = document.getElementsByClassName('lisa_cropp');
var okin = document.getElementsByClassName('okin');
var deniroster = document.getElementsByClassName('deniroster');
var jean = document.getElementsByClassName('jean_madry');

var filtrolisa = $('#filtrolisa'),
    filtrodeni = $('#filtrodeni'),
    filtrokin = $('.filtrokin'),
    filtrojean = $('#filtrojean');
    // todos = $('#todos');

// function todosDjs() {
//     for (var i = 0; i < okin.length; i++) { 
//         okin[i].style.display = "grid"; 
//     }
//     for (var i = 0; i < deniroster.length; i++) { 
//         deniroster[i].style.display = "grid"; 
//     }
//     for (var i = 0; i < jean.length; i++) { 
//         jean[i].style.display = "grid"; 
//     }
//     for (var i = 0; i < lisa.length; i++) { 
//         lisa[i].style.display = "grid"; 
//     }

//     filtrolisa.removeClass( "filtro_activo");
//     filtrodeni.removeClass( "filtro_activo");
//     filtrokin.removeClass( "filtro_activo");
//     filtrojean.removeClass( "filtro_activo");
//     todos.addClass( "filtro_activo");
// }

soloLisa()

function soloLisa() {
    for (var i = 0; i < okin.length; i++) { 
        okin[i].style.display = "none"; 
    }
    for (var i = 0; i < deniroster.length; i++) { 
        deniroster[i].style.display = "none"; 
    }
    for (var i = 0; i < jean.length; i++) { 
        jean[i].style.display = "none"; 
    }
    for (var i = 0; i < lisa.length; i++) { 
        lisa[i].style.display = "grid"; 
    }
    
    filtrolisa.addClass( "filtro_activo");
    filtrodeni.removeClass( "filtro_activo");
    filtrokin.removeClass( "filtro_activo");
    filtrojean.removeClass( "filtro_activo");
    // todos.removeClass( "filtro_activo");
}

function soloJean() {
    for (var i = 0; i < okin.length; i++) { 
        okin[i].style.display = "none"; 
    }
    for (var i = 0; i < deniroster.length; i++) { 
        deniroster[i].style.display = "none"; 
    }
    for (var i = 0; i < jean.length; i++) { 
        jean[i].style.display = "grid"; 
    }
    for (var i = 0; i < lisa.length; i++) { 
        lisa[i].style.display = "none"; 
    }

    filtrolisa.removeClass( "filtro_activo");
    filtrodeni.removeClass( "filtro_activo");
    filtrokin.removeClass( "filtro_activo");
    filtrojean.addClass( "filtro_activo");
    // todos.removeClass( "filtro_activo");
}

function soloDeni() {
    for (var i = 0; i < okin.length; i++) { 
        okin[i].style.display = "none"; 
    }
    for (var i = 0; i < deniroster.length; i++) { 
        deniroster[i].style.display = "grid"; 
    }
    for (var i = 0; i < jean.length; i++) { 
        jean[i].style.display = "none"; 
    }
    for (var i = 0; i < lisa.length; i++) { 
        lisa[i].style.display = "none"; 
    }

    filtrolisa.removeClass( "filtro_activo");
    filtrodeni.addClass("filtro_activo");
    filtrokin.removeClass( "filtro_activo");
    filtrojean.removeClass( "filtro_activo");
    // todos.removeClass( "filtro_activo");
}

function soloOkin() {
    for (var i = 0; i < okin.length; i++) { 
        okin[i].style.display = "grid"; 
    }
    for (var i = 0; i < deniroster.length; i++) { 
        deniroster[i].style.display = "none"; 
    }
    for (var i = 0; i < jean.length; i++) { 
        jean[i].style.display = "none"; 
    }
    for (var i = 0; i < lisa.length; i++) { 
        lisa[i].style.display = "none"; 
    }

    filtrolisa.removeClass( "filtro_activo");
    filtrodeni.removeClass( "filtro_activo");
    filtrojean.removeClass( "filtro_activo");
    // todos.removeClass( "filtro_activo");
    $('.filtrokin').addClass("filtro_activo");
}



if (/MSIE 10/i.test(navigator.userAgent)) {
    // This is internet explorer 10
    window.alert('Recomendamos usar un navegador distinto a Edge o Internet Explorer');
 }
 
 if (/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
     // This is internet explorer 9 or 11
     window.alert('Recomendamos usar un navegador distinto a Edge o Explorer');
 }
 
 if (/Edge\/\d./i.test(navigator.userAgent)){
    // This is Microsoft Edge
    window.alert('Recomendamos usar un navegador distinto a Edge o Explorer');
 }

 
// var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

// if (supportsTouch == true) {
    
// }

function block2() {
    $('.drop1').toggleClass( "dblock")
}
function block1() {
    $('.drop2').toggleClass( "dblock")
}
    
// var playlist = [music, music1, music2];
// var randomindex = Math.floor(Math.random()*(playlist.length));
// var randomSong = playlist[randomindex];
var path = window.location.pathname;
// var nuevoindex;


// //Play and Pause
// function play() {
//     // start music
//     if (!randomSong.paused) {
//         randomSong.pause();
//         pButton.className = "play";
//     } else {
//         if (randomSong.currentTime !== 0) {
//             randomSong.play();
//             pButton.className = "";
//             pButton.className = "pause";
//         } else {
//             onfinito();
//         }
//     }
// }
// function nuevoRandom() {
//     do {
//         nuevoindex = Math.floor(Math.random()*(playlist.length));
//     }
//     while (nuevoindex == randomindex);
//     randomindex = nuevoindex;
//     randomSong = playlist[randomindex];
//     return randomSong;
// }




// function nuevotime() {
    
    // timeline width adjusted for playhead
    // var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
    
    // play button event listenter
    // pButton.addEventListener("click", play);
    
    // timeupdate event listener
    // randomSong.addEventListener("timeupdate", timeUpdate, false);
    //  randomSong.currentTime = 0;
    // // makes timeline clickable
    // timeline.addEventListener("click", function(event) {
    //     moveplayhead(event);
    //     randomSong.currentTime = duration * clickPercent(event);
    // }, false);
    
    // // returns click as decimal (.77) of the total timelineWidth
    // function clickPercent(event) {
    //     return (event.clientX - getPosition(timeline)) / timelineWidth;
    
    // }
    
    // makes playhead draggable
    // playhead.addEventListener('mousedown', mouseDown, false);
    // window.addEventListener('mouseup', mouseUp, false);
    
    // // Boolean value so that audio position is updated only when the playhead is released
    // var onplayhead = false;
    
    // // mouseDown EventListener
    // function mouseDown() {
    //     onplayhead = true;
    //     window.addEventListener('mousemove', moveplayhead, true);
    //     randomSong.removeEventListener('timeupdate', timeUpdate, false);
    // }
    
    // mouseUp EventListener
    // getting input from all mouse clicks
    // function mouseUp(event) {
    //     if (onplayhead == true) {
    //         moveplayhead(event);
    //         window.removeEventListener('mousemove', moveplayhead, true);
    //         // change current time
    //         randomSong.currentTime = duration * clickPercent(event);
    //         randomSong.addEventListener('timeupdate', timeUpdate, false);
    //     }
    //     onplayhead = false;
    // }
    // mousemove EventListener
    // Moves playhead as user drags
    // function moveplayhead(event) {
    //     var newMargLeft = event.clientX - getPosition(timeline);
    
    //     if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
    //         playhead.style.marginLeft = newMargLeft + "px";
    //     }
    //     if (newMargLeft < 0) {
    //         playhead.style.marginLeft = "0px";
    //     }
    //     if (newMargLeft > timelineWidth) {
    //         playhead.style.marginLeft = timelineWidth + "px";
    //     }
    // }
    
    // timeUpdate
    // Synchronizes playhead position with current point in audio
    // function timeUpdate() {
    //     var playPercent = timelineWidth * (randomSong.currentTime / duration);
    //     playhead.style.marginLeft = playPercent + "px";
    //     if (randomSong.currentTime == duration) {
    //         pButton.className = "";
    //         pButton.className = "play";
    //     }
    // }
    
    
    // Gets audio file duration
    // randomSong.addEventListener("canplaythrough", function() {
    //     duration = randomSong.duration;
    // }, false);
    
    // getPosition
    // Returns elements left position relative to top-left of viewport
    // function getPosition(el) {
    //     return el.getBoundingClientRect().left;
    // }
// }

// randomSong.addEventListener('ended',function(){
    
//     nuevoRandom();
//     nuevotime();
//       });
    //   function onfinito() {
        
    //     nuevoRandom();
    //     nuevotime();
    //     randomSong.play();
    //     $( "#pButton" ).removeClass( "play" ).addClass( "pause" );
    //     }

      
// if (path == "/" && $( window ).width() >= 960) {
//     music.play();
// } 

function videoback() {
    //document.getElementById('videointro').style.display = 'none';
      
    // $( "#pButton" ).removeClass( "play" ).addClass( "pause" );
    $( "#playbut" ).css( {"opacity": "0.3"} )
    $('html, body').animate({
        scrollTop: $("#navegacion").offset().top
    }, 1000);
    
}

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}


document.addEventListener("turbolinks:load", function() {

    ;( function( $ ) {
        
            $( '.swipebox' ).swipebox();
        
        } )( jQuery );
    

    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;

        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      }
    }
    
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('#myBtn').fadeIn();
        } else {
            $('#myBtn').fadeOut();
        }
    });

    //Side boton

    // $(window).scroll(function() {
    //     var height = $(window).scrollTop();
    //     if (height > 80) {
    //         $('#botonside').fadeIn();
    //     } else {
    //         $('#botonside').hide();
    //     }
    // });

   

    //topscroll

    $(document).ready(function() {
        $("#myBtn").click(function(event) {
            event.preventDefault();
            $("html, body").stop(true, false).animate({ scrollTop: 0 },500);
            return false;
        });
        $(window).bind("mousewheel", function() {
            $("html, body").stop();
        });


        
    });
  })


