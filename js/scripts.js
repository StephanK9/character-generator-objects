
function Character(charName, genderValue, classValue, raceValue) {
  this.charName = charName;
  this.genderValue = genderValue;
  this.classValue = classValue;
  this.raceValue = raceValue;
}

function charCheck(charName) {
  if (charName.length === 0) {
    alert("Please enter a user name.")
  } else if (charName.length === 1 || charName.length === 2 ){
    alert("Name must be at least 3 characters in length")
  }
}





$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var charName = $("#character-name").val();
    var genderValue = $("input:radio[name=gender]:checked").val();
    var classValue = $("#class").val();
    var raceValue = $("#race").val();
    var newCharacter = new Character(charName, genderValue, classValue, raceValue);

    $("#output").append("<div>" + newCharacter.charName + "</div>")
    $("#output").append("<div>" + newCharacter.genderValue + "</div>")
    $("#output").append("<div>" + newCharacter.classValue + "</div>")
    $("#output").append("<div>" + newCharacter.raceValue + "</div>")

    charCheck(charName);
  });
});
