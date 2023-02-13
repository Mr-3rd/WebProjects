
function FtoC (f, decimal) {
    let celsius = (f - 32) * 5 / 9
    if (decimal) {
        return celsius.toFixed(decimal)
    } else {
        return celsius
    }
}

console.log(FtoC(23, 2))


console.log('hello world')

let name = 'Justin'
let todayTemp = 23

console.log(name)
console.log(todayTemp)

console.log(name.length)

function shout(text) {
    return text.toUpperCase() + '!!!!'
}

console.log(shout('hello'))

function isMinnesotaZip(code) {

    if (code >= 55001 && code <= 56763) {
        return true
    }

    return false 
}

console.log(isMinnesotaZip(55403))  // true
console.log(isMinnesotaZip(90210))  // false 
console.log(isMinnesotaZip('55403'))  // true!


function validGPA(gpa) {
    // Short Version
    // return gpa >= 0 && gpa <= 4

    if (gpa >= 0 && gpa <= 4) {
        return true
    } 
    return false 
}


console.log(validGPA(-1))     // false 
console.log(validGPA(0))      // true
console.log(validGPA(3.5))    // true
console.log(validGPA(4))      // true
console.log(validGPA(10))     // false 

console.log('Weird arguments to GPA function\n')

console.log(validGPA())                // false. Why? 
console.log(validGPA('not a number'))  // false 
console.log(validGPA(2.5))             // true
console.log(validGPA(3, 100))          // true. Extra argument is ignored 


/*
function cityStateAddress(city, state) {
    state = state.toUpperCase()
    address = city + ', ' + state 
    return address 
}
*/


function cityStateAddress(city, state) {
    state = state.toUpperCase()
    address = `${city}, ${state}` 
    return address 
}

address = cityStateAddress('Minneapolis', 'mn')
console.log(address)   // Prints Minneapolis, MN

// Example expected arguments 


// Unexpected arguments 
//console.log(cityStateAddress('Minneapolis'))   // error - no state so state.toUpperCase() fails
console.log(cityStateAddress('Minneapolis', 'mn', 55403))   // extra argument is ignored 
//console.log(cityStateAddress())  // error - no state so state.toUpperCase() fails


// format strings 


console.log('b' + 'a' + + 'a' + 'a')

console.log(+'a')   // Making a string positive results in NaN



let animals = ['Giraffe', 'Elephant', 'Yak']

//loop over an array by counting the elements - imperative style 
for (let i = 0; i < animals.length; i++) {
    console.log('Element ' + i + ' is ' + animals[i])
  }
  
/* Another way of looping over an array - functional style 
Notice the function definition in the function call! */

animals.forEach(function(element){
console.log(element)
})

// If you need to know where you are in the array, add another
// argument to the function, it will contain the current index
animals.forEach(function(element, index){
    console.log(`Animal number ${index} is ${element}`)
})
    

//   animals.forEach(function(element, index){
//     console.log('Animal element index)
//   })
  

// create an object - contains properties
// properties are name: value pairs
let user = { username: 'Zoe', password: 'kittens'}

console.log(user.username)  // Zoe
console.log(user['username'])  // Zoe


let furnitureColors = { couch: 'green', table: 'blue', chair: 'red'}

// looping over an object
for (let furniture in furnitureColors) {
    let color = furnitureColors[furniture]
    console.log(`The ${furniture} is the color ${color}`)
}


let color = 'blue'
console.log(color)

const lang = 'Python'



const classNAme = 'Web Programming'
const classCode = 2560
const department = 'ITEC'

let tempString = `${classNAme} , ${classCode} , ${department}`

console.log(tempString)