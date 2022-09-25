function  factorial (num){
    let factorial=0;
    for(let i=0;i<=num;i++){
        if(i===0){
            factorial=1;
        }
        else{
            factorial*=i;
        }
    }
    return factorial;
}

console.log(factorial(0));

function factorial(num){
    let factorial=1;
    while(num>=1){
        factorial*=num;
        num--;
    }
    return factorial;
}
console.log(factorial(0));