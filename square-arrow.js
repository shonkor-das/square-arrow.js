
const square = (element) => element ** 2

const a = [1, 2, 3, 4, 5];
const a2 = a.map(square);
console.log(a2);

// sum square element 
var sum = 0;

for (let i = 0; i < a2.length; i++) {
    sum += a2[i];
}
console.log(sum);

// average of the sum of the squared elements 

const avrg = 0;
const average = sum / a2.length;
console.log(average);

