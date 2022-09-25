function oddNum(num){
    if(num%2==1){
        console.log(num);
        return num;
    }
    return 0;
}

const arr = [1,2,3,4,5,6,7,8,9];

var sum = 0;

for(var i=0;i<arr.length;i++){
    sum += oddNum(arr[i]);
}

console.log(sum);