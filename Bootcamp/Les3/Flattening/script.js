let arrays = [[1, 2, 3,4,5,6,7,8,9], [4, 5], [6,7,8,9,10,11]];
// → [1, 2, 3, 4, 5, 6]

let spot = 0;
let masterArray = [];

console.log(arrays[0]);

for (let i = 0; i<arrays.length; i++){
    arrayFiller(arrays[i]);
}

function arrayFiller(array){
    for (let j = 0; j<array.length; j++){
        masterArray[spot] = array[j];
        spot++;
    }
}

masterArray.sort((a, b) => {return a-b});
console.log(masterArray);