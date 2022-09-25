function inToFt(inches){
    const feet = inches/ 12;
    return feet;
}

var inches = 64;
var result = inToFt(inches);
result=result.toFixed(2);
result = parseFloat(result); 
console.log(result);