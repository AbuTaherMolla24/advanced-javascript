// const numbers = [2,3,4,5];
// const output = [];

// for(let i = 0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);

// }
// console.log(output);

//map
const numbers = [2,3,4,5];

// function square (element){
//     return element * element;
// }

// const square = element => element * element;
// const square = x => x * x;

// const result = numbers.map(function(element){
//     return element * element;
// })

// const result = numbers.map(x => x * X);
// console.log(result);

// filter 

const bigger = numbers.filter( x => x >2);
const isThere = numbers.find(x => x >2);

console.log(isThere);