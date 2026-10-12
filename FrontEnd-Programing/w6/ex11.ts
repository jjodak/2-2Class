function getUser(): [string, number] {
return ["홍길동", 20];
}
const [userName, userAge] = getUser();
console.log(userName); // 홍길동
console.log(userAge); // 20