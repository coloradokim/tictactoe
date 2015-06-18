var counter = 0
var oMoves = []
var xMoves =[]
var boxes = document.getElementsByClassName('box')

// //track play
// var turn = true;
// var playsX = [];
// var playsO = [];

// store winning combinations
	// var winningCombos = [
	// 	[1,2,3],
	// 	[1,4,7],
	// 	[1,5,9],
	// 	[4,5,6],
	// 	[3,6,9],
	// 	[3,5,7],
	// 	[7,8,9],
	// 	[2,5,8]
	// ];

//eventListener that is multiuse
	function addXandOListener(){
  for (var i = boxes.length - 1; i >= 0; i--) {
    boxes[i].addEventListener("click", addXorO);
  }
}
addXandOListener();

//XorO making
  function addXorO(event){
  if (event.target.innerHTML.length === 0){ //if box is empty
    if (counter % 2 === 0) {
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
		alert("Game Over!");
	}
}

// Clear all added styles, content and reset the turn
	// var clearGame = function() {
	// 	for (var i = 0; i < boxes.length; i++) {
	// 		boxes[i].innerHTML = '';
	// 		boxes[i].className = 'box';
	// 	}
	// 	playsX = [];
	// 	playsO = [];
	// 	turn = true;
	// };
