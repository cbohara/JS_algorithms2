(function() {
  'use strict';

  window.collections = {};



/*

Today we're going to continue to build up your algorithm building muscles with some more advanced algorithms. 


  Basic Algorithmic Approach Cheat Sheet:
    
    Prompt: largerThan is a function that takes two numbers and returns a message to as to whether the first is bigger than the second.

      [ ] Identify your inputs and outputs:

        "What does this function take as parameters?"
        "What does this function return to the user?"

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

// 1. create a function, collections.naiveRange, that takes a number as a parameter and returns an array with filled with every value up until the input parameter.



// 2. create a function, collections.typeCheck, that takes the parameter 'collection' and returns 'object' if the collection is an object, and 'array' if the collection is an array.


// 3. create a function, collection.naiveFormValidator that takes an object and checks to see whether the fields, 'name', 'location', and 'phoneNumber' are filled out
    
    /*
      example: 

      var form = {name: 'Kanye', location: 'Chicago', phoneNumber: 5102748212};

      collections.naiveFormValidator(form) --> 'form is complete';


      CHECK THE TEST SUITE IN THE BROWSER TO FIGURE OUT WHAT YOU SHOULD RETURN IN ALL OTHER CASES
    */



// 4. create a function, collections.wordCount that takes a string as a parameter and returns how many words it contians. Punctuation does not count.
    // **HINT** Look up the string method 'split';



// 5. create a function, collections.stringRepeat that takes a string and a number as parameters and returns a string with the phrase quoted 3 times separated by a new line.

    /*
        example:

        var testCase = 'you used to call me on my cell phone'
        var newString = collections.stringRepeat(testCase, 3); --> 
       
       'you used to call me on my cell phone
        you used to call me on my cell phone
        you used to call me on my cell phone'

    */

// 6. create a function, collections.noUms that takes a string and returns a similar string but without the the word 'um'.
    /*
        example: 
        var testString = 'hey um i like to eat pizza um would you like some um pizza too?';
        

        collections.noUm(testString); --> 'hey i like to eat pizza would you like some pizza too?'

    */



// 7. create a function, collections.maxValue that returns the largest number in an array
  /*
    ** DO NOT USE SORT() ** 

    example: 
    var testArr = [1, 3, 27, 53, 10, 296, 31];

    collection.maxValue(testArr) ---> 296;

 */





// =============================== EXTRA CREDIT ============================================================


// 8. create a function, collections.advancedRange, that takes two parameters, start and stop, and returns an array filled values starting at 'start', and up until 'stop'.

 
 //9. create a function, collections.passwordCheck that takes a string and checks the following parameters:
    /*
        1. the string must contain at least one number
        2. the string must contain at least 7 characters
        3. the string must contain at least one capital letter

        if the string passess all parameters, return 'great password';
        if not, return, 'your password needs work';
    */




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


