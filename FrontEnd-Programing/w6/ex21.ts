const user: {
name: string;
age: number;
} = {
name: "홍길동",
age: 20
};
// 기존 방식
const userName = user.name;
const userAge = user.age;
console.log(userName); // 홍길동
console.log(userAge); // 20
// 객체 구조 분해 할당
const { name: nName, age: nAge } = user;
console.log(nName); // 홍길동
console.log(nAge); // 20