$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var formOne = ['person1', 'person2', 'animal', 'exclamation', 'verb', 'noun'];
    formOne.forEach(function(form) {
      var userInput = $("input#" + form).val();
      $("." + form).text(userInput);
    });

    $("#story").show();

    event.preventDefault();
  });
});
