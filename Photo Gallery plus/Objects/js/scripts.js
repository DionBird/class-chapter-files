
$(document).ready(function() {

	function image(title, url, tags, starred){
		this.title = title,
		this.url = url,
		this.tags = tags,
		this.starred = starred,
		this.starToggle = function() {
			var star = "#" + this.title + " .star";
			$(star).toggleClass("staron");
			this.starred = !this.starred;
			};
	}
	var img1 = new image("Bouquet", "images/bouquet.jpg", ["flower", "rose", "pink"], false);
	var img2 = new image("Tree", "images/tree.jpg", ["tree", "landscape", "forest"], false);

	var images = [img1, img2];

	function addAll() {

		$("#gallery").empty();

		images.forEach(function(img) {
		
			var $fig = $("<figure>");
		
			$fig.attr("id", img.title);

			var $newImg = $("<img>");
			
			$newImg.attr("src", img.url);


			var $imgInfo = $("<figcaption>");

			$imgInfo.html("TAGS: " + img.tags[0] + " , " + img1.tags[1]);

			var $star = $("<span>");
			$star.addClass("star");
			$imgInfo.append($star);


			$fig.append($newImg);
			$fig.append($imgInfo);

			$("#gallery").append($fig);

			if(img.starred == true){
				img.starToggle();
			}
			$(".star").on("click", function(){ 
				var obj = $(this).parent().parent().get(0);
				console.log(obj);
				if(obj.id == img.title) {
					img.starToggle();
				}
			});
		});
	}

	addAll();

	$("#filtertree").on("click", function() { filter("tree"); });
	$("#filterflower").on("click", function() { filter("flower"); });
	$("#favs").on("click", function() { filter(true); });
	$("#all").on("click", function() { filter("figure"); });

	function filter(tag){
		images.forEach(function(img) {

			if($.inArray( tag, img.tags ) >= 0){
				$("#" + img.title).fadeIn();
			} else if(tag == "figure") {
				$("#" + img.title).fadeIn();
			} else if (img.starred == tag) {
				$("#" + img.title).fadeIn();
			} else {
				$("#" + img.title).fadeOut();
			}
		});
	}

	$("#addImage").on("click", function() {
		$("#modal").fadeIn();
		$("#overlay").fadeIn();
	});

	$("#overlay").on("click", function() {
		$("#modal").fadeOut();
		$(this).fadeOut();

	})


/*OMG slow down*/




	var title = $("input[name=title]");
	var tags = $("input[name=tags]");
	var source = $("input[name=imgfile]");

	$(title).on("blur", function() {

		var check = title[0].checkValidity();

		if(check == false){
			$(this).after("<p class='error'>" + title[0].validationMessage + "</p>");
		}

	});

	$("#submit").on("click", function() {

		if(title[0].checkValidity() == false || tags[0].checkValidity() == false || source[0].checkValidity() == false ){
			$("#submit").after("<p class='error'>All fields are required</p>")
		} else {
			
			console.log(source);

			images.push(new image(title.val(), window.URL.createObjectURL(source.get(0).files[0]), tags.val().split(" "), false));
			addAll();
			$("#overlay").click();
		}
	});

	$(tags).on("keydown", function(event) {

	
		if (event.which == 13){
			$("#submit").click();
		}
	});



});