
function my_callback (parameter){
    return parameter > 0;
}

function myFilter(myList, callback){
    
    let newList = [];
    
    myList.forEach(element =>{
        if(callback(element)){
            newList.unshift(element);
        }
    });

    return newList;
};

function myNewFilter(myList,callback){
    
}


let myList = [-10,20,30,-40,50,60,70,-80,90,100];

console.log(myFilter(myList,my_callback));