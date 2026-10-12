// 객체가 아닌 값을 대입할 경우
let a: string = "홍길동";
let b: string = a;
console.log(a); // 홍길동
console.log(b); // 홍길동
a = "김철수";
console.log(a); // 김철수
console.log(b); // 홍길동