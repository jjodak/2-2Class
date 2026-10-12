const fruits = ["사과", "오렌지", "딸기"]; // 배열
const data: { // 객체
0: string;
1: string;
2: string;
length: number;
} = {
0: "사과",
1: "오렌지",
2: "딸기",
length: 3,
};
console.log(data[0]); // 사과
console.log(data.length); // 3
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray(data)); // false