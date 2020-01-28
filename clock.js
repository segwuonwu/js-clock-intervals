/*
var degrees = 45;

var el = document.getElementById("myElement");
el.style.transform = "rotate(" + degrees + "deg)";
It would be useful to define functions that convert seconds,
 minutes and hours to how many degrees the hand should be 
 rotated around the clock!

secondRotation(0); // returns 0
secondRotation(59); // returns (59 / 60) * 360

hourRotation(12); // returns 0
hourRotation(5); // returns (5 / 12) * 360
*/

var min = document.getElementById("minute");
var sec = document.getElementById("second");
var hr = document.getElementById("hour");

var secondRotation = 360 / 60;
var minuteRotation = 360 / (60 * 60);
var hourRotation = 360 / (60 * 60 * 12);

var degSec = 0;
var degMin = 0;
var degHr = 0;


setInterval(function() {
    sec.style.transform = "rotate(" + (degSec += secondRotation) + "deg)";
    min.style.transform = "rotate(" + (degMin += minuteRotation) + "deg)";
    hr.style.transform = "rotate(" + (degHr += hourRotation) + "deg)";
}, 1000);