console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

function range(num1, num2, steps = 1) {
    let numberArray = [];
    let place = 0;
    if (num1 < num2){
        for (let i=num1; i <= num2; i = i + steps){
            numberArray[place] = i;
            place++;
        }
        return numberArray;
    }
    else if(num2 < num1) {
        for (let i=num1; i >= num2; i = i + steps){
            numberArray[place] = i;
            place++;
        }
        return numberArray;
    }
}

function sum(array) {
    let sumOfArray = 0;
    for (let i = 0; i < array.length; i++){
        sumOfArray = sumOfArray + Number(array[i]);
    }
    return sumOfArray;
}