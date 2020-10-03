//1

function myFilter(array, callback){
    let newList = [];
    
    array.forEach(element =>{
        if(callback(element)){
            newList.push(element);
        }
    });

    return newList;
}

function my_callback (parameter){
    return parameter > 0;
}

let myList = [-10,20,30,-40,50,60,70,-80,90,100];

console.log(myFilter(myList,my_callback));

console.log(myList.filter(function(value){
    return value > 0;
}));

//2

const listeOfNames = ["Hassan", "Jan", "Peter", "Boline", "Frederik", "etc"];

function my_callback2(name){
    return name.split("").reverse().join("");
};

function myMap(array, callback){
    let newList = [];
    
    array.forEach(element =>{
        newList.push(my_callback2(element));
    });
    return newList;
}

console.log(myMap(listeOfNames,my_callback2));