function checker( year ){
    if(year%400==0){
        return true;
    }
    else if(year%4==0 && year%100!=0){
        return true;
    }
    else{
        return false;
    }
}
var arr = [1236, 1300, 1600, 1800, 2100];
var leapYears = [];
for(let i=0;i<arr.length;i++){
    if(checker(arr[i])==true){
        leapYears.push(arr[i]);    
    }
}

console.log(leapYears);