const add = function (a,b){
    console.log(arguments);
    return a + b;
};

console.log(add(4, 5));

const multiplier = {
    numbers: [2,15,4,5,0],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map( (number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());

