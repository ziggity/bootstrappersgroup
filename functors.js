function stringFunctor(value, fn){
    var chars = value.split("")
    console.log("it works")
    return chars.map(function(char){
        return String.formCharCode(fn(char.charCodeAt(0)))
    }).join("")
}

function plus1(value) {
    return value +1
}

function minus1(value){
    return value -1
}

[3,4].map(plus1) // returns 4,5
stringFunctor("ABC", plus1) // returs "BCD"
stringFunctor("XYZ", minus1) // returns "RXY"

//In javascript: A functor is a function
//When given a value and a function - it will unwrap the value into the individual parts, 
and fee dthe parts into the function it has been given and return them in a structured form 

