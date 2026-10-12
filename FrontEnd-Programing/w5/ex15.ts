const fruits: string[] = ["사과", "오렌지", "배"];
// 특정 인덱스에 값 추가
fruits[3] = "딸기";
// 맨 앞에 추가
fruits.unshift("수박");
// 맨 뒤에 추가
fruits.push("포도");
console.log(fruits);