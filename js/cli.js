var alarm = require('./alarm.js').alarm;
var prompt = require('prompt');
prompt.start();

prompt.get('goal', function(err, result){
  var output = alarm(result.goal);
  output.forEach(function(element){
    console.log(element);
  });
});
