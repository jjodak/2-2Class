const a = {name: "홍길동"};
const b = a;
console.log(a.name);
console.log(b.name);
a.name = "김철수"
console.log(a.name);
console.log(b.name);
console.log(a===b); //true