// Write a function called listNames which takes in an array of songs and console.logs the name of each one.
function listNames(arr){
	arr.forEach(function(val){
		console.log(val.name);
	});
}
// Write a function called listSongDetails which takes in an array of songs and console.logs details about each one. The details should be in the following example format: "Smooth, by Santana featuring Rob Thomas (4:00)".
function listSongDetails(arr){
	arr.forEach(function(val){
		console.log(val.name + ", " + val.artist + " (" + val.duration + ")" )	
	});
}
// Write a function called summerJamCount which takes in an array of songs and returns the number of songs which hit #1 on the charts in June, July, or August.
function summerJamCount(arr){
	var counter = 0;
	arr.forEach(function(val){
		if(val.month == "6" || val.month == "7" || val.month == "8"){
			counter++;
		}
	});
	return counter;
}
// Write a function called getDurations which takes in an array of songs and returns an array of each song's duration.
function getDurations (arr){
	return arr.map(function(val){
		return val.duration;
	});
}

// Write a function called getDurationInSeconds which takes in an array of songs and returns an array of each song's duration in seconds.
function getDurationsInSeconds (arr){
	var durationValues = arr.map(function(val){
		return val.duration; 
	});

	return durationValues.map(function(valDur){
		var seconds = 0;
		var splitTime = valDur.split(":");
		seconds += parseInt(splitTime[0])*60 + parseInt(splitTime[1]);
		return seconds;
	});
	
}
// Write a function called getMainArtists which takes in an array of songs and returns an array of the primary artists on the recordings. If there's only one artist, that artist should be returned; if there are featured artists, they should be ignored (so only the artist to the left of "featuring" is kept.)
function getMainArtists(arr){
	var artists = arr.map(function(val){
		return val.artist;
	});
	return artists.map(function(allVal){
		var artistSplit = allVal.split(" featuring") || allval.split(",");
		return artistSplit[0];
	});
}
// Write a function called getBigHits which takes an array of songs and returns an array of songs which were number one for 10 or more weeks.
function getBigHits(arr){
	return arr.filter(function(val){
		return val.weeksAtNumberOne >= 10;
	});
}
// Write a function called getShortSongs which takes an array of songs and returns an array of songs which shorter than 3 minutes.
function getShortSongs(arr){
	return arr.filter(function(val){
		return parseInt(val.duration) < 3;
	});
}
// Write a function called getSongsByArtist which takes in an array of artists and the name of an artist and returns an array of songs by that artist.
function getSongsByArtist(arr, name){
	return arr.filter(function(val){
		return val.artist === name;
	});

}
// Refactor summerJamCount to use reduce!
function getSummerJamCount(arr){
	return arr.reduce(function(acc,val){
		if(val.month == "6" || val.month == "7" || val.month == "8"){
			acc++;
		}
		return acc;
	},0);
}

// Write a function called getTotalDurationInSeconds which takes in an array of songs and returns the total amount of time (in seconds) it would take to listen to all of the songs. (Hint: can you use anything you've written already to help solve this problem?)
function getTotalDurationInSeconds(arr){
	var durationValues = arr.map(function(val){
		return val.duration; 
	});

	var durationInSeconds = durationValues.map(function(valDur){
		var seconds = 0;
		var splitTime = valDur.split(":");
		seconds += parseInt(splitTime[0])*60 + parseInt(splitTime[1]);
		return seconds;
	});	
	return durationInSeconds.reduce(function(acc,val){
			return acc + val;
	},0)	

}
// Write a function called getSongCountByArtist which takes in an array of songs and returns an object. The keys in the object should be artist names, and the values should be the number of songs by that artist in the orignal array.
function getSongCountByArtist(arr){
	var listArtists = arr.map(function(val){
		return val.artist;
	}); 
	var allArtists = listArtists.map(function(val){
		var allSingers = val.split(" featuring "); 
        return allSingers[0];
	});
	return allArtists.reduce(function(acc,val){
		acc[val] = (acc[val] || 0)+1;
		return acc;
	},{});
}
// Write a function called averageWeeksAtNumberOne which takes in an array of songs and returns the average number of weeks that songs on the list were #1.
function averageWeeksAtNumberOne(arr){
	return Math.round((arr.reduce(function(acc,val){
		return acc+val.weeksAtNumberOne;
	},0)/arr.length)*10)/10;
}































