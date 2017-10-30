var origBoard;
var playerOne = "X";
var playerTwo = "O";
var currentPlayer = playerOne;
var winner;
var winCombs = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];

function checkWinner(){
	winCombs.forEach(function(combo){
	  	if(origBoard[combo[0]] !== undefined 
	  		&& origBoard[combo[0]] === origBoard[combo[1]] 
	  		&& origBoard[combo[1]] === origBoard[combo[2]]){
	  			winner = origBoard[combo[0]];
	  		    console.log(combo, winner);
	  			document.querySelector('.endgame').innerText = winner + ' wins!';	
	  	}
	  	 
	}); 
    console.log('is there no winner and is the game over?', winner);
	if(!winner && isGameOver()){
		console.log('there is no winner and the game is over');
		document.querySelector('.endgame').innerText = 'Tied!!';
	}
}

var cells = document.querySelectorAll('.cell');

startGame();

function startGame(){
	currentPlayer = playerOne;
	origBoard = new Array(9); 
	winner = undefined;
	document.querySelector('.endgame').innerText = '';
	for(var i =0; i < cells.length; i++){
		cells[i].innerText = '';
		cells[i].addEventListener('click', turnClick, false);
	}
}

function turnClick(event){
	turn(event.target.id);
}

function togglePlayer(){
	if(currentPlayer == playerOne){
		currentPlayer = playerTwo;
	} else {
		currentPlayer = playerOne;
	}
	return currentPlayer;
}

function turn(cellId){
	if(!origBoard[cellId]){
	origBoard[cellId] = currentPlayer;
	document.getElementById(cellId).innerText = currentPlayer;
	checkWinner();
	togglePlayer();
	} 
}	
 
function isGameOver(){
	var isOver = true; 
	for(var i=0; i<origBoard.length; i++){
		if(origBoard[i] === undefined){ 
			isOver = false; 
			console.log('isOver', isOver);
			return isOver; 
		} 
	} 
	console.log('isOver', isOver);
	return isOver;
}

