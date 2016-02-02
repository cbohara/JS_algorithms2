(function() {
  'use strict';

  window.collections = {};



/*

Today we're going to continue to build up your algorithm building muscles with some more advanced algorithms. 


  Basic Algorithmic Approach Cheat Sheet:
    
    Prompt: largerThan is a function that takes two numbers and returns a message to as to whether the first is bigger than the second.

      [ ] Identify your inputs and outputs:

        "What does this function take as parameters?" 2 numbers
        "What does this function return to the user?" a message that indicates which number is larger of the two

        [ ] Create your function and type out your inputs and outputs:
  
            var largerThan = function(num1, num2){ // num1, num2 inputs
              
              var messageToUser = "these values are in ascending order";

                
              return messageToUser; // output
            };

      [ ] Write up some pseudocode that describes the steps you're going to take to turn your inputs into an output:
        // invoke your output
        // check to see whether the first value is larger than the second.
          // if so, return the message to the user
          // if not, reassign 'messageToUser' to "these values are in descending order"
            // return the message to the user to the user


      [ ] Write up testCases that helps you identify whether you have the right outputs for each case:

          ascendingOrderTestCase = largerThan(1, 4); // should return: "these values are in ascending order";

          descendingOrderTestCase = largerThan(4, 1); // should return: "these values are in descending order"

      [ ] Put it all together by turning your pseudocode into regular code under each corresponding line:
          
          var largerThan = function(num1, num2){
            // invoke our output
              var messageToUser = "these values are in ascending order";

              // check to see whether the second value is larger than the first.

              if (num1 < num2) {

               // if so, reassign 'messageToUser' to "these values are in descending order"
               messageToUser = "these values are in descending order"
              
               // if so, return the message to the user
               return messageToUser

              } else {
                // return the message to the user                
                return messageToUser

              }

           }
*/

// 1. create a function, collections.naiveRange, that takes a number as a parameter and returns an array filled with every value up until the input parameter.

collections.naiveRange = function(number){
  //create an empty array that will be filled with every value up until the input parameter 
  var array = [];
  //create a for loop that will input values into an array
  for(var i = 0; i < number; i++){
    array.push(i);
  }
};

// 2. create a function, collections.typeCheck, that takes the parameter 'collection' and returns 'object' if the collection is an object, and 'array' if the collection is an array.

collections.typeCheck = function(collection){
  if(Array.isArray(collection)){
    return 'array';
  }
  else if(typeof collection === 'object'){
    return 'object';
  }
};

// 3. create a function, collections.naiveFormValidator that takes an object and checks to see whether the fields, 'name', 'location', and 'phoneNumber' are filled out

    /*

      var form = {name: 'Kanye', location: 'Chicago', phoneNumber: 5102748212};

      collections.naiveFormValidator(form) --> 'form is complete';


      CHECK THE TEST SUITE IN THE BROWSER TO FIGURE OUT WHAT YOU SHOULD RETURN IN ALL OTHER CASES
    */

collections.naiveFormValidator = function(object){
  //if all fields of the form are completed, confirm form is complete
  if(typeof object.name === 'string' && typeof object.location === 'string' && typeof object.phoneNumber === 'number'){
      return 'form is complete';
    }
  //if name is missing, return 'name field is required!'
  else if(typeof object.name != 'string' && typeof object.location === 'string' && typeof object.phoneNumber === 'number'){
      return 'name field is required!';
  }
  //if location is missing, return 'location field is required!'
  else if(typeof object.name === 'string' && typeof object.location != 'string' && typeof object.phoneNumber === 'number'){
    return 'location field is required!';
  }
  //if phone number is missing, return 'phone field is required!'
  else if(typeof object.name === 'string' && typeof object.location === 'string' && typeof object.phoneNumber != 'number'){
    return 'phone field is required!';
  }
};

// 4. create a function, collections.wordCount that takes a string as a parameter and returns how many words it contians. Punctuation does not count.
    // **HINT** Look up the string method 'split';

collections.wordCount = function(string){
  //use split method to transform a string of words into an array in which each index value is a single word of the input string
  //use the length method to determine the number of words in the original input string
  return string.split(" ").length;
};

// 5. create a function, collections.stringRepeat that takes a string and a number as parameters and returns a string with the phrase quoted 3 times separated by a new line.

    /*
        example:

        var testCase = 'you used to call me on my cell phone'
        var newString = collections.stringRepeat(testCase, 3); --> 
       
       'you used to call me on my cell phone
        you used to call me on my cell phone
        you used to call me on my cell phone'

    */
collections.stringRepeat = function(string, number){
    //create variable that holds string and new line tag
    var stringPlusNewLine = string + '\n';
    //use repeat method to repeat stringPlusNewLine as many times as input numbers asks for
    var toPrint = stringPlusNewLine.repeat(number);
    return toPrint;
};

// 6. create a function, collections.noUms that takes a string and returns a similar string but without the the word 'um'.
    /*
        example: 
        var testString = 'hey um i like to eat pizza um would you like some um pizza too?';
        

        collections.noUm(testString); --> 'hey i like to eat pizza would you like some pizza too?'

    */
collections.noUms = function(string){
  //use split method to transform a string of words into an array in which each index value is a single word of the input string
  var array = string.split(" ");
  //loop through each index in array to determine if the word is 'um'
  for(var i = 0; i < array.length; i++){
    //if word in array is 'um', cut that index out of the array
    if(array[i] === "um"){
      array.splice(i,1);
    }
  }
  //now that indexes that contained 'um' have been eliminated from array, the array needs to be transformed back into a string
  var returnString = array.join(' ');
  return returnString;
};

// 7. create a function, collections.maxValue that returns the largest number in an array
  /*
    ** DO NOT USE SORT() ** 

    example: 
    var testArr = [1, 3, 27, 53, 10, 296, 31];

    collection.maxValue(testArr) ---> 296;

 */
collections.maxValue = function(array){
  //create a variable to hold the maximum number
  var max = 0;
  //loop through array
  for(var i = 0; i < array.length; i++){
    //if the first value is greater than the second value, overwrite it into the max variable
    if(array[i] > max){
      max = array[i];
    }
  }
  return max;
};

// =============================== EXTRA CREDIT ==============



// 8. create a function, collections.advancedRange, that takes two parameters, start and stop, and returns an array filled values starting at 'start', and up until 'stop'.

collections.advancedRange = function(start, stop){
  //create empty array to store return array
  var array = [];
  //use for loop to input numbers into array starting at 'start' number and continuing up until 'stop'
  for(var i = start; i < stop; i++){
    array.push(i);
  }
  return array;
};
 
 //9. create a function, collections.passwordCheck that takes a string and checks the following parameters:
    /*
        1. the string must contain at least one number
        2. the string must contain at least 7 characters
        3. the string must contain at least one capital letter

        if the string passess all parameters, return 'great password';
        if not, return, 'your password needs work';
    */

collections.passwordCheck = function(string){
  //split string password into array with one character per array index
  var array = string.split("");
  //check if password is not at least 7 characters long
  if(array.length < 7)
    return 'your password needs work';
  //if password is greater or equal to 7 characters, then check if password contains a number
  else if(array.length >= 7){
    //loop through array to determine if password contains a number
    for(var i = 0; i < array.length; i++){
      var sum = 0;
      if(!isNaN(array[i])){
        sum += array[i];
      }
      if(sum === 0){
        console.log('no number in password')
        return 'your password needs work';
      }
    }
  }
};

collections.passwordCheck('5bhdsd5elloits');


//10. create a function collections.matrixMaxTraversal that goes through an array of arrays filled with numbers, and returns an array filled with the highest numbers in each array
  /*
    An array matrix is just an array full of arrays
    
    var ourMatrix = [
      [1, 7, 271, 42],
      [21, 9, 1, 5],
      [9, 9, 42, 495, 483],
      [19, 18472, 1, 485, 81]
    ];

    var answer = collections.matrixMaxTraversal(ourMatrix) --> [271, 21, 495, 18472]

  */







}());


