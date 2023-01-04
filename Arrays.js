const value = 'abc'
const obj = {}
const arr = ["hello", 1, value, true, false, obj]
console.log(arr);
// using some inbuild array methods
arr.push('push')
arr.pop()
arr.shift()
console.log(arr)
arr.forEach(data => console.log(data))
// first element
console.log(arr[0]);
// last element
console.log(arr[arr.length - 1]);