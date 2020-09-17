// codigo general
// declare all variables
var session_length;
var break_length;
var num_sessions;
var current_session;
var time_on;
var current_time;
var timer;
var break_on;
// selector
var menu = document.querySelector('.hamburger');
var menu2 = document.querySelector('.hamburger2');
// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}
function toggleMenu2 (event) {
    this.classList.toggle('is-active');
    document.querySelector( ".menuppal2" ).classList.toggle("is_active");
    event.preventDefault();
  }

// event
menu.addEventListener('click', toggleMenu, false);
menu2.addEventListener('click', toggleMenu2, false);
//Solución con jQUery





// initialize all variables
$(document).ready(function () {
    session_length = 60;
    current_time = session_length;
    break_length = 60;
    num_sessions = 5;
    current_session = num_sessions;
    time_on = false;
    break_on = false;
    updateScreen();
});

// update variables on screen
function updateScreen(){
    var l ;
    var j ;
    $("#sessL").html(convertNumToMin(session_length));
    $("#timeR").html(convertNumToMin(current_time));

    if (break_on) {
        $("#timeE").html(convertNumToMin(break_length - current_time));
        l = "BREAK!";
    } else {
        $("#timeE").html(convertNumToMin(session_length - current_time));
        l = "ROUND";
    }


    $("#breaL").html(convertNumToMin(break_length));
    $("#sessN").html(num_sessions);
    $("#contador").html(l + "&nbsp;&nbsp;&nbsp;" + (num_sessions - current_session + 1) )
    checkTime();

    $("#modalidades").html(j)
}

// convert number of seconds to minutes:seconds
function convertNumToMin(num) {
    var mins = Math.floor(num / 60);
    var secs = num - mins * 60;
    if (secs < 10) return mins + ":0" + secs;
    return mins + ":" + secs;
}
//ver otv
$("#slM").click(function () {
    session_length = session_length - 10;
    if (session_length < 0)
        session_length = 0;
    current_time = session_length;
    current_session = num_sessions;
    time_on = false;
    clearInterval(timer);
    break_on = false;
    updateScreen();
});
$("#slP").click(function () {
    session_length = session_length + 10;
    current_time = session_length;
    current_session = num_sessions;
    time_on = false;
    clearInterval(timer);
    break_on = false;
    updateScreen();
});
$("#blM").click(function () {
    break_length = break_length - 5;
    if (break_length < 0)
        break_length = 0;
    current_time = session_length;
    current_session = num_sessions;
    time_on = false;
    clearInterval(timer);
    break_on = false;
    updateScreen();
});
$("#blP").click(function () {
    break_length = break_length + 5;
    current_time = session_length;
    current_session = num_sessions;
    time_on = false;
    clearInterval(timer);
    break_on = false;
    updateScreen();
});


$("#sM").click(function () {
    num_sessions--;
    if (num_sessions < 0)
        num_sessions = 0;
    current_time = session_length;
    current_session = num_sessions;
    time_on = false;
    clearInterval(timer);
    break_on = false;
    updateScreen();
});
$("#sP").click(function () {
    num_sessions++;
    current_time = session_length;
    current_session = num_sessions;
    time_on = false;
    clearInterval(timer);
    break_on = false;
    updateScreen();
});

// enable start/stop when clicking circle
$(".cajaCronometro").click(function () {
    if (!time_on) {
        time_on = true;
        timer = setInterval(function () {
            current_time--;
            updateScreen();
        }, 1000);
    } else {
        time_on = false;
        clearInterval(timer);
    }
});

// enable spacebar start/stop
document.onkeydown = function (e) {
    if (e.keyCode == 32)
        document.getElementById("cajaCronometro").click();
};


function checkTime() {
    if (current_time < 0 && break_on == false) {
        current_time = break_length;
        break_on = true;
        updateScreen();
    } else if (current_time < 0 && break_on == true) {
        current_time = session_length;
        break_on = false;
        current_session--;
        if (current_session == 0) {
            time_on = false;
            clearInterval(timer);
            break_on = false;
            $("#timeR").html(convertNumToMin(0));
            $("#contador").html("Bien hechoo!");
        } else {
            updateScreen();
        }
    }
}


// click tabata button
$("#tabataBtn").click(function () {
    session_length = 20;
    current_time = session_length;
    break_length = 10;
    num_sessions = 8;
    current_session = num_sessions;
    time_on = false;
    clearInterval(timer);
    break_on = false;
    updateScreen();
    document.getElementById('tabata').style.display="block";
    document.getElementById('emom').style.display="none";
    document.getElementById('pomo').style.display="none";
    document.getElementById('met').style.display="none";
});

// click pomodoro button
$("#pomodoroBtn").click(function () {
    session_length = 1200;
    current_time = session_length;
    break_length = 0;
    num_sessions = 1;
    current_session = num_sessions;
    time_on = false;
    clearInterval(timer);
    break_on = false;
    updateScreen();
    document.getElementById('tabata').style.display="none";
    document.getElementById('emom').style.display="none";
    document.getElementById('pomo').style.display="block";
    document.getElementById('met').style.display="none";
});
$("#emomBtn").click(function () {
    session_length = 30;
    current_time = session_length;
    break_length = 30;
    num_sessions = 5;
    current_session = num_sessions;
    time_on = false;
    clearInterval(timer);
    break_on = false;
    updateScreen();
    document.getElementById('tabata').style.display="none";
    document.getElementById('emom').style.display="block";
    document.getElementById('pomo').style.display="none";
    document.getElementById('met').style.display="none";
});

$("#metBtn").click(function () {
    session_length = 20;
    current_time = session_length;
    break_length = 10;
    num_sessions = 8;
    current_session = num_sessions;
    time_on = false;
    clearInterval(timer);
    break_on = false;
    updateScreen();
    document.getElementById('tabata').style.display="none";
    document.getElementById('emom').style.display="none";
    document.getElementById('pomo').style.display="none";
    document.getElementById('met').style.display="block";
});




// codigo general
jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

})