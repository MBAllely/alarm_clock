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
