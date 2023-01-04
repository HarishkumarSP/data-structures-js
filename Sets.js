const obj = {
    name: 'sp',
    name: 'harish',
}
const sets = new Set([1, 2, 3, 'abc', obj])
console.log(sets)
sets.add(10)
sets.delete(1)
console.log(sets.size)
console.log(sets.has(2))
console.log(sets)
for (const iterator of sets) {
    console.log(iterator);
}
sets.clear()
console.log(sets)
