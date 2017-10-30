function vowelCount(str){
	var counter = {};
	str.toLowerCase().split("").forEach(function(val){
		if(val === "a" || val ==="e" || val ==="i" ||val === "o" || val ==="u"){
			counter[val]= (counter[val] || 0) + 1;
		}
	});
	return counter;
}

function removeVowels(str){
	var vowels = ["a", "e", "i","o","u"]; 
	return str.split("").filter(function(val){
		return vowels.indexOf(val) === -1;
	});
}