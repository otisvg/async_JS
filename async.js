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

//3.
//Prediction: A will be 'instantly' console logged.
//            D will be logged afterwards
//            B will be logged 1 second after our setTimeout is executed.
console.log('A');

var callback = function() {
  console.log('B');
};

setTimeout(callback, 1000);

console.log('D');
// What actually happened: Same as my prediction. It seems that JavaScript doesn't wait for the setTimeout method to finish, it carries on evaluating the following lines and asyncronously runs the setTimeout method.


//4.
//Prediction: A will be console logged
//            C will be console logged
//            D will be console logged
//            B will be console logged
// I predict D will be logged before B, as although the timeout is 0 (thus should be instantly executed), I am making the assumption that the setTimeout method will still take a little more time to execute than simply using console.log, therefore whilst setTimeout is being executed, D will be logged.
console.log('A');

var callback = function() {
  console.log('B');
}

console.log('C');

setTimeout(callback, 0)

console.log('D');
// What actually happened: Same as my prediction. Why? See here under 'order of operations': https://riptutorial.com/javascript/example/6819/settimeout--order-of-operations--cleartimeout. It seems if we call a setTimeout before a console.log it effectively pushing the setTimeout execution to the 'end of the queue', despite having a 'delay' of 0.


//5.
//Prediction: the console.log(a) will return 10, as our setTimeout will be executed roughly 1 second AFTER our console.log, thus the value of a will still be 10 when we log a
var a = 10;

var callback = function() {
  a = 20;
};

setTimeout(callback, 1000);

console.log(a);
// What actually happened: Same as my prediction.

// 6.
//Prediction: Even with the timeout specified as 0 milliseconds, I predict the console.log to still return 10 as the timeout is pushed the the end of the execution queue.
var a = 10;

var callback = function() {
  a = 20;
};
setTimeout(callback, 0);

console.log(a);
//What actually happened: See prediction.



// 7.
//Prediction: 20 will be logged, as 'a' is logged AFTER we change the value of 'a' to 20 within our callback function.
var a = 10;

var callback = function() {
  a = 20;
  console.log(a);
};
setTimeout(callback, 0);
// What actually happened: See prediction.
