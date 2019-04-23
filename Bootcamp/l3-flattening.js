let arrays = [[1, 2, 3], [4, 5], [6]];
// → [1, 2, 3, 4, 5, 6]

// First try
let spot = 0;
let masterArray = [];

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


// New and improved.
const beastArray = arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue) , [])
console.log(beastArray);
