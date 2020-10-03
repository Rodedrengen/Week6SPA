//1
const listeOfNames = ["Hassan", "Jan", "Peter", "Boline", "Frederik", "etc"];

const filteredNames = listeOfNames.filter(function(name){
   return name.includes("a");
});

console.log(filteredNames);

//2

const reversedNames = listeOfNames.map(function(name){
    return name.split("").reverse().join("");
});

console.log(reversedNames);

