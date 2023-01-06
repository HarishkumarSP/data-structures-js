// This constructor accepts an array 
// with subarrays whose length was 2
// const maps = new Map([['a', 2], ['b', 3]])
const maps = new Map()
console.log(maps)
maps.set("name", "harish")
maps.set("age", 20)
maps.set("role", 'Software engineer')
maps.delete("age")
console.log(maps.has("name"))
console.log(maps.get("name"))
console.log(maps.keys())
console.log(maps.values())
console.log(maps.size)
console.log(maps)

