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

// class Animal {
// 	constructor(name) {
// 		this.name = name;
// 		this.thirst = 100;
// 		this.belly = [];
// 	}
// 	drink() {
// 		this.thirst -= 10;
// 		return this.thirst;
// 	}
// 	eat(food) {
// 		this.belly.push(food);
// 		return this.belly;
// 	}
// }

// class Dog extends Animal {
// 	constructor(name, breed) {
// 		super(name);
// 		this.breed = breed;
// 	}
// 	bark() {
// 		console.log('hau hau hau');
// 	}
// }

// const dino = new Animal('Rex');
// const dober = new Dog('Rocky', 'Doberman');

// next ///////////////////////////////////////////////////

  // class MovieCollection extends Array {
  //   constructor(name, ...items) {
  //     super(...items);
  //     this.name = name;
  //   }
  //   add(movie) {
  //     this.push(movie);
  //   }
  //   topRated(limit = 10) {
  //     return this.sort((a, b) => (a.stars > b.stars ? -1 : 1)).slice(0, limit);
  //   }
  // }

  // const movies = new MovieCollection('Wes\'s Fav Movies',
  //   { name: 'Bee Movie', stars: 10 },
  //   { name: 'Star Wars Trek', stars: 1 },
  //   { name: 'Virgin Suicides', stars: 7 },
  //   { name: 'King of the Road', stars: 8 }
  // );

 // movies.add({ name: 'Titanic', stars: 5 });

// next ////////////////////////////////////////////////////

//const cyfry = [1,11,34,2,767,44,666,78,2];
class zbior {
	constructor(...liczby) {
		this.liczby = liczby;
		console.log(liczby);
	}
	sortuj(ile = 5){
		const liczbyZbior = this.liczby;
		console.log(liczbyZbior);
		console.log('---------------');
		return liczbyZbior.sort((a, b) => (a < b ? -1 : 1)).slice(0, ile);
		//return liczbyZbior.sort((a, b) => (a - b)).slice(0, ile);
	}
}

const cyfry = new zbior(1,11,34,2,767,44,666,78,2);



