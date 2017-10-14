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
//= require lightbox.min
//= require_tree .


document.addEventListener("turbolinks:load", function() {

   


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

    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 80) {
            $('#botonside').fadeIn(700);
        } else {
            $('#botonside').fadeOut(500);
        }
    });

   

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


