function myEvent() {
	console.log("Button pushed.");
	var red = document.getElementById("red").value;
	var green = document.getElementById("green").value;
	var blue = document.getElementById("blue").value;
	var borderWidth = document.getElementById("border-width").value;
	var rgbColor = `rgb(${red}, ${green}, ${blue})`;
	console.log(rgbColor);
	document.getElementById("paragraph").style.color = rgbColor;
	document.getElementById("paragraph").style.borderColor = rgbColor;
	document.getElementById("paragraph").style.width = `${borderWidth}px`;
}
