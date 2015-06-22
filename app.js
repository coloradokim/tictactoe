var counter = 0
var oMoves = []
var xMoves =[]
var boxes = document.getElementsByClassName('box')

// //track play
var turn = true;
var playsX = [];
var playsO = [];

// The winning patterns
	var winningCombos = [
		[1,2,3],
		[1,4,7],
		[1,5,9],
		[4,5,6],
		[3,6,9],
		[3,5,7],
		[7,8,9],
		[2,5,8]
	];

//eventListener that is multiuse
	function XOListener(){
  for (var i = boxes.length - 1; i >= 0; i--) {
    boxes[i].addEventListener("click", addXorO);
  }
}
XOListener();

//XorO making
  function addXorO(event){
  if (event.target.innerHTML.length === 0){ //if box is empty
    if (counter % 2 === 0) { //if the counter is an odd number
      oMoves.push(parseInt(event.target.getAttribute("data-num")));
      event.target.innerHTML = "O";
      counter++;
      // checkForWin(OMoves, "O");
    }
    else {
      xMoves.push(parseInt(event.target.getAttribute("data-num")));
      event.target.innerHTML = "X";
      counter++;
      // checkForWin(XMoves, "X");
    }
	}
	console.log('the counter is ' + counter);
	if (counter === 9){
		alert("The game is a draw. Play again!");
	}
}


//Not working
function checkForWin(movesArray, name){
  // loop over the first array of winning combinations
  for (i = 0; i < winningCombinations.length; i++) {
    // reset the winCounter each time!
    winCounter = 0;
    // loop over each individual array
    for (var j = 0; j < winningCombinations[i].length; j++) {
      // if the number in winning combo array is === a number in moves array, add to winCounter
      if(movesArray.indexOf(winningCombinations[i][j]) !== -1){
        winCounter++;
      }
      // if winCounter === 3 that means all 3 moves are winning combos and game is over!
      if(winCounter === 3){
        alert("Game over, " + name + " wins!");
        resetBoard();
      }
    }
  }
}

//click reset button to reload the page (not working)
function resetBoard(){
	var resetButton = document.getElementById('reset')
  resetButton.addEventListener('click', location.reload());
}
