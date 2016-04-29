
$(document).ready(function() {
	console.log("Ready to go");

	var img1 = {
		title: "Bouquet",
		url: "images/bouquet.jpg",
		tags: ["flower",  "rose", "pink"],
		starred: true
	};

	var img2 = {
		title: "Tree",
		url: "images/tree.jpg",
		tags: ["tree",  "landscape", "forest"],
		starred: false
	};

/*fix this later*/

	var images = [img1, img2];

	images.forEach(function(img) {
		var $fig = $("<figure>");
		$fig.attr("id", img.title);

		var $img = $("<img>");


		$img.attr("src", img.url);

		var $imgInfo = $("<figcaption>");
		$imgInfo.text("TAGS: " + img.tags[0] + ", " + img.tags[1] + ", " + img.tags[2]);

		$fig.append($img);
		$fig.append($imgInfo);

		$("#gallery").append($fig);
	});

	$("#filterFlower").on("click", function() {
		filter("flower");
	});

	$("#filterTree").on("click", function() {
		filter("tree");
	});

	$("#refresh").on("click", function() {
		filter
	});

	function filter(tag) {
		images.forEach(function(img) {
			console.log($.inArray(tag, img.tags));
			if($.inArray(tag, img.tags) < 0) {
				$("#" + img.title).fadeOut();
			}
		});
	};
});