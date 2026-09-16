interface User {
name: string;
age: number;
email?: string; // 선택적 속성
}

const user1: User = {
name: "Kim",
age: 20};
// 사용가능

const user2: User = {
name: "Lee",
age: 21,
email: "lee@test.com"
// 사용가능
};