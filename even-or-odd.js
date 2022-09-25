function checker(num){
    if(num%2==1){
        return true;
    }
    else{
        return false;
    }
}
var result = checker(10/3);

if(result == true){
    console.log("Odd number");
}
else{
    console.log ( 'Even Number')
}