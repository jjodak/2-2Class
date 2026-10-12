const scores: number[] = [80, 90, 70, 100];
const result: boolean = scores.every(
score => score >= 60
);
console.log(result);