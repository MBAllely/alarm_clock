exports.alarm = function(alarm_time, actual_time) {
  if (alarm_time === actual_time) {
    console.log("BEEP BEEP BEEP");
    return true;
  } else {
      console.log("not time yet!");
    return false;
  }
};
