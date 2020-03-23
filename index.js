console.log('blah')

// variables
// 1. var
// 2. let
// 3. const

// 1. scope
// let and const = block scope
// var = function scope
function blah() {
	let x = 5
	for (let i = 0; i < 10; i++) {
		console.log(i)
	}
	console.log(i)
}

function notblah() {
	for (var i = 0; i < 10; i++) {
		console.log(i)
	}

	console.log('after the loop', i)
}

// console.log(i)

// 2. hoisting
// functions and variables declerd as var
// let (and const) not included
// TDZ = tempural dead zone

function blahVAR() {
    console.log(c) // undefined
    var c
    console.log(c) // undefined
	c = 23
}
function blahLET() {
	// (let c) - not happening!!
	// console.log(c) // ERROR - cannot access c bfore initialization
	let c = 23
	c = 56
}
// console.log(c) // ERROR - c is not defined


// const = let with some exeptions
// hiosting-wise, scope-wise

const piNum = 3.14
const closestPiDate = new Date(2020,2,14)
// piNum = 15 // ERROR - Assignment to constant variable


// ===================================

// reference vs value

// primitives 
    // number, boolean, (string)

// objects
    // array, object, function, undefind

// none-binary
    // string


// primitivtes saveds by value
// objects saveds by reference

let arr = [1,2,3] //object
let num = 53 //primitive

function primitiveParam(x) {
    x=45
    return x+2
}

function objectParam(x) {
    x[3]=4
}



primitiveParam(num) // x = num
console.log(num) // ?

objectParam(arr) // x = arr
console.log(arr) // ?