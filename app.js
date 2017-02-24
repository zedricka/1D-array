/*
* Demonstrates array declarions by storing single variables into an array.
*
* Return	Cars (array), Cars length	
*/
function cars(){
	var car1 = "Toyota";
	var car2 = "Jeep Wrangler";
	var car3 = "Mazda";

	//Create an array declaration named cars and set each car variable as the values.
	var cars = [car1, car2, car3];

	//Print the created array
	console.log(cars);

	//Print the array length
	console.log(cars.length);

	//Return the created array and the array length
	return cars + " " + cars.length;
}

console.log(cars());

/*
* Demonstrates array declarions by storing parameters into a single array.
*
* Parameters 	food (string), drink (string), dessert (string)
* Return 	An order as a complete sentence represented as a string
*/
function order(food, drink, dessert){
	// console.log(food + " " + drink + " " + dessert);
	//Store the parameters in an array called "order"
		var order = [food, drink, dessert];

	//Print the array named "order"
		console.log(order);

	//Print the length of the array named "order"
		console.log(order.length);

	//Return the order as a complete sentence represented as a string
	return "I would like a " + food + " " + drink  + " and " + dessert + ".";
	// return "Let's order: " + order[0] + " " + order[1] + " " + order[2];
}

console.log(order("burger", "root beer", "frosty"));

var currentClasses = [
	"Band", 
	"Biology", 
	"Chemistry", 
	"Orchestra",
	"Physical Education",
	"Physics",
	"Web Development"
];

/*
* Uses for loop to iterate through array passed as a parameter
* and replaces content at specified index within for loop
*
* Return 	classes (array, changed after iteration)
*/
function loopToChange(classes){
	//Print the parameter that is being passed through the function
		console.log(classes);

	//Use a For loop to iterate through each value in the passed array
		// for (var i = classes.length - 1; i >= 0; i--) {
		// 	classes[i]
		// }
		for (var i = 0; i < classes.length; i++){
			console.log(classes[i]);
			if (classes[i] === "Band") {
				classes[i] = "Computer Science";
			}
		}

		console.log(classes);
	// Return classes
	return;
}

console.log(loopToChange(currentClasses));

/*
* Uses array method, forEach(), to add the integer 5 to each value in the 
* passed array and sort() to sort the values in increasing order
*
* Return 	numbers (array, incremented and sorted)
*/
function arrayMethodToLoop(numbers){
	//Print the parameter that is being passed through the function
		console.log(numbers);

	//Use the forEach() method to add 5 to each value in the passed array

		numbers.forEach(function(number) {
			console.log(number);

		});

	//Return the changed array
	return;
}

console.log(arrayMethodToLoop([5, 7, 3, 4, 5]));
console.log(arrayMethodToLoop([5 + 1, 3]));

/*
* Demonstrates the array methods: sort(), indexOf(), pop(), and push()
*
* Return 	priorties (array)
*/
function moreArrayMethods(priorities){

	//Print the parameter that is being passed through the function
	console.log(priorities);

	//Use the method sort() to sort your priorities
	priorities.sort();

	console.log(priorities);

	//Use the method indexOf() to replace "Not Going to Class" to "Going to Class"
	var indexNumber = priorities.indexOf("Not Going to Class");

	console.log(indexNumber);

	priorities[indexNumber] = "Going to Class";

	console.log(priorities);
	//Use the method pop() to remove the item at the end of the array
	priorities.pop();

	console.log(priorities);
	//Use the method push() to add a priority that is important to the success of this class and don't forget to sort() them afterwards!
	priorities.push("Candy");
	priorities.sort();
	console.log(priorities);
	//Return the changed array
	return;
}

console.log(moreArrayMethods(["Zero Play", "Sleeping", "HW", "Work", "School", "Planning For Future", "Not Going to Class"]));

