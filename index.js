var dwarfNames = ["Doc", "Dopey", "Bashful", "Grumpy"];

function dwarfRollCall(dwarves) {
  var listDwarves = [];
  for (var i = 0; i < dwarves.length; i++) {
    listDwarves.push(`${i++}. ${dwarves[i]} `);
  }
  return listDwarves.join("");
}

//

function summonCaptainPlanet(planeteerCalls) {
  var uppercasePlaneteerArray = [];
  for (let i = 0; i < planeteerCalls.length; i++) {
    uppercasePlaneteerArray.push(`${planeteerCalls[i]}\!`.toUpperCase())
  }
  return uppercasePlaneteerArray;
}

//

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    }
  }
  return false;
}

//

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
  if (foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert") {
    return foods[i];
  }
}
return "no cheese!";
}
