// const user = {
//     name : 'Jona',
//     cities : ['Worcester','Florida', 'California'],
//     hasLived(){
// 			return this.cities.map((city)=> this.name + ' wants to live in ' + city);
//     }
// }

// console.log(user.hasLived());
//forEach executes a provided function once for each array element.

//map creates a new array with the results of calling a provided function on every element in the calling array.


// !IMPORTANT forEach() affects and changes our original Array, whereas map() returns an entirely new Array — 
// thus leaving the original array unchanged.


const multiplier = {
	numbers: [5,6,7,8],
	multiplyBy: 3,
	multiply(){
		return this.numbers.map((num)=> num * this.multiplyBy);
	}
};

console.log(multiplier.multiply());