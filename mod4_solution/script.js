

(function(window){
 


var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// STEP 10:
// Loop over the names array and say either 'Hello' or "Good Bye"
// using the 'speak' method or either helloSpeaker's or byeSpeaker's
// 'speak' method.

for (var i=0;i<names.length;i++) {

  var firstLetter =names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
     byeSpeaker.speak(names[i]);
  } else {
     helloSpeaker.speak(names[i]);
  }
}


})(window);
