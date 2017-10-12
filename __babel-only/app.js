// class Dog {
// 	constructor(name, breed) {
// 		this.name = name;
// 		this.breed = breed;
// 	}
// 	bark() {
// 		console.log(`Woooof my name is ${this.name}`);
// 	}
// 	static info() {
// 		console.log('jakis tekst');
// 	}
// }

// const rocky = new Dog('Rocky', 'Doberman');
// const fifi = new Dog('Fifi', 'Mixed');

// next ///////////////////////////////////////////////////

class Animal {
	constructor(name) {
		this.name = name;
		this.thirst = 100;
		this.belly = [];
	}
	drink() {
		this.thirst -= 10;
		return this.thirst;
	}
	eat(food) {
		this.belly.push(food);
		return this.belly;
	}
}

class Dog extends Animal {
	constructor(name, breed) {
		super(name);
		this.breed = breed;
	}
	bark() {
		console.log('hau hau hau');
	}
}

const dino = new Animal('Rex');
const dober = new Dog('Rocky', 'Doberman');
