interface User {
readonly id: number;
name: string;
}
const user: User = {
id: 1,
name: "Kim"
};
user.name = "Lee"; // 가능
//user.id = 2; // 오류