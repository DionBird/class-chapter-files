
$(document).ready(function () {

	var xhr = new XMLHttpRequest();

	xhr.onload = function() {

		var jsonResponse = JSON.parse(xhr.responseText);

		console.log(jsonResponse);
		
		var output;

		for (var i = 0; i < jsonResponse.events.length; i++) {

			output = '<div class="events">';
			output += "<img src='" + jsonResponse.events[i].map + "'>";
			output += "<p><strong>" + jsonResponse.events[i].location + "</strong></p>";	
			output += "<p>"+ jsonResponse.events[i].date + "</p>";
			output += '</div>';
			$("#content").append(output);
		}
	}

	xhr.open("GET", "data/data.json", true);
	xhr.send(null);

});


/*ya got it bigguy, yes I talk to myself*/