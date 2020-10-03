//a
const numbers = [1, 3, 5, 10, 11];

const newNumbers = numbers.map((value, index, array) => {
    if(index === numbers.length-1){
        return value;
    }else{
        return array[index] + array[index + 1];
    }
});

console.log(newNumbers);

//b

const listeOfNames = ["Hassan", "Jan", "Peter", "Boline", "Frederik", "etc"];

const links = listeOfNames.map(function(name){
   return "<a href=\"\">" + name + "</a>"; 
});

const html = "<nav>" + links.join("") + "</nav>";

console.log(html);

//c

var persons = [{name:"Hassan",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Boline", phone: "79345"}];

let respons = "<table>";

const table = persons.map(function(row){
    return "<tr><td>"+row.name+ "</td><td>"+ row.phone + "</td></tr>"; 
});

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
let newtable = table.join("");

respons += newtable + "</table>";

console.log(respons);