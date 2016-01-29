# Algorithmic Approach

##Goals



## Parser:



###Learning Goals:

Similarly to yesterday, by this exercise you should have a sharp handle on the syntax for creating and accessing [objects](http://slides.com/telegraphprep/telegraphprepweek1#/2) and [arrays](http://slides.com/telegraphprep/telegraphprepweek1#/3) using dot and bracket notation. You should be very comfortable building [functions](http://slides.com/telegraphprep/telegraphprepweek1#/5) and at an intermediate level building and conceptualizing ['for'](http://slides.com/telegraphprep/telegraphprepweek1#/4) and ['for in loops'](http://slides.com/telegraphprep/telegraphprepweek1#/4).

This exercise is built to help you:

1. Master building and invoking functions
2. Master Control Flow
  * Get comfortable making [conditional statements](http://slides.com/telegraphprep/telegraphprepweek1#/4/34)
  * Master for and for in loops

3. Practice and start to solidify your [algorithmic approach](http://slides.com/telegraphprep/algorithms/#/).


Today we're going to build some functionality for a couple of applications.


  Basic Algorithmic Approach Cheat Sheet:
    
    Prompt: largerThan is a function that takes two numbers and returns a message to as to whether the first is bigger than the second.

      [ ] Identify your inputs and outputs:
      ```
        "What does this function take as parameters?"
        "What does this function return to the user?"
      ```
        [ ] Create your function and type out your inputs and outputs:
      ```
            var largerThan = function(num1, num2){ // num1, num2 inputs
              
              var messageToUser = "these values are in ascending order";

                
              return messageToUser; // output
            };
        ```
      [ ] Write up some pseudocode that describes the steps you're going to take to turn your inputs into an output:
      ```
        // invoke your output
        // check to see whether the first value is larger than the second.
          // if so, return the message to the user
          // if not, reassign 'messageToUser' to "these values are in descending order"
            // return the message to the user to the user

      ```
      [ ] Write up testCases that helps you identify whether you have the right outputs for each case:
      ```
          ascendingOrderTestCase = largerThan(1, 4); // should return: "these values are in ascending order";

          descendingOrderTestCase = largerThan(4, 1); // should return: "these values are in descending order"
      ```
      [ ] Put it all together by turning your pseudocode into regular code under each corresponding line:
          ```
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
          ```

* [] Naive Range
* [] Type Check
* [] Naive Form Validator
* [] Word Count
* [] String Repeat
* [] No Ums
* [] Max Value
* [] Advanced Range
* [] Password Check
* [] Matrix Max Traversal
