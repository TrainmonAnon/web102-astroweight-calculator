//import { SSL_OP_LEGACY_SERVER_CONNECT } from "constants";

// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];
// We're going to solve this by breaking the problem into three parts.
// Programmers like automating things, we'll populate the HTML drop down options using code,
// instead of having to type out all the values.
// Create a function that does the some math and gives us the new weight.
// Then create a function that responds when the user clicks on the button.

// 1. Populate the dropdown element with the data found in the planets array.
// The value of each option should be the planet's name.
// Use the following built-in methods:
// `.forEach` `document.createElement` `document.getElementById` `.appendChild`
planets.reverse();
planets.forEach(function(element){
    createPlanetOption(element[0]);
});

function createPlanetOption(planetName){
    var planet = document.createElement("option");
    var planetText = document.createTextNode(planetName);
    planet.appendChild(planetText);

    document.getElementById("planets").appendChild(planet);
}

function calculateWeight(weight, planetIndex) {
    // 2. Write the code to return the correct weight
    return weight * planets[planetIndex][1];
}
  
function handleClickEvent(e) {
    // 3. Create a variable called userWeight and assign the value of the user's weight.
    var userWeight = document.getElementById("user-weight").value;
    // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
	var planetIndex = document.getElementById("planets").selectedIndex;
    var planetName = document.getElementById("planets").value;    // 5. Create a variable called result and assign the value of the new calculated weight.
    var result = calculateWeight(userWeight, planetIndex);
    // 6. Write code to display the message shown in the screenshot.
    document.getElementById("output").innerText = "If you were on " + planetName + ", you would weigh " + result +"lbs!";
}
  
// 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
document.getElementById("calculate-button").onclick = handleClickEvent;
// Bonus Challenges
// 8. Reverse the drop down order so that the sun is first.
// 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)

function plutoClickEvent(){
    if (document.getElementById("pluto-is-planet").checked == true){
        document.getElementById("planets").options[10].disabled = false;
    }
    else{
        document.getElementById("planets").options[10].disabled = true;
    }
}
document.getElementById("pluto-is-planet").onclick = plutoClickEvent;

function newPlanetClickEvent(){
    var newPlanetName = document.getElementById("new-planet-name").value;
    var newPlanetWeight = document.getElementById("new-planet-weight").value;
    planets.push([newPlanetName, newPlanetWeight]);

    createPlanetOption(newPlanetName);
}
document.getElementById("add-planet").onclick = newPlanetClickEvent;