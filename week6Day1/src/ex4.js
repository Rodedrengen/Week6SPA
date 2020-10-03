//a
var all = ["Hassan", "Peter", "Carla", "Boline"];

all = all.join("#");

console.log(all);

//b
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [2, 3, 67, 33];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(numbers.reduce(reducer));

//c
const members = [
    {name: "Peter", age: 18},
    {name: "Jan", age: 35},
    {name: "Janne", age: 25},
    {name: "Martin", age: 22}];

var average = function (accumulator, member, index, arr) {
      
    if(index === arr.length - 1){
        accumulator += member.age;
        return accumulator / members.length;
    }
    return accumulator + member.age;
    
};

console.log(members.reduce(average,0));

//d

const votes = [ "Biden","Trump","Biden","Biden","Trump","Trump","Biden","None"];

result = votes.reduce((accu, candidate)=>{
    
    accu[candidate] = accu[candidate]? accu[candidate] + 1: 1;
    return accu;
},{});

console.log(result);
