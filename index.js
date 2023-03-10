console.log(`We will practice JS code here!`);

// JS - Syntax, Variables, and Simple Operations Activity

// let firstName = "John Edward";
// let ambition = "I will be a Software Engineer";
// let languages = ["HTML", "CSS", "JavaScript", "Nodejs", "Expressjs", "Reactjs"];
// let goals = {
// 	initialGoal: "Graphic Designer",
// 	nextStep: "Software Engineer",
// 	soonGoal: "UI/UX Designer"
// }


// console.log("Hi! I'm " + firstName + " and " + ambition + ".");
// console.log("I am proficient in these technologies:");
// console.log(languages);
// console.log("My stepping stones are:");
// console.log(goals);



// JS - Operators and Truth Tables

	// let a = 4;
	// let b = 5;
	// console.log(`4 > 5 is:  ${a > b} `);
	// console.log(`4 < 5 is: ${a < b} `);
	// console.log(`4 == 5 is: ${a == b} `);
	// console.log(`4 != 5 is: ${a != b} `);

	// let juan = "juan";
	// let juan2 = "juan";
	// console.log(`juan === juan is: ${juan === juan2} `);

// JS = Basic Functions
	
	// function welcome(){
	// 	let name = prompt("Who is there?");
	// 	console.log(`Hi, ${name}! Welcome to JavaScript Coding Dojo!`);
	// }

	// welcome();

	// let claimPhrase = function(){
	// 	console.log("We will have a Software Engineer job.");
	// }

	// claimPhrase();

	// let funcExpression = function funcName(){
	// 	console.log("hello from the other side.")
	// }

	// funcExpression();

	// funcExpression = function funcName(){
	// 	console.log("Let's try applying for a second time.");
	// }

	// funcExpression();

	// function printUserDetails(){
	// 	let name = prompt("You are?");
	// 	let location = prompt("of?");
	// 	let age = prompt("at what age?");

	// 	alert(`Hi! ${name} of ${location} at ${age} years of age`);
	// }

	// printUserDetails();


// JS - Function Parameters and Return Values

	// function argumentFunc(){
	// 	console.log("This function was passed as an argument before the message was printed.")
	// }

	// function invokeFunc(argFunc){
	// 	console.log(argFunc);
	// 	argFunc();
	// }
	// Adding and removing the parenthesis "()" impacts the output of JavaScript.
		// function is used with parenthesis it denotes invoke/call.
		// function is used without a parenthesis is normally associated with using a function as an argument to another function.

	// invokeFunc(argumentFunc);

	// let name = prompt("Enter user name:");
	// console.log(`Hi, ${name}! Let's do some Function calling exercises.`);

	// let num1 = parseInt(prompt("Enter first number:"));
	// let num2 = parseInt(prompt("Enter second number:"));

	// function add(num1, num2){
	// 	let sum = num1 + num2;
	// 	return sum;
	// }

	// function subtract(num1, num2){
	// 	let difference = num1 - num2;
	// 	return difference;
	// }

	// function multiply(num1, num2){
	// 	let product = num1 * num2;
	// 	return product;
	// }

	// function divide(num1, num2){
	// 	let quotient = num1 / num2;
	// 	return quotient;
	// }

	// let addResult = add(num1, num2);
	// let subResult = subtract(num1, num2);
	// let multiplyResult = multiply(num1, num2);
	// let divideResult = divide(num1, num2);

	// console.log(`Sum: ${addResult}`);
	// console.log(`Difference: ${subResult}`);
	// console.log(`Multiply: ${multiplyResult}`);
	// console.log(`Quotient: ${divideResult}`);

	// console.log("Continue at Session 19 bukas!");


// JS - Selection Control Structures

	// function login(){
	// 	let username = prompt("Username: ").toLowerCase();
	// 	let password = prompt("Password: ").toLowerCase();
	// 	let role = prompt("Role: ").toLowerCase();

	// 	if(username == "" || password == "" || role == ""){
	// 		console.log("Inputs should not be empty.");
	// 	}
	// 	else{
	// 		switch (role){
	// 			case 'admin':
	// 				console.log("Welcome to Admin Dashboard!");
	// 				break;

	// 			case 'teacher':
	// 				console.log("Welcome back to class, teacher!");
	// 				break;

	// 			case 'student':
	// 				console.log("Welcome back to class!");
	// 				break;

	// 			default:
	// 				console.log("Invalid Role. Input 'login()' to try again");
	// 				break;
	// 		}
	// 	}
	// }


	// login();



	// function calculateAverage(num1, num2, num3, num4){
	// 	let average = Math.round((num1 + num2 + num3 + num4) /4);

	// 	try{
	// 		if(average <= 75){
	// 			console.log("You got a C!");
	// 		}
	// 		else if(average <= 80){
	// 			console.log("You got a B!");
	// 		}
	// 		else if(average <= 85){
	// 			console.log("You got a B+");
	// 		}
	// 		else if(average <= 90){
	// 			console.log("You got an A");
	// 		}
	// 		else if(average <= 95){
	// 			console.log("You got an A+");
	// 		}
	// 		else if(average >95){
	// 			console.log("Execellent! You got an A++!");
	// 		}
	// 		else{
	// 			console.log("Invalid Grade. Please try again by typing 'calculateAverage()' in the console.");
	// 		}
	// 	}

	// 	catch(error){
	// 		console.warn(error.message);
	// 	}

	// 	finally{
	// 		console.log("End of the program.");
	// 	}
	// }


	// console.log("Sample set numbers are 58, 95, 91, 85");
	// calculateAverage(58, 95, 91, 85);



