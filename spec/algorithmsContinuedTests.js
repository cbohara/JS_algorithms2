(function() {
  'use strict';

  describe('Advanced Algorithms', function() {

    describe('Arrays', function() {


      describe('Naive Range', function(){

        it('should create filled with numbers up to whichever number the user inputs', function() {
           
           var rangedArray = collections.naiveRange(100);
           expect(rangedArray.length).to.equal(100);

        });

        it('should exclude the number that was inserted as a parameter', function() {
           
           var rangedArray = collections.naiveRange(100);
           expect(rangedArray.length).to.equal(100);
           expect(rangedArray[rangedArray.length - 1]).to.equal(99);

        });

      });

      describe('Type Check', function(){

        it("return 'array' if the collection is an array", function(){
          var arrayTest = collections.typeCheck(["i'm an array"]);
          expect(arrayTest).to.equal('array')
          
        });


        it("return 'object' if the collection is an object", function(){
          // Does not check for type
          var objectTest = collections.typeCheck({val: "i'm an object"});

          expect(objectTest).to.equal('object');
          
        });

      });


      describe('Naive Form Validator', function(){


        it("should return 'form is complete', if every field in the form is filled out correctly.", function(){
          
          var testObjectOne = {name: 'Albrey', location: 'Oakland', phoneNumber: 5102929538};
          
          var pass = collections.naiveFormValidator(testObjectOne);

          expect(pass).to.equal('form is complete');


        });

        it("should return 'name field is required!' if the 'name' property isn't a string value", function(){
          var testObjectTwo = collections.naiveFormValidator({name: null, location: 'Oakland', phoneNumber: 5102837472});
          
          var testObjectThree = collections.naiveFormValidator({name: undefined, location: 'Oakland', phoneNumber: 5102837472});
          
          var testObjectFour = collections.naiveFormValidator({name: 9, location: 'Oakland', phoneNumber: 5102837472});
          
          var testObjectFive = collections.naiveFormValidator({name: true, location: 'Oakland', phoneNumber: 5102837472});

          expect(testObjectTwo).to.equal('name field is required!');
          expect(testObjectThree).to.equal('name field is required!');
          expect(testObjectFour).to.equal('name field is required!');
          expect(testObjectFive).to.equal('name field is required!');
          
        });

        it("should return 'location field is required!' if the 'location' property has no string value", function(){
          var testObjectTwo = collections.naiveFormValidator({name: 'Albrey', location: undefined, phoneNumber: 5102837472});
            // console.log(testObjectTwo.location)
          var testObjectThree = collections.naiveFormValidator({name: 'Albrey', location: null, phoneNumber: 5102837472});
            // console.log(testObjectThree.location)
          var testObjectFour = collections.naiveFormValidator({name: 'Albrey', location: 9, phoneNumber: 5102837472});
            // console.log(testObjectFour.location)
          var testObjectFive = collections.naiveFormValidator({name: 'Albrey', location: true, phoneNumber: 5102837472});
            // console.log(testObjectFive.location)

          expect(testObjectTwo).to.equal('location field is required!');
          expect(testObjectThree).to.equal('location field is required!');
          expect(testObjectFour).to.equal('location field is required!');
          expect(testObjectFive).to.equal('location field is required!');
          
          
        });

        it("should return 'phone field is required!' if the 'phoneNumber' property is not a 10 digit number", function(){
          var testObjectTwo = collections.naiveFormValidator({name: 'Albrey', location: 'Oakland', phoneNumber: '5102837472'});
          var testObjectThree = collections.naiveFormValidator({name: 'Albrey', location: 'Oakland', phoneNumber: true});
          var testObjectFour = collections.naiveFormValidator({name: 'Albrey', location: 'Oakland', phoneNumber: undefined});
          var testObjectFive = collections.naiveFormValidator({name: 'Albrey', location: 'Oakland', phoneNumber: null});


          expect(testObjectTwo).to.equal('phone field is required!');
          expect(testObjectThree).to.equal('phone field is required!');
          expect(testObjectFour).to.equal('phone field is required!');
          expect(testObjectFive).to.equal('phone field is required!');
            
        });

      });

      
      describe('Word Count', function(){
        it("should return the number of words in a sentence", function(){
          var testSentence = 'hey how are you?'

          expect(collections.wordCount(testSentence)).to.equal(4);

        });
      });

      describe('String Repeat', function(){
        
        it("should return the input string as many times as the input number, separated by a new line", function(){
          var testCase = 'you used to call me on my cell phone'
          var returnedString = collections.stringRepeat(testCase, 3);
          var result = 'you used to call me on my cell phone' + '\n' + 'you used to call me on my cell phone' + '\n' + 'you used to call me on my cell phone' + '\n';

          expect(returnedString).to.equal(result);

        });

        it("should return the original string if the input parameter is less than 1", function(){
          var testCase = 'you used to call me on my cell phone'
          var returnedString = collections.stringRepeat(testCase, 1);
          expect(returnedString).to.equal(testCase);
        });

        
      });


      describe('No Ums', function(){
        it('should take a string filled with ums, and return a similar string without ums', function(){

          var testString = 'hey um i like to eat pizza um would you like some um pizza too?';
          var passTest = collections.noUm(testString);

          expect(passTest).to.equal('hey i like to eat pizza would you like some pizza too?')

        });

      });


      describe("Max Value", function(){
        it("should take an array of numbers and return the largest one", function(){
          var testArr = [1, 3, 27, 53, 10, 296, 31];
          var answer = collections.maxValue(testArr);

          expect(answer).to.equal(296);
        });
      });


    describe('Extra Credit', function(){

      describe('Advanced Range', function(){

        it('should take two numbers and create an array filled with numbers starting from param1 all the way up to param2', function() {
           
           var rangedArray = collections.advancedRange(5, 20);
           expect(rangedArray.length).to.equal(15);
        });


        it('should include the first parameter in the result array', function() {
           
           var rangedArray = collections.advancedRange(5, 20);
           expect(rangedArray[0]).to.equal(5);
        });


        it('should exclude the number that was inserted as a parameter', function() {
           
           var rangedArray = collections.advancedRange(5, 20);
            expect(rangedArray[rangedArray.length - 1]).to.equal(19);
        });


        it('should handle one input the way same way that naiveRange handles one input', function() {
           
           var rangedArray = collections.advancedRange(5);

           expect(rangedArray.length).to.equal(5);
           expect(rangedArray[rangedArray.length - 1]).to.equal(4);

        });

      });

      describe('passwordCheck', function(){
        it('should validate that the password has at least one number', function(){

        var password = 'ringaDemonFlo0d';
        var failword = 'myname';
          expect(collections.passwordCheck(password)).to.equal('great password');
          expect(collections.passwordCheck(failword)).to.equal('your password needs work');
        });

      });

      describe('Matrix Max Traversal', function(){
        it('should return an array filled with the max numbers in each mini array', function(){
          var ourMatrix = [
              [1, 7, 271, 42],
              [21, 9, 1, 5],
              [9, 9, 42, 495, 483],
              [19, 18472, 1, 485, 81]
            ];

          var answer = collections.matrixMaxTraversal(ourMatrix);

          expect(answer[0]).to.equal(271);
          expect(answer[1]).to.equal(21)
          expect(answer[2]).to.equal(495);
          expect(answer[3]).to.equal(18472);
        
        });

      });



    });

    



      



    });
  
  });

}());