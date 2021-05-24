const set = new Set([1, 2, 2, 3, 4, 5, 5])
const arr3 = Array.of(...set)

//1. Iterate strings and find max from array
const n = 1234
let binary = n.toString(2) // convert to binary
const allCounts = []
for (c of binary) {
    allCounts.push(+c)
} // iterating string
const out = Math.max(...allCounts) //max from array using destructuring

//2. Create array from string
let arr = Array.from('a string')

//3. Create array from any arguments
const arr1 = Array.of(1, 2, 3) // [1,2,3]

//4. Array.every: Executes callback function on every value of array and returns true when all returns truthy otherwise false
const arr2 = [1, 2, 3, 4]
arr2.every((x, index) => {
    return true
})

//5 add in begining
arr = [4, 5, 6]
arr.unshift(1, 2, 3)
console.log(arr);
// [1, 2, 3, 4, 5, 6]

//6 Array to object
const obj1 = { ...arr }
const obj2 = Object.assign({}, arr)

//number to array of digits

arr = Array.from(String(n))
arr = [...String(n)]

const a = undefined
const b = String(a)

console.log(arr)



