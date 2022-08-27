
const square = (element) => element ** 2

const a = [1, 2, 3, 4, 5];
const a2 = a.map(square);
console.log(a2);
  
var sum = 0;

for (let i = 0; i < a2.length; i++) {
    sum += a2[i];
}
console.log(sum);


