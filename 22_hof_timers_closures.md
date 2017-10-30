##Higher Order Functions, Timers, and Closures

countdown

	function countDown(num){
		var counter = setInterval(function(){
			 	num--;
				console.log(num);
				if(num<= 1){
					clearInterval(counter); 
					console.log("DONE!");
    			}	
			}, 1000);
	}
	
randomGame

	function randomGame(){
		var num;	
		var counter = 0;
		var randomNum = setInterval(function(){
			num = Math.random();
			counter++;
			if(num > .75) {
				clearInterval(randomNum);
				console.log(counter);
			}
    	}, 1000);
	}	

isEven
	
	function isEven(num){
		return num % 2 === 0;
	}

isOdd	
	
	function isOdd(num){
		return num % 2 !== 0;
	}
	

isPrime

	function isPrime(num){
		for(var i = 2; i < num; i++){
			if(num % i === 0){
				return false;
       	}	
    	}
		return true;
	} 		
	
numberFact

	function numberFact(num, cb){
		return cb(num);
	}				
			
find
	
	function find(arr, cb){
		for(var i=0; i<arr.length; i++){
			if(cb(arr[i])){
				return arr[i];
          }
     	}
 	}
	
findIndex

	function findIndex(arr, cb){
		for(var i=0; i<arr.length; i++){
			if(cb(arr[i])){
				return i;
           }
     	}
 	}			
 	
 specialMultiply
 
 	function specialMultiply(a, b){
 		if(arguments.length > 1){
 			return a*b;
 		} else{	
 			return function(b){
 				return a * b;
 			}
 		}	
 	}		