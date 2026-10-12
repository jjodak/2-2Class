const numbers: number[] = [1, 2, 3, 4];
const result = numbers.map((num) => {
return num * 2;

});
console.log(result);
// map 줄여서 표현
const result_short = numbers.map((num) => num * 2);
console.log(result_short);
// Return 이 없으면 result2 는 빈값이 들어감
const result2 = numbers.map( (num) => {
num * 2;
});
console.log(result2);