
function Character(charName, genderValue, classValue, raceValue) {
  this.charName = charName;
  this.genderValue = genderValue;
  this.classValue = classValue;
  this.raceValue = raceValue;
}

function charCheck(charName) {
  if (charName.length === 0) {
    alert("Please enter a user name.")
    return false;
  } else if (charName.length === 1 || charName.length === 2 ){
    alert("Name must be at least 3 characters in length")
    return false;
  } else {
    return true;
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

    if (charCheck(charName) === true) {
      $("#output").append("<div>" + newCharacter.charName +    "</div>" +
                          "<div>" + newCharacter.genderValue + "</div>" +
                          "<div>" + newCharacter.classValue +  "</div>" +
                          "<div>" + newCharacter.raceValue +   "</div>")
    };


  });
});
