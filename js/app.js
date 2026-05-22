console.log("開始");

window.alert("質問");
const isCat = window.confirm("猫派？");
let name = window.prompt("名前", "test");
if (name == null) {
  name = "未回答";
}
const message = isCat ? "" : "ではない";
window.alert(`${name}は猫派${message}`);

let cnt = 0;

const intervalID = setInterval(() => {
  console.log(cnt, "くりかえし処理:ニャー！");
  cnt++;
}, 100);

setTimeout(() => {
  clearInterval(intervalID);
  console.log("くりかえし処理:終了");
}, 500);

console.log(navigator.userAgent);

console.log("終了");
