//console.log('hw6-19');

//Easy Going
//1. Write a for loop that will log the numbers 1 through 20.

for (let i = 1; i <= 20; i++) {
	console.log(`numbers: ${i}`);
}

// //Get Even
//1. Write a for loop that will log only the even numbers in 0 through 200. 
for (let i = 0; i <= 200; i++) {
	if (i % 2 === 0) {
		console.log(`the even numbers: ${i}`);
	} else {
		console.log(`odd number`);
	}
}

//Excited Kitten
//1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

for (let i = 1; i < 21; i++) {

	console.log(`Love me, pet me! HSSSSSS! ${i}`);
	
};

//2. For every even number in your loop, log "...human...why you taking pictures of me?...",
// "...the catnip made me do it...", 
//or "...why does the red dot always get away..." at random.


// const randomWord = ["..human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
// for (let i = 1; i < 21; i++) {
// 	if (i % 2 === 0) {
// 		console.log(`${randmWord.Math.random()}`);

// 	}
// };
//not sure yet


//Fizz Buzz
//1. Write a javascript application that logs all numbers from 1 - 100.
for (let i = 1; i <= 100; i++) {

	console.log(`${i}`);
};

//2, If a number is divisible by 3 log "Fizz" instead of the number.
//3. If a number is divisible by 5 log "Buzz" instead of the number.
//4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

for (let i = 1; i <=100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log(`FizzBuzz`);
	} else if (i % 5 === 0) {
		console.log(`Buzz`);
	} else if (i % 3 === 0){
		console.log(`Fizz`);
	} else {
		console.log(`${i}`);
	}
};

//Getting to Know You
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];
//1. Jim Clark decides that Kenny can't be named "Kenny" anymore. Remove "Kenny"
// from the kenny array and replace it with "Gameboy".

kenny[0] = "Gameboy";
console.log(kenny);

//2, Jim Clark just had his birthday; change jimClark's array to reflect him being a year older. Don't just hard 
//code 187--pretend that you didn't already know 
//that his age is 186, 
//and write your code to just make him a year older than whatever age he was.

jimClark[1] = jimClark[1] + 1;
console.log(jimClark);

//3. Ryan is Batman maybe. Or possibly Robin.
// Change Ryan's hometown from "Denver" to "Gotham City".

ryan[2] = "Gotham City";
console.log(ryan);

//4. Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". 
//(Note: remove and then add is different from simply changing the value at that index.)
reuben.pop();
reuben.push("Chicago");
console.log(reuben);

//5. Jim Haff could be literally anywhere in the world. 
//Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine,
// but see if you can do it in one line of code

jimHaff.pop();
jimHaff.push("Denver", "Lasvagas", "New York");
console.log(jimHaff);

//6. Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities. Whatever the first of the 3 cities for Jim Haff is now,
// remove it from the array using .splice()
jimHaff.splice(2, 1);
console.log(jimHaff);

// //Yell at the Ninja Turtles
// //1. Create an array with the members of the ninja turtles 
//(Donatello, Leonardo, Raphael, Michaelangelo)
const ninjaTurtle = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// // 2. Use a for loop to call .toUpperCase() 
// //on each of them and print out the result.

for (let i = 0; i < ninjaTurtle.length; i++) {

	console.log(`${ninjaTurtle[i].toUpperCase()}`);

};

// //3. Bonus: Modify the answer you just wrote. Instead of all letters being uppercase, 
// //make the letters alternate back and forth between uppercase and lowercase.

// //Return of the Closets
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// // Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// //Alien Attire
// //1.Kristyn's left shoe has traveled through time and space and turned up 
// //in Thom's accessories drawer! Remove Kristyn's shoe from the array 
// //and save it to the variable kristynsShoe. 
// //Use that variable to add Kristyn's lost shoe to Thom's accessories array.



// //Multiples of 3 and 5
//Find the sum of all the multiples of 3 or 5 below 1000.
let sum = 0;
for (let i = 1; i < 1000; i++) {
	if (i % 5 === 0 || i % 3 === 0) {
		sum+=i;
	}
}
console.log(sum);
















