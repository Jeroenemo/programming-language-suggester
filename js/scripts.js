let pyPoints = 0;
let jsPoints = 0;
let csPoints = 0;

function determinePoints(surveyValue) {
  if (surveyValue === "py") {
    pyPoints += 1;
  } else if (surveyValue === "js") {
    jsPoints += 1;
  } else {
    csPoints += 1;
  }
};

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const beverage = $("input:radio[name=beverage]:checked").val();
    const superHero = $("input:radio[name=superhero]:checked").val();
    const car = $("input:radio[name=car]:checked").val();
    const pokemon = $("input:radio[name=pokemon]:checked").val();
    const weapon = $("input:radio[name=weapon]:checked").val();
    
    determinePoints(beverage, superHero, car, pokemon, weapon);

    if (pyPoints > jsPoints && pyPoints > csPoints) {
      $("#output").text("You should study Python!");
    } else if (jsPoints > pyPoints && jsPoints > csPoints) {
      $("#output").text("You should study JavaScript!");
    } else if (csPoints > jsPoints && csPoints > pyPoints) {
      $("#output").text("You should study C#!");
    } else if (pyPoints === jsPoints) {
      $("#output").text("It's a tie between Python and JavaScript!");
    } else if (pyPoints === csPoints) {
      $("#output").text("It's a tie between Python and C#!");
    } else if (jsPoints === csPoints) {
      $("#output").text("It's a tie between JavaScript and C#!");
    }
    pyPoints = 0;
    jsPoints = 0;
    csPoints = 0;
  });
});




