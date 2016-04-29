$(document).ready(function() {

  $("input[name=name]").on("focus", function() {
    alert("Enter your name");
  });

  $("input[name=url]").on("blur", function() {
    var check = $(this)[0].checkValidity();

    $(this)[0].setCustromValidity("Use a complete url http://my.url.com");

    if (check == false) {
      $(this).after($(this)[0].validationMessage);
    }
  });

  $('#submit').on("click", function() {
    var name = $("input[name=name]").val();

    $("#submit").after(name);
  });

  $("input[name=other]").on("keydown", function(event) {
    if(event.which == 13) {
      $("#submit").click();
    }
  });

});
