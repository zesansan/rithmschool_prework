##Nested Arrays


rotate 

	function rotate(arr, num){
    	var amount = num % arr.length;
    	for(var i=0; i< amount; i++){
      		arr.unshift(arr.pop());
    	}
    	return arr;
	}
	
makeXOGrid

	function makeXOGrid(rows, columns){
		var results = [];
		var firstLetterX = true;
		for(var i =0; i<rows; i++){
			var rowsArr = [];
			for(var j=0; j<columns; j++){
				if(firstLetterX){
					rowsArr.push("X");
				} else { 
					rowsArr.push("O")	
				}
				firstLetterX = !firstLetterX;
			}	
			results.push(rowsArr);
		}
		return results;
	}	

	function makeXOGrid(rows, columns){
		var results = [];
		for(var i =0; i<rows; i++){
			var rowsArr = [];
			for(var j=0; j<columns; j++){
				if((j + i) % 2 == 0){
					rowsArr.push("X");
				} else { 
					rowsArr.push("O")	
				}
			}	
			results.push(rowsArr);
		}
		return results;
	}			
		