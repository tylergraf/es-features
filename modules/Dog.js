const Dog = class extends Animal {
  constructor(name, legs = 4){
    super(name, 'dog', legs);
  }

  speak() {
    super.speak();
    console.log(`${this.name} barks hey.`);
  }
}
