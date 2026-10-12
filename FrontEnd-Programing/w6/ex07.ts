const scores: number[] = [50, 60, 70, 95];
const result: boolean = scores.some(
score => score >= 90
);
console.log(result);