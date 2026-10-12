const scores: number[] = [80, 100, 70, 90, 60];
scores.sort((a, b) => b - a);
console.log(scores); // [ 100, 90, 80, 70, 60 ]
// 비교 함수 사용 안함
const scores2: number[] = [80, 100, 70, 90, 60];
scores2.sort();
console.log(scores2); // [ 100, 60, 70, 80, 90 ]