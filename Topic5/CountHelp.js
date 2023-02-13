const arr = ['python', 'java', "java", 'java', 'java', 2, 2, 2, 9, 4];
const counts = {};

for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts);
console.log(counts['python'], counts['java']);