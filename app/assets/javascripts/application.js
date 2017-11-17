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
//= require_tree .



var path = window.location.pathname;
if (path == "/" && $( window ).width() >= 960) {
    music.play();  
} 
function videoback() {
    //document.getElementById('videointro').style.display = 'none';
    
        music.play();  
     
      
    $( "#pButton" ).removeClass( "play" ).addClass( "pause" );
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


