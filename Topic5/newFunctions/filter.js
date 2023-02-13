// More examples https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

let cats = ['Hello Kitty', 'Maru', 'Garfield', 'Soymilk', 'Miles', 'Meridith']

// Mapping - creating a new array built from elements of an existing array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// imports from above site:

const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
console.log(kvArray);
console.log('*******************************************')

let uppercaseCats = cats.map( function(cat) {
    return cat.toUpperCase()
})

console.log(uppercaseCats)
console.log(cats)

// Arrow function, full version
let uppercaseCats2 = cats.map( (cat) => {
    return cat.toUpperCase()
})

console.log(uppercaseCats2)

// more concise - one line, one argument, can omit () and {}. Return statement is implied.
let uppercaseCats3 = cats.map( cat => cat.toUpperCase() )
console.log(uppercaseCats3)

let catNameLengths = cats.map( function(cat) {
    return cat.length
})

console.log(catNameLengths)

let catNameLengths2 = cats.map( (cat) => {
    return cat.length
})

let catNameLengths3 = cats.map( cat => cat.length )

// Compare to the imperitive method...

let catNameLengths4 = []
cats.forEach( function(cat) {
    let length = cat.length
    catNameLengths4.push(length)
})

let catNamesLengths5 = []
for (let i = 0; i < cats.length; i++) {
    let length = cats[i].length
    catNamesLengths5.push(length)
}

console.log(catNamesLengths5)

// console.log(catNameLengths)
// console.log(catNameLengths2)
// console.log(catNameLengths3)
// console.log(catNameLengths4)

let firstLetters = cats.map( cat => cat[0] )
console.log(firstLetters)

// Exercise: can you use map to create a new array with the
// last letter of each cat's name?

let startsWithM = cats.map( cat => {
    return (cat[0] === 'm' || cat[0] == 'M')
})
console.log(startsWithM)

// // Exercise: can you use map to create a new array of boolean values;
// //    whether a cat's name is longer than 6 letters or not.
let longerThanSix = cats.map(cat => {
    return (cat.length >= 6)
})
console.log(longerThanSix)
console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')

// //    For the example, the array will be [ true, false, true, true, false, true]

let quizScores = [90, 100, 79, 81, 100, 40, 92, 64]

let aGrades = quizScores.filter( score => score >= 90)
console.log(aGrades)
console.log('^^^^^^^^^^^^^^^^^Filter A Grades^^^^^^^^^^^^^^^^^^^^^')

let letterGrades = quizScores.map( score => {
    if (score >= 90) { return 'A'}
    if (score >= 80) { return 'B'}
    if (score >= 70) { return 'C'}
    if (score >= 60) { return 'D'}
    return 'F'
})

console.log(letterGrades)

// Starts with [ { score: 90, grade: 'A' }  .... ]
let scoreAndLetterGrades = quizScores.map( score => {
    if (score >= 90) { return {score: score, grade: 'A'} }
    if (score >= 80) { return {score: score, grade: 'B'} }
    if (score >= 70) { return {score: score, grade: 'C'} }
    if (score >= 60) { return {score: score, grade: 'D'} }
    return {score: score, grade: 'F'}
})

console.log(scoreAndLetterGrades)
console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')

let aScoresAndGrade = scoreAndLetterGrades.filter( scoreInfo => scoreInfo.grade == 'A')

console.log(aScoresAndGrade)


// // Note: shortcut assignment operator for objects.
let cat = 'Meridith'
let owner = 'Taylor Swift'
let catAndOwner = { cat, owner }  // Variable names become the keys
console.log(catAndOwner) // { cat: 'Meridith', owner: 'Taylor Swift' }

// // Using that here,
let scoreAndLetterGrades2 = quizScores.map( score => {
    let grade
    if (score >= 90) {  grade = 'A' }
    else if (score >= 80) { grade = 'B' }
    else if (score >= 70) { grade = 'C' }
    else if (score >= 60) { grade = 'D' }
    else { grade = 'F' }
    return {score, grade }
})

console.log(scoreAndLetterGrades2)
console.log('^^^^^^^^^^^shorter^^^^^^^^^^^^^^')


// // more useful array/object shortcuts: the spread operator

let dogs = ['Einstein', 'Marley', 'Fly', 'Max', 'Scooby', 'Zero']
let pets = [ ...dogs, ...cats, 'Kitty'] //Combines array in line 1 to array in line 135
console.log(pets)
console.log('^^^^^^^^^^^^^^^^^^SPREAD^^^^^^^^^^^^^^^^^^^^')

// // Filtering

// /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// */
// imports from above site:

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);


