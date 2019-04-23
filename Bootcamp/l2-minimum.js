console.log(min(0, 10));
// → 0
console.log(min(100, 15));
// → -10

// Get lowest number
function min(num1, num2){
    if(num1<num2){
        return num1;
    }
    else if(num2 < num1){
        return num2;
    }
    else{
        return 'They are equal!';
    }
}