##Nested Objects

* primeNumbers

		for(var i =0; i< nestedData.innerData.numberData.primeNumbers.length; i++){

		console.log(nestedData.innerData.numberData.primeNumbers[i]);
}

* even Fibonnaci 

		for(var i =0; i< nestedData.innerData.numberData.fibonnaci.length; i++){
			if(nestedData.innerData.numberData.fibonnaci[i] % 2 == 0){
				console.log(nestedData.innerData.numberData.fibonnaci[i]);
    		}
		}
	
* console log "second"	

		console.log(nestedData.innerData.order[1]);
		
* invoke addSnack	

		nestedData.innerData.addSnack("choclate")
		
* this refers to everything in nestedData.innerData				
* addSpeaker

		function addSpeaker (firstName){
			nestedObject.speakers.push({
				name: firstName
			});
		}
* addLanguage

		function addLanguage(language, helloInLanguage){
			nestedObject.data.languages[language] = {
				hello: helloInLanguage
    		}; 
		}

* addCountry		

		function addCountry(country, capitalVal, populationVal){
			nestedObject.data.continents.europe.countries[country]={
				capital: capitalVal,
				population: populationVal
    		}
		}