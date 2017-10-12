'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Animal = function () {
	function Animal(name) {
		_classCallCheck(this, Animal);

		this.name = name;
		this.thirst = 100;
		this.belly = [];
	}

	_createClass(Animal, [{
		key: 'drink',
		value: function drink() {
			this.thirst -= 10;
			return this.thirst;
		}
	}, {
		key: 'eat',
		value: function eat(food) {
			this.belly.push(food);
			return this.belly;
		}
	}]);

	return Animal;
}();

var Dog = function (_Animal) {
	_inherits(Dog, _Animal);

	function Dog(name, breed) {
		_classCallCheck(this, Dog);

		var _this = _possibleConstructorReturn(this, (Dog.__proto__ || Object.getPrototypeOf(Dog)).call(this, name));

		_this.breed = breed;
		return _this;
	}

	_createClass(Dog, [{
		key: 'bark',
		value: function bark() {
			console.log('hau hau hau');
		}
	}]);

	return Dog;
}(Animal);

var dino = new Animal('Rex');
var dober = new Dog('Rocky', 'Doberman');
