console.log("開始");

const animal1 = {
  "0": "ネズミ",
  "1": "ネコ",
  "2": "イヌ",
  length: 3
};

console.log(Array.isArray(animal1), animal1);

const animal2 = Array.from(animal1);

console.log(Array.isArray(animal2), animal2);

const animal3 = ["nezumi", ["neko", "inu", 333], "kuma"];

console.log(Array.isArray(animal3), animal3);


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = arr.reduce((a, x) => {
  return a + x;
}, 0);

console.log(arr, sum);

console.log("終了");