// JS - Repetition Control Structures

	// Divisibility Function

	// function divisibleBy2(){
	// 	let number = prompt("Enter a random number up to 100: ");

	// 	for(let i = number; number < 100; number++){
	// 		if(number % 2 === 0){
	// 			if(number % 8 === 0){
	// 				// number will be skipped when it is divisible by 8
	// 				console.log(`${number} will be skipped`);

	// 				// variable i will change its value when a number is divisible by 8
	// 				i = number;
	// 				console.log(`i will be ${i}`);
	// 				continue;
	// 			}

	// 			console.log(`Number: ${number} i: ${i}`);
	// 		}
	// 	}
	// }

	// divisibleBy2();

	// function skipConsonants(){
	// 	let newWord = "";
	// 	let word = prompt("Enter a word: ").toLowerCase();

	// 	for(let i = 0; i < word.length; i++){
	// 		if(word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' ||  word[i] === 'u'){
	// 			continue;
	// 		}
	// 		else{
	// 			newWord += word[i];
	// 		}
	// 	}

	// 	console.log(`Inputted word is ${word}`);
	// 	console.log(`New Word is ${newWord}`);
	// }

	// skipConsonants();


// JS - Array Traversal

	// let studentNumbers = ["2023-001", "2023-002", "2023-003", "2023-004", "2023-005"];

	// console.log(studentNumbers);

	// function removeElement(array, index){

	// 	// duplicate the array to a new variable called "secondArray"
	// 	let secondArray = array;
		
	// 	// remove will have a new value: array.length - index
	// 	let remove = array.length - index;
		
	// 	// array.length will have a new value: array.length - remove
	// 	array.length = array.length - remove;
	// 	console.log("The index inputted: " + index);	
	// 	console.log(secondArray)
	// 	console.log("Length of the new array: " + secondArray.length)
	// }

	// console.log("Start of removing arrays:");
	// removeElement(studentNumbers, 2);


	// studentNumbers[studentNumbers.length] = "09176461947";
	// console.log(studentNumbers);

	// let users = ["Dwayne Johnson","Steve Austin","Kurt Angle","Dave Bautista"];

	// console.log("Original Array:")
	// console.log(users);


	// // Function Add Users
	// function addUsers(name){
	// 	users[users.length] = name;
	// 	console.log("This is to confirm that we have added a new user:");
	// 	console.log(users);
	// }

	// addUsers("Edward");


	// let itemFound;

	// // Get Array Element
	// function getArrayElement(index){
	// 	itemFound = users[index];
	// 	return itemFound;
	// }

	// getArrayElement(4);
	// console.log(itemFound);


	// // Delete Last Item
	// function deleteLastElement(){
	// 	let lastItem = users[users.length-1];
	// 	users.length = users.length-1;
	// 	console.log(users);
	// }

	// deleteLastElement();



	// // Update One Element
	// function updateElement(updateElement, index){
	// 	users[index] = updateElement;
	// 	console.log("This is to confirm that the update has been done:");
	// 	console.log(users);
	// }

	// updateElement("Teletubbies", 2);


	// // Delete All Items
	// function deleteAllItems(){
	// 	users.length = 0;
	// 	console.log("Confirm that array items have been deleted");
	// 	console.log(users);
	// }

	// deleteAllItems();


	// // Check if Array is Empty
	// let arrayIsEmpty;

	// function isEmpty(){
	// 	if(users.length > 0){
	// 		arrayIsEmpty = false;
	// 	}
	// 	else{
	// 		arrayIsEmpty = true;
	// 	}

	// 	console.log("Array is Empty?");
	// 	console.log(arrayIsEmpty);
	// }

	// isEmpty();



