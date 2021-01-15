$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const beverage = $("input:radio[name=beverage]:checked").val();
    const superhero = $("input:radio[name=superhero]:checked").val();
    const car = $("input:radio[name=car]:checked").val();
    const pokemon = $("input:radio[name=pokemon]:checked").val();
    const weapon = $("input:radio[name=weapon]:checked").val();
  });
});