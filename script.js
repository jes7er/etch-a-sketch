drawGrid(16);

const adjustGridbtn = document.getElementById('size');
adjustGridbtn.addEventListener('click', reGrid);

//const randomSelector = document.getElementById('random');
//randomSelector.addEventListener('click', random);

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
		//newDiv.style.opacity = "0.1";
		newDiv.addEventListener('mouseover', color);
		div.appendChild(newDiv);
	}
}

function color(e){
	//if random checked --> generate random RGB value
	//uses randomColor.js by David Merfield <-- See readME.md for source attribution
	var randomSelector = document.querySelector('input[id="random"]');
	var opacitySelector = document.querySelector('input[id="opacity"]');
	var currentOpacity = Number(e.target.style.opacity);

  	if (randomSelector.checked == true) {
  		e.target.style.backgroundColor = randomColor({luminosity: 'bright'});
  	} else {
  		e.target.style.backgroundColor = document.getElementById('color').value;
  	}

  	//if opacity checked --> build opacity with each pass, starting at .1
  	if ((opacitySelector.checked == true) && (currentOpacity == 1.0)) {
  		e.target.style.opacity = '0.1';
  	} else if ((opacitySelector.checked == true) && (currentOpacity < 1.0)) {
  		//var newOpacity = parseFloat(e.target.style.opacity) + 0.1;
  		currentOpacity += 0.1;
		e.target.style.opacity = currentOpacity.toString();
  	}
}