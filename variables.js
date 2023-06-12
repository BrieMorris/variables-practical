console.log( 'js');

// declare and intialize a variable
let testVar = 9;

console.log( testVar );

console.log( 'the value of testVar is' , testVar );

testVar = 78901223;

console.log( 'the value of testVar is' , testVar );

testVar = 'some text';

console.log( 'the value of testVar is' , testVar );

let motorcyles = 9;
let cars = 0;
let vehicles = motorcyles + cars;

console.log( 'bikes:' , motorcyles );
console.log( 'cars' , cars );
console.log( 'total vehicles' , vehicles );
console.log( 'had to put the soft tail in the garage' );

//decrement mortorcycles
motorcyles--; // subtract 1 from variable
console.log( 'bikes:' , motorcyles );
console.log( 'cars' , cars );
vehicles = motorcyles + cars;
console.log( 'total vehicles' , vehicles );

console.log( 'missed the bike so I bought to lambos' );
cars = 2
console.log( 'bikes:' , motorcyles );
console.log( 'cars:' , cars );
vehicles = motorcyles + cars;
console.log( 'total vehicles' , vehicles );

console.log( 'got a jetta' );
cars++;
console.log( 'sold 3 bikes' );
motorcyles -= 3;
console.log( 'bikes:' , motorcyles );
console.log( 'cars:' , cars );
vehicles = motorcyles + cars;
console.log( 'total vehicles' , vehicles );

let catName = 'Squiggle';
let catAge = 3;
console.log(catName);
//concatenation with ccomma for console (comma only woks in console log)
console.log('The name of the cat is:' , catName);
console.log( 'The age of the cat is;' , catAge);
//concatenate text with "+"
let sentence = 'This a sentence about the cat named ' + catName
console.log( sentence ); 

sentence = 'The cat is ' + catAge + ' years old'
console.log(sentence);

catName = 'Ruby'
catAge = 14

sentence = 'Later on, a different cat is ' + catAge + ' old and is named' + catName
console.log(sentence);

//conditionals practical
//road trip planner
let seatsInCar = 7;
let passengers = 5;
let infants = 1;
let infantSeats = 1;
let fullTank = false;

// check that there's enough room for everyone
if(seatsInCar >= passengers && infantSeats >= infants) {
    console.log('ready for road trip');
   if(fullTank) {
    console.log('ready to hit the hi-way' );
   } //end full tank
   else{
    console.log('must get gas before we leave town');
   }
} // end enough seats
else{
    console.log('not ready. check car, passengers and equipment');
}
