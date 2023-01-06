class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }
    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key, value) {
        const hash = this.hash(key)
        const bucket = this.table[hash]
        if (!bucket) {
            this.table[hash] = [[key, value]]
        }
        else {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([key, value])
            }
        }
    }
    get(key) {
        const hash = this.hash(key)
        const bucket = this.table[hash]
        if (bucket) {
            const sameKey = bucket.find(item => item[0] === key)
            if (sameKey) {
                return sameKey[1]
            }
        }
        return undefined
    }
    remove(key) {
        const hash = this.hash(key)
        const bucket = this.table[hash]
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                let index = bucket.indexOf(sameKeyItem)
                bucket.splice(index, 1)
            }
        }
    }
    print() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}
const hash = new HashTable(10)
hash.set("name", 'harish')
hash.set("age", 22)
hash.set("details", {})
hash.set("details", '')
console.log(hash.get("name"))
hash.print()
hash.remove("age")
hash.print()