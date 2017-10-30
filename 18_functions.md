##Functions Exercises

**Part I**

difference

	function difference(a,b){
	returns a-b;
	}

product

	function product(a,b){
	returns a*b
	}

printDay

	function printDay(num){
		var days = {
			1: "Monday",
			2: "Tuesday",
			3: "Wednesday",
			4: "Thursday",
			5: "Friday",
			6: "Saturday",
			7: "Sunday"
		}
			return days[num];
	}				
	
lastElement
	
	function lastElement(arr){
		return arr[arr.length-1];
	}

numberCompare

	function numberCompare(a,b){
		if(a > b){
			return "First is greater" 				} else if (a < b){
			return "Second is greater"
		} else {
			return "Numbers are equal"	
		}
	}
	
singleLetterCount

	function singleLetterCount(word, letter){
		var counter = 0;
		word = word.toLowerCase();
		letter = letter.toLowerCase();		
		for(var i =0; i<word.length; i++){
			if(word[i] === letter){
				counter ++;
			} 
			counter += 0;
		}
		return counter;
	}	

**Part II**

multipleLetterCount
	
	function multipleLetterCount(str){
		var counter ={};
		for(var i=0; i<str.length; i++){
			if(!(str[i] in counter)){
				counter[str[i]] = 1 ;
			}else{
				counter[str[i]]++;
            }
		}
		return counter;
	}	
	
arrayManipulation

	function arrayManipulation(arr,comm,loc,val){
	if(comm === "remove"){
		if(loc ==="beginning"){
				return arr.shift();
		}else if(loc ==="end"){
				return arr.pop();
		}		
	} else if (comm ==="add"){
		if(loc === "beginning"){
				arr.unshift(val);	
		} else if(loc === "end"){
				arr.push(val);		
		}
		return arr;
	}							
}	

isPalindrome

	function isPalindrome(str){
		return str.toLowerCase().split("").reverse().join("") === str.toLowerCase()	
		}			
		
**Part III**

	function rps(){
		var userChoice = prompt("Choose rock/paper or scissors").toLowerCase();
		function computerAnswer(num){
			if(num <= 0.33){
				return "rock";
			} else if (num >= 0.66) {
				return "paper";
			} else {
				return "scissors";		
			}
		}
		var computerChoice = computerAnswer(Math.random());
		if(userChoice === computerChoice){
			return "Tie! Computer also chose " + userChoice + "!"
		} 
		else if(userChoice === "rock" && computerChoice ==="scissors"){
			return "You win! Computer chose " + computerChoice + "!";
		} 
		else if(userChoice === "paper" && computerChoice === "rock"){
		 	return "You win! Computer chose " + computerChoice + "!";
		 } else if(userChoice ==="scissors" && computerChoice ==="paper"){ 
		 return "You win! Computer chose " + computerChoice + "!";		} else {
			return "You lose! Computer chose " + computerChoice + "!";
		}	
	}