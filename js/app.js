console.log(
function (catName) {
  const res = `猫の名前:${catName}`
  return res
}("タマ")
);

const cat = {
  name: "tama",
  age: 1,
  getInfo() {
    return this.name + ";" + this.age
  }
}

console.log(cat.getInfo())
