drawGrid(16);

const adjustGridbtn = document.getElementById('size');
adjustGridbtn.addEventListener('click', reGrid);

function reGrid() {
	// Clear the 'container' and get new size from input box and redraw grid with user input
	document.querySelectorAll('.box').forEach(e => e.parentNode.removeChild(e));
	var gridDimensions = document.getElementById('newSize').value;
	drawGrid(gridDimensions);
}

function drawGrid(size){
	var div = document.getElementById('container');
	div.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	div.style.gridTemplateRows = `repeat(${size}, 1fr)`;
	//Draw div columns up to 'startGrid'
	for (var i = 0; i < (size*size); i++) {
		let newDiv = document.createElement('div');
		newDiv.className = 'box';
		newDiv.style.opacity = "0.1";
		newDiv.addEventListener('mouseover', color);
		div.appendChild(newDiv);
	}
}

function color(e){
	var colorOption = document.getElementById('color').value;
	console.log(colorOption);
	e.target.style.backgroundColor = colorOption;
	var newOpacity = parseFloat(e.target.style.opacity) + 0.1;
	e.target.style.opacity = newOpacity.toString();
}