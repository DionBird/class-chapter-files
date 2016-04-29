$(document).ready(function() {

	$('div').html("<h1>Im bigger</h1>");

	var text = "new text string";
	$('div').after(text)

	$('button').on("click", function(){
		$('div').toggleClass("highlight");
	});

});




// window.onload = function () {

// document.getElementById("calculate").onclick = calculatePledge;

// function calculatePledge () {
// 	var num1 = document.getElementById("value1").value;
// 	var num2 = document.getElementById("value2").value;
// 	var result = num1 * num2;

// 	if (result > 1000) {
// 		text = "Hey, big spender!";
// 	}else if (result > 100){
// 		text = "Thank you kindly!";
// 	}else {
// 		text = "Thanks for trying";
// 	}
	
// 	document.getElementById("calculation").innerHTML = "$" + result + " (" + text + ")";
// }



	// var happy = ":D";
	// var nervous = ":|";
	// var cool = "B)";
	// var mood = document.getElementById("mood");

	// document.getElementById("happy").onclick = function() {
	// 	mood.innerHTML = happy;
	// 	mood.style.color = "yellow";
	// };

	// document.getElementById("nervous").onclick = function() {
	// 	mood.innerHTML = nervous;
	// 	mood.style.color = "lightblue";
	// };

	// document.getElementById("cool").onclick = function() {
	// 	mood.innerHTML = cool;
	// 	mood.style.color = "#feaf12";
	// };

//}