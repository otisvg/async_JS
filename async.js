// For each piece of code below:

// Read the code.
//
// Write down your prediction of what would happen if you run it (what will appear on the console, and in what order).
//
// Run the code by pasting it in the console of your browser.
//
// Compare the actual result with your predictions.
//
// Using previous knowledge, given resources and the internet explain what actually happened.

//1.
//Prediction: hello will be printed into the console after the specified delay (milliseconds?)
setTimeout(function() {
  console.log('hello');
}, 1000);
//What actually happened: The setTimeout() method invoked my function after a delay of 1000 milliseconds (1 second).


//2.
// Prediction: Same to the previous explanation. However this time we set our function as the value of the 'callback' variable, and pass in this variable as the first argument and the specified timeout as the second argument. I think this improves encapsulation and SRP.
var callback = function() {
  console.log('hello');
};
setTimeout(callback, 1000);
// What actually happened: Same as before: the setTimeout() method invoked my function after a delay of 1000 milliseconds (1 second).
