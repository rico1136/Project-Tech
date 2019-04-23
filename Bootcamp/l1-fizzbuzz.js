for (let i = 1; i <=100; i++){
    if(i%5 === 0 && i%3 === 0){
        console.log('FizzBizz');
    }
    else if (i%5 === 0){
        console.log('Bizz');
    }
    else if (i%3 === 0){
        console.log('Fizz');
    }
    else{
        console.log(i);
    }
}