// JS - Array Manipulation
	
	// console.log("Array Manipulation");

	// let products = [];

	// console.log("Before Push:");
	// console.log(products);

	// // Pop Method
	// console.log("After Push:");
	// products.push("Laptop");
	// console.log(products);

	// products.push("Computer", "Albums", "Lanyards");
	// console.log(products);

	// // Pop Method
	// console.log("After Pop:");
	// products.pop();
	// console.log(products);


	// // Unshift Method
	// products.unshift("Photocards", "Lightstick", "Mago", "Apple", "Posters", "Cellphones", "Apple", "");
	// console.log(products);


	// // Shift Method
	// let removedItem = products.shift();
	// console.log(products);
	// console.log(removedItem);


	// Spice Method
		// (starting index, number of items to be removed starting from the index)
	/*products.splice(1,3, "Mago", "Windy Windy", "Glass Bead", "Mayonnaise");
	console.log(products);

	products.splice(3,2);
	console.log(products);*/


	/*// Sort Method
	products.sort();
	console.log(products);


	// Reverse Method
	products.reverse();
	console.log(products);*/


// Non mutator
	// indexOf
	// console.log(products);
	// console.log(products.indexOf("Apple"));
	// console.log(products.lastIndexOf("Apple"));


	// // Slice Method
	// console.log("Slice Method:");
	// // (starting index, last index --- last index is not included.Laging may margin of 1 element)
	// let newProducts = products.slice(1, 5);
	// console.log(newProducts);


	// // toString()

	// // Concat Method
	// let freebies = ["Water Dispenser", "Birth Certificate"]	
	// let newCombo = newProducts.concat(freebies, "Hair Dryer", "Fingerprint scanner");
	// console.log(newCombo);


	// // Join Method
	// console.log(newCombo.join(", "));



// Iteration Methods
	// forEach()
	// products.forEach(item => {
	// 	console.log(item + " is on Sale!");	
	// })


	// // map()
	// console.log("Map Method:");
	// let onSaleItems = products.map(function(item){
	// 	onSale = "new " + item;
	// 	console.log("New Value: " + onSale);
	// })


	// // every()
	// let allTrue = products.every(item => {
	// 	return (item != "");
	// })
	// console.log(allTrue);


	// // some()
	// let someTrue = products.some(item =>{
	// 	return (item == "");
	// })
	// console.log(someTrue);


	// // filter()
	// let noEmptyProducts = products.filter(item => {
	// 	return (item != "");
	// })
	// console.log(noEmptyProducts);


	// // includes()
	// let magoFound = products.includes("Mago");
	// console.log("Is Mago visible in the array? " + magoFound);


	// // reduce()
	// let combinedProducts = products.reduce((accumulator, currentValue) => {
	// 	return accumulator + currentValue;
	// })

	// console.log(combinedProducts);


	// Activity
	// let registeredStudents = [
	// 	"Greg",
	// 	"Max",
	// 	"Sabrina",
	// 	"Tom",
	// 	"Sarah"
	// 	];

	// let friends = [];

	// console.log("List of registered students:");
	// console.log(registeredStudents);

	// // Functions
	// 	// register
	// function register(username){
	// 	newUser = registeredStudents.includes(username);
	// 	if(newUser == 0){
	// 		registeredStudents.push(username);
	// 		alert("Thank you for registering, " + username + "!");
	// 	}
	// 	else{
	// 		alert("Sorry, username already exists!");
	// 	}
	// }

	// 	// add name to friends
	// function addFriend(newFriend){
	// 	addedFriend = registeredStudents.includes(newFriend);
	// 	if(addedFriend == 1){
	// 		friends.push(newFriend);
	// 		alert("You have added " + newFriend + " in your friend list.");
	// 	}
	// 	else{
	// 		alert("User not found");
	// 	}
	// }

	// // Show friends
	// function showFriends(){
	// 	if(friends.length == 0){
	// 		alert("You currently have 0 friends. Please add first.");
	// 	}
	// 	else{
	// 		for(let i = 0; i < friends.length; i++){
	// 			console.log(friends.join("\n"));
	// 		}
	// 	}
	// }

	// // Display Number of Friends
	// function showNumberOfFriends(){
	// 	if(friends.length == 0){
	// 		alert("You currently have 0 friends. Please add first.");
	// 	}
	// 	else{
	// 		alert("You have " + friends.length + " friends");
	// 	}
	// }

	// // Delete a Friend
	// function deleteFriend(){
	// 	if(friends.length == 0){
	// 		alert("You currently have 0 friends. Please add first.");
	// 	}
	// 	else{
	// 		friends.pop();
	// 		console.log(friends);
	// 	}
	// }


