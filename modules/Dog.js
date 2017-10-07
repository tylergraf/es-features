import Animal from './Animal.js';

class Dog extends Animal {
  constructor(name, legs = 4){
    super(name, 'dog', legs);
  }

  speak() {
    super.speak();
    console.log(`${this.name} barks hey.`);
  }
}

export default Dog;
