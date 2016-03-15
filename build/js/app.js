(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.alarm = function(alarm_time, actual_time) {
  if (alarm_time === actual_time) {
    console.log("BEEP BEEP BEEP");
    return true;
  } else {
      console.log("not time yet!");
    return false;
  }
};

},{}],2:[function(require,module,exports){
var alarm = require('./../js/alarm.js').alarm;

$(document).ready(function(){
  $('#alarm').submit(function(event){
    event.preventDefault();
    var alarm_time = $('#alarm_time').val();


    console.log(alarm_time);


    setInterval(function(){
      alarm(alarm_time, moment().format("HH:mm"));
    }, 30000);
  });
});

var populatetime = function() {
  $('#time').text(moment());
};

$(document).ready(function(){
  setInterval(populatetime, 1000);
});

},{"./../js/alarm.js":1}]},{},[2]);
