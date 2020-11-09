//Sets the initial colours of the three elements on page load
document.getElementById("blue").style.color="blue";
document.getElementById("green").style.color="green";
document.getElementById("red").style.color="red";

//A function to change colours of elements when called
function mix(){

	var first = "#0000ff";
	var second = "#008000";
	var third = "#FF0000";

	document.getElementById("blue").style.color=first;
	document.getElementById("green").style.color=second;
	document.getElementById("red").style.color=third;

}
