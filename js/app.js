console.log("開始");
try {
  console.log("処理1");


  console.log("開始");
  try {
    console.log("処理1");
    throw "error!!! XD";
    console.log("処理2");
} catch (e) {
   console.log("例外が起きました。");
   console.log(e);
  }
  console.log("終了");
throw "error!!! XD";
console.log("処理2");
} catch (e) {
  console.log("例外が起きました。");
  console.log(e);
}
console.log("終了");
