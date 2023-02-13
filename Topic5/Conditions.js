
// Eligible senators:
// At least 30 years old
// at least 9 years citizenship
// same reside state as represent state


const age = 35
const citizenTime = 9
const stateReside = 'Minnesota'
const stateRepresent = 'Minnesota'

if (age >= 30 && citizenTime >= 9 && stateReside === stateRepresent) {
    console.log('You are eligible to senate')
} else {
    console.log('You are not eligible to senate')
}


x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
console.log(findMax(x))

let cars = ['Porsche', 'Ferrari', 'Lambo']

cars.forEach(function (element, index){
    console.log(`Car: ${element}, ${index} = Functional Programming`)
})

for(let x = 0; x<cars.length;x++) {
    let car = cars[x]
    console.log(x + ':' + car)
}


let text = 'The classes are itec 2560, itec 1150, and itec 2950'

let replace = text.replace('itec', 'ITEC')
console.log(replace)

let replaced = text.replaceAll('itec', 'ITEC')
console.log(replaced)

let replacesALL = text.replace(/itec/g, 'ITEC')
console.log(replacesALL)


let message = 'The classes are 2560, 1150, and 2950'
let replaceRegex = message.replace(/\d{4}/g, 'ITEC $&')
console.log(replaceRegex)


cars[6] = 'Ford'
console.log(cars)

cars.push('Chevy')
cars.unshift('Fiat')

console.log(cars)

let firstCar = cars.shift()
console.log(firstCar)
console.log(cars)

let lastCar = cars.pop()
console.log(lastCar)
console.log(cars)

cars.reverse()
console.log(cars)

cars.sort()
console.log(cars)

cars.pop()
cars.pop()
cars.pop()

let numberOfCars = cars.length

console.log(numberOfCars)

console.log(cars.indexOf('Buick'))

if (cars.indexOf('Buick') === -1) {
    console.log('No Buick Found')
}

if (cars.includes('Porsche')) {
    console.log('Porsche is the best!')
}


let messyJoin = cars.join()
console.log(messyJoin)

cars.forEach( function (car){console.log(car.length)})


carLengthsArray = []
cars.forEach( function (car){console.log(animalLengthsArray.push(car.length))})
console.log(carLengthsArray)

// cars.forEach( function (car){console.log(car.length)})

let carLength = cars.map(car => car.length)

console.log(carLength)