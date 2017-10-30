##Debugging Exercises

**Part I**

* The throw keyword allows you to return an error 
* The finally keyword will execute regardless of an error being thrown
* A TypeError occurs when we inccorectly invoke types, and a ReferenceError occurs when you try to access a variable that does not exist or is out of scope.
* Open the sources tab and navigate to snippets then click on the "+" sign or right click to select "new"
* An exception is an error that occurs in your program
* Using the try/catch block 

		try {
			catchErrors;
		} catch(e) {
			console.log("Caught error is", e); 
		}	
		
1. ReferenceError, because person is not defined
2. TypeError, because data.displayInfo is not a function
3. TypeError, because data.displayInfo is undefined so can't set property for foo 
4. ReferenceError, because thing is only accessible in data();

**Part II**

1. i needs to be less than 5 or it will be an inifite loop

		for(var i=0; i < 5; i++){
    	console.log(i);
		}
2. The condition inside of the if statement needed to be a comparison == not assignment =. 

		function addIfEven(num){
    		if(num % 2 == 0){
        	return num + 5;
    		}
    	return num;
		}		
		
3. The conditions in the for loop needed to be separated by semicolons and not commas.

		function loopToFive(){
    		for(var i=0, i < 5, i++){
        		console.log(i);
    		}
		}		
		
4. i needs to iterate to the end of the array, not second to last index. Extra semicolon after i++. Should be the value of numbers at index i to use in modulo. Incorrect use of comparison vs. assignment = in the if statement. Extra semicolon after the if statment conditions. evenNumbers need to push the value of numbers at i, not the index number. Return value should be placed outside of the loop. 

		function displayEvenNumbers(){
    		var numbers = [1,2,3,4,5,6,7,8];
    		var evenNumbers = [];
    		for(var i=0; i<numbers.length; i++){
        		if(numbers[i] % 2 == 0) {
            		evenNumbers.push(numbers[i]);
        		}
    		}
    		return evenNumbers;	
		}
		displayEvenNumbers();   	