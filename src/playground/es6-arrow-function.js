const square = function (x) {
    return x * x;
};

const squareArrow = (x) => {
    return x * x;
};

// const squareArrow = (x) => x * x;

console.log(squareArrow(9));

const getFirstName = (name) => {
    return name.split(' ')[0];
}

const firstName = (name) => name.split(' ')[0];

console.log(getFirstName('Marjan Ramin'));
console.log(firstName('Marjan Ramin'));