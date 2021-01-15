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
  
    determinePoints(beverage);
    determinePoints(superHero);
    determinePoints(car);
    determinePoints(pokemon);
    determinePoints(weapon);

    let result;
      if (pyPoints > jsPoints && pyPoints > csPoints) {
        $("#python").show();
      } else if (jsPoints > pyPoints && jsPoints > csPoints) {
        $("#javascript").show();
      } else if (csPoints > jsPoints && csPoints > pyPoints) {
        $("#cs").show();
      } else if (pyPoints === jsPoints) {
        $("#python-javascript").show();
      } else if (pyPoints === csPoints) {
        $("#python-cs").show();
      } else if (jsPoints === csPoints){
        $("#javascript-cs").show();
      } else {
        result = "something went wrong. "
      }
      console.log(result)
      $("#output").text(result);

  });
});




