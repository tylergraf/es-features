class Animal {
  constructor(name, legs) {
    this.name = name;
    this.legs = legs;
  }
  static countLegs(a,b){
    console.log(`${a.name} and ${b.name} have ${a.legs+b.legs} legs.`)
  }
  speak() {
    console.log(`${this.name} says hey.`);
  }
}

export default Animal;
