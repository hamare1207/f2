console.log("開始");

class Animal {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
  getInf() {
    return `${this.type} : ${this.name}`;
  }
}

const cat = new Animal("ネコ", "タマ");
const dog = new Animal("イヌ", "ポチ");

console.log(cat.getInf());
console.log(dog.getInf());

console.log("終了");
