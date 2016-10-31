$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var charName = $("#character-name").val();

    var genderValue = $("input:radio[name=gender]:checked").val();


    var classValue = $("#class").val();
    var raceValue= $("#race").val();


    console.log(charName, genderValue, classValue, raceValue);

  });
});
