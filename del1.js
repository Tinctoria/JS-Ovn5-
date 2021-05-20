// ------------DEL 1--------------
// --------------1----------------

const name="Ida"


// --------------2----------------
function printData(string, tal) {
    console.log(string, tal); 
}

printData("Hej", 5); 

// --------------3----------------

function add(x, y) {
    result = x+y; 
    return result;
}

//console.log(add(10, 100)); 

// --------------4----------------

function A(x) {
    addResult=x; 
    console.log(addResult); 
}
A(add(10, 100));

// --------------5----------------

const add2=(x,y)=>x+y; 

console.log(add2(4,5));


