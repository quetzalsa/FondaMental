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
//= require lightbox
//= require rails-ujs
//= require turbolinks
//= require_tree .


document.addEventListener("turbolinks:load", function() {

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

        //uno

        var fromBottomTimeline = new TimelineMax();
        var fromBottomFrom = TweenMax.from([anim4, anim3], 1, {
            y: 300
        });
        var fromBottomTo = TweenMax.to([anim4, anim3], 1, {
            y: 0
        });
        fromBottomTimeline
            .add(fromBottomFrom)
            .add(fromBottomTo);
         
        new ScrollMagic.Scene({
                triggerElement: "#trig2",
                offset: 300
            })
            .setTween(fromBottomTimeline)
            .duration(400)
            .reverse(false)
            //.addIndicators() // add indicators (requires plugin)
            .addTo(controller);

        //dos

        var fromBottomTimeline = new TimelineMax();
        var fromBottomFrom = TweenMax.from([anim2, anim1], 1, {
            y: 300
        });
        var fromBottomTo = TweenMax.to([anim2, anim1], 1, {
            y: 0
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
            y: 400
        });
        var fromBottomTo = TweenMax.to([anim5, anim6], 1, {
            y: 0
        });
        fromBottomTimeline
            .add(fromBottomFrom)
            .add(fromBottomTo);
         
        new ScrollMagic.Scene({
                triggerElement: "#trig3",
                offset: 200
            })
            .setTween(fromBottomTimeline)
            .duration(400)
            .reverse(false)
            //.addIndicators() // add indicators (requires plugin)
            .addTo(controller);

        //cuatro

        var fromBottomTimeline = new TimelineMax();
        var fromBottomFrom = TweenMax.from([anim7, anim8], 1, {
            y: 300
        });
        var fromBottomTo = TweenMax.to([anim7, anim8], 1, {
            y: 0
        });
        fromBottomTimeline
            .add(fromBottomFrom)
            .add(fromBottomTo);
         
        new ScrollMagic.Scene({
                triggerElement: ".galeria_princ"
            })
            .setTween(fromBottomTimeline)
            .duration(400)
            .reverse(false)
            //.addIndicators() // add indicators (requires plugin)
            .addTo(controller);    

        
            





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
    $(document).ready(function() {
        $("#myBtn").click(function(event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });
    
    });
document.addEventListener("DOMContentLoaded", function(event) {

var music = document.getElementById('music'); // id for audio element
var duration; // Duration of audio clip
var pButton = document.getElementById('pButton'); // play button
var playhead = document.getElementById('playhead'); // playhead
var timeline = document.getElementById('timeline'); // timeline

// timeline width adjusted for playhead
var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

// play button event listenter
pButton.addEventListener("click", play);

// timeupdate event listener
music.addEventListener("timeupdate", timeUpdate, false);

// makes timeline clickable
timeline.addEventListener("click", function(event) {
    moveplayhead(event);
    music.currentTime = duration * clickPercent(event);
}, false);

// returns click as decimal (.77) of the total timelineWidth
function clickPercent(event) {
    return (event.clientX - getPosition(timeline)) / timelineWidth;

}

// makes playhead draggable
playhead.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

// Boolean value so that audio position is updated only when the playhead is released
var onplayhead = false;

// mouseDown EventListener
function mouseDown() {
    onplayhead = true;
    window.addEventListener('mousemove', moveplayhead, true);
    music.removeEventListener('timeupdate', timeUpdate, false);
}

// mouseUp EventListener
// getting input from all mouse clicks
function mouseUp(event) {
    if (onplayhead == true) {
        moveplayhead(event);
        window.removeEventListener('mousemove', moveplayhead, true);
        // change current time
        music.currentTime = duration * clickPercent(event);
        music.addEventListener('timeupdate', timeUpdate, false);
    }
    onplayhead = false;
}
// mousemove EventListener
// Moves playhead as user drags
function moveplayhead(event) {
    var newMargLeft = event.clientX - getPosition(timeline);

    if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
        playhead.style.marginLeft = newMargLeft + "px";
    }
    if (newMargLeft < 0) {
        playhead.style.marginLeft = "0px";
    }
    if (newMargLeft > timelineWidth) {
        playhead.style.marginLeft = timelineWidth + "px";
    }
}

// timeUpdate
// Synchronizes playhead position with current point in audio
function timeUpdate() {
    var playPercent = timelineWidth * (music.currentTime / duration);
    playhead.style.marginLeft = playPercent + "px";
    if (music.currentTime == duration) {
        pButton.className = "";
        pButton.className = "play";
    }
}


    
//Play and Pause
function play() {
    var a = document.getElementsByTagName('audio');
    // start music
    if (music.paused) {
        music.play();
        // remove play, add pause
        pButton.className = "";
        pButton.className = "pause";
    } else { // pause music
        music.pause();
        // remove pause, add play
        pButton.className = "";
        pButton.className = "play";
    }
}

// Gets audio file duration
music.addEventListener("canplaythrough", function() {
    duration = music.duration;
}, false);

// getPosition
// Returns elements left position relative to top-left of viewport
function getPosition(el) {
    return el.getBoundingClientRect().left;
}



/* DOMContentLoaded*/
});

  })