function isBigEnough(value) {
    return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

console.log(filtered)
console.log('*******************************************')


//let cats = ['Hello Kitty', 'Maru', 'Garfield', 'Soymilk', 'Miles', 'Meridith']

let shortCatNames = cats.filter( cat => cat.length < 6)
console.log(shortCatNames)

let shortCatNames2 = cats.filter( function(cat) {
    return cat.length < 6
})

console.log(shortCatNames2)

let namesStartingWithG = cats.filter( cat => cat[0] === 's' || cat[0] === 'S')
console.log(namesStartingWithG)
console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')

console.log(cats)  // original array is not changed.

function startsWithG(name) {
    // return name[0] === 'g' || name[0] === 'G'
    return name.toUpperCase().startsWith('G')
}
console.log('^^^^^^^^^Built-In^^^^^^^^^^^^^^')

let namesStartingWithG2 = cats.filter( cat => startsWithG(cat) )
let namesStartingWithG3 = cats.filter( startsWithG )

console.log(namesStartingWithG2)
console.log(namesStartingWithG3)


// // Works with arrays of objects too

let students = [
    {name: 'andy', starId: 'aaaa', present: true},
    {name: 'brian', starId: 'bbbb', present: false},
    {name: 'catherine', starId: 'cccc', present: true},
    {name: 'clara', starId: 'ccc2', present: false},
    {name: 'duncan', starId: 'dddd', present: true},
    {name: 'steve', starId: 'ssss', present: false},

]

// // Filter = make new array from only elements of existing array that meet a condition

let presentStudents = students.filter( student => student.present === false) // remove === false to search for present students
console.log('Who is here?', presentStudents)
console.log('^^^^^^^^^^^^^^^^^^not here students^^^^^^^^^^^^^^^^^^^^')

// // Exercise: can you use filter to create an array of students who are NOT present?

// // Filter - remove students meeting a condition
let everyoneButClara = students.filter( student => student.name != 'clara')
console.log(everyoneButClara)   // bye!
console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')

// // If we have an example student,
let brian = students[1]
// Can remove with filter
let everyoneButBrian = students.filter( student => student != brian )
console.log(everyoneButBrian)
console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')

let everyoneButDuncan = students.filter( function(student) {
    return student.name != 'duncan'
})

console.log(everyoneButDuncan)
console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
// // QUESTION: when mapping and filtering, does the original array change?

let onlyLetterC = students.filter( student => student.name.startsWith('c'))
console.log(onlyLetterC)
console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
// // Combine map and filter - get names of present students
// Exercise: think about how you would do this with a loop?
let presentStudentNames = students
    .filter( student => student.present )
    .map( student => student.name )

console.log(presentStudentNames)   // [ 'andy', 'catherine', 'duncan' ]

// Exercise: can you create an array of starIDs of students who are NOT present?

// // Spread operator works with arrays and objects too.
// // So if there's another class,
let moreStudents = [
    {name: 'justin', starId: 'jjj', present: true},
    {name: 'mary', starId: 'mmm', present: false},
]

let everyone = [ ...students, ...moreStudents ]
console.log(everyone)

// // And with an object, can be used to copy an object into a new object and add/edit properties,

let student = {name: 'daniel', starId: 'ddd', present: true}

let studentPlusEmail = { ...student, email: 'daniel@school.edu'}
console.log(studentPlusEmail)

// Equivalent to either of these
student.email = 'daniel@school.edu'
student['email'] = 'daniel@school.edu'

// Modify
let studentChangedStarId = { ...student, starId: 'eee'}   // make sure any attributes you change are at the end
console.log(studentChangedStarId)

// Another example object
let studentClassReg = { '1150': true, '2560': false}
// Combine two or more objects using spread operator
let studentAndReg = { ...student, ...studentClassReg}
console.log(studentAndReg)
console.log('^^^^^^^^^^^^^^^^^^^^student and registration^^^^^^^^^^^^^^^^^^')


// // Similar functions: find returns the first match
let steve = students.find( student => student.name === 'steve')
let beyonce = students.find( student => student.name === 'beyonce')
console.log('steve', steve)  // { name: 'steve', starId: 'sss', present: false }
console.log('beyonce', beyonce)  // undefined

// // every returns true if all of the items match a condition. Is everyone here?
let isEveryoneHere = students.every( student => student.present )
console.log('Is everyone here? ' + isEveryoneHere)

// // Let's use map to get everyone here!

let everyoneIsHere = students
    .map( student => { return { ...student, present: true}} )
//Using map to search for all students with a present : true and returning their entry

console.log(everyoneIsHere)

let isEveryoneHere2 = everyoneIsHere.every( student => student.present )
console.log('Is everyone here? ' + isEveryoneHere2)


let starIDlength = students.every( student => student.starId.length >= 3 )
console.log('Every star ID long enough?', starIDlength)   // true


let presentStudentNamesOnly2 = students.filter(student => student.present === false).map(student => student.name)

console.log(presentStudentNamesOnly2)


let steve2 = students.find(student => student.name === 'steve')
console.log(steve2)

// // Similar functions: find returns the first match
let steve3 = students.includes( student => student.name === 'steve')
let beyonce3 = students.includes( student => student.name === 'beyonce')
console.log('steve', steve3)  // { name: 'steve', starId: 'sss', present: false }
console.log('beyonce', beyonce3)  // undefined
