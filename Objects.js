// keys must either be a string or symbol data type
// values can be any data type
const obj = {
    name: 'obj1',
    'age': 20,
    details: {},
    list: [],
    'data-type': 'object'
}
console.log(obj)
obj.new = 123
delete obj.age
console.log(obj)
console.log(obj.name)
console.log(obj['data-type'])
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