// JS - Objects
	
	// console.log("Continue on JavaScript Objects");

	// let laptop = {
	// 	name: "Huawei D14",
	// 	manufacturedDate: 2020,
	// 	features: ["fingerprint scanner", "play games", "windows 11"],
	// 	isWorking: true,
	// 	owner: {
	// 		ownerName: "Ed",
	// 		yearOfOwnage: 2,
	// 	}
	// }

	// console.log(laptop);
	// console.log(laptop.name);
	// console.log(laptop.features);
	// console.log(laptop.features[2]);
	// console.log(laptop.owner.ownerName);
	// console.log(laptop.owner.yearOfOwnage);


	// Constructor Function
	// function Album(name, artist, publishedDate, noOfSongs){
	// 	this.name = name,
	// 	this.artist = artist,
	// 	this.publishedDate = publishedDate,
	// 	this.noOfSongs = noOfSongs
	// }

	// let bopBop = new Album("Bop Bop", "VIVIZ", "2019", 6);
	// console.log(bopBop);

	// let loveade = new Album("Summer Vibe", "VIVIZ", "2020", 6);
	// console.log(loveade);

	// let twice = new Object();
	// console.log(twice);

	// let discography = [bopBop, loveade];
	// console.log(discography[1].name);
	// console.log(discography[0].artist + " - " + discography[0].name);


	// let person = {
	// 	name: "John Doe",
	// 	talk: function(){
	// 		console.log("Hello! My name is " + this.name)
	// 	}
	// }

	// console.log(person);
	// person.talk();

	// Activity
	// let trainer = {
	// 	name: "Ed",
	// 	age: "23",
	// 	pokemon: ["Eevee", "Vaporeon", "Gengar"],
	// 	friends: {
	// 		hoenn: ["Max", "May"],
	// 		kanto: ["Brock", "Misty"]
	// 	}
	// }

	// trainer.talk = function(){
	// 	console.log("Let's go, Eevee!");
	// }

	// console.log(trainer);
	// console.log(trainer.pokemon);



	// function Pokemon(name, level){
	// 	this.name = name;
	// 	this.level = level;
	// 	this.health = level * 2;
	// 	this.attack = level;

	// 	this.faint = function(){
	// 		console.log(this.name + " fainted!");
	// 	}

	// 	this.tackle = function(targetPokemon){
	// 		console.log(this.name + " tackled " + targetPokemon.name);

	// 		targetPokemon.health = targetPokemon.health - this.attack;

	// 		console.log(targetPokemon.name + "'s health is now reduced to " + targetPokemon.health);

	// 		if(targetPokemon.health <= 0){
	// 			targetPokemon.faint();
	// 		}
	// 	}
	// }

	// let pikachu = new Pokemon("Pikachu", 12);
	// let chikorita = new Pokemon("Chikorita", 24);

	// console.log(pikachu);
	// console.log(chikorita);

	// chikorita.tackle(pikachu);
	// console.log(pikachu);


// JS - ES6

	// console.log("ES6 Updates");

	// let num1 = Math.pow(3, 2); //9
	// console.log(num1);

	// let num2 = 2;
	// console.log(num2);

	// console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);


	// // Destructure in Array
	// let pokemon = ["Pikachu", "Gengar", "Ralts"];
	// console.log(`My current roster of pokemons are:`);
	// console.log(pokemon);

	// let [pikachu, gengar, ralts] = pokemon;
	// console.log(pikachu);
	// console.log(gengar);
	// console.log(ralts);


	// // Destructuring an Object
	// console.log(`Object Destructuring:`);
	// let trainer = {
	// 	firstname: "John Edward",
	// 	middlename: "Del Rosario",
	// 	lastname: "Ubalde"
	// }

	// console.log(trainer);

	// let fName = trainer.firstname;
	// let mName = trainer.middlename;
	// let lName = trainer.lastname;

	// console.log(fName);
	// console.log(mName);
	// console.log(lName);



	// // Arrow Functions
	// 	/*Syntax:
	// 	let/const functionName = () => {
	// 		statements
	// 	}*/

	// let hello = () => {
	// 	console.log("Hello World!");
	// }

	// hello();

	// let sum = (num1, num2) => {
	// 	return num1 + num2;
	// }

	// console.log(sum(num1, num2));


	// console.log("Activity for ES6 Updates:");

	// // Get the cube of the number
	// let getCube = prompt(console.log("Enter number to get cube equivalent:"));
	// let cube = Math.pow(getCube, 3);
	// console.log(`The cube of ${getCube} is ${cube}`);


	// let address = [11, "Lisbon Street", "SMW IV", "Dasma", "Cavite"];
	// let [housenumber, street, village, city, province] = address;
	// console.log(`Hi! I live in ${housenumber} ${street} ${village} ${city} ${province}.`);


	// let products = ["Album", "Photocards", "Poster", "Coaster"];
	// products.forEach((product) => console.log(product));

	// console.log("2nd iteration of products:");
	// products.forEach((product) => {
	// 	console.log(product);
	// })

	// class album{
	// 	constructor(title, artist, year){
	// 		this.title = title;
	// 		this.artist = artist;
	// 		this.year = year;
	// 	}
	// }

	// let bopBop = new album("Beam of Prism", "VIVIZ", 2019);
	// console.log(bopBop);


// JS - Introduction to JSON

	console.log("Introduction to JSON");