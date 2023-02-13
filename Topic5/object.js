let pairSet = {objectKey : 'ObjectValue', firstName: 'Justin', lastName : '3rd', Age : 99}

console.log(pairSet)

console.log(pairSet.Age)

console.log(pairSet['objectKey'])

let searchKey = 'lastName'
console.log(pairSet[searchKey])

pairSet.lastName = 'Third'

console.log(pairSet.lastName)

console.log(pairSet[searchKey])

pairSet.addNewKey = 'newKeyAdded'

console.log(pairSet.addNewKey)

let pairSet2 = {objectKeyValues : ['ObjectValue', 'ObjectValue2', 12324, 4321], firstName: 'Justin',
    lastName : {fun :'3rd', normal: 'Third'}, Age : 99}

console.log(pairSet2)

console.log(pairSet2.objectKeyValues[3])

console.log(pairSet2.objectKeyValues[0])

console.log(pairSet2.lastName.normal)

console.log(pairSet2.lastName.fun)

let pairSet3 = {objectKeyValues : ['ObjectValue', 'ObjectValue2', 12324, 4321], firstName: 'Justin',
    lastName : {fun :'3rd', normal: 'Third'}, Age : 99}

for (let key in pairSet3) {
    let value = pairSet3[key]
    console.log(`the KEY: ${key} \n  the VALUE: ${value}`)
}