
function Character(charName, genderValue, classValue, raceValue) {
  this.charName = charName;
  this.genderValue = genderValue;
  this.classValue = classValue;
  this.raceValue = raceValue;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var charName = $("#character-name").val();
    var genderValue = $("input:radio[name=gender]:checked").val();
    var classValue = $("#class").val();
    var raceValue = $("#race").val();
    var newCharacter = new Character(charName, genderValue, classValue, raceValue);


    if (charName.length === 0) {
      $("#character-name").addClass("false-value");
    } else if (charName.length === 1 || charName.length === 2) {
      alert("Name must be at least 3 characters in length")
    } else if (genderValue === undefined) {
      alert("please select a gender");
    } else {
      $("#output").append("<div>" + newCharacter.charName +    "</div>" +
                        "<div>" + newCharacter.genderValue + "</div>" +
                        "<div>" + newCharacter.classValue +  "</div>" +
                        "<div>" + newCharacter.raceValue +   "</div>")
      $("#character-name").removeClass("false-value");
    };

  });
});
