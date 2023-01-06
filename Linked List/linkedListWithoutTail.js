class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedListWithoutTail {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    prepend(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }
    append(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = newNode
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = newNode
        }
        this.size++
    }
    insert(index, value) {
        const newNode = new Node(value)
        if (index < 0 || index > this.size) {
            return null
        }
        else if (index === 0) {
            this.prepend(value)
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            newNode.next = prev.next
            prev.next = newNode
        }
        this.size++
    }
    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null
        }
        let removedNode
        if (index === 0) {
            removedNode = this.head
            this.head = this.head.next
        }
        else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removedNode = prev.next
            prev = removedNode.next
        }
        this.size--
        return removedNode.value
    }
    removeByValue(value) {
        if (this.isEmpty()) {
            return null
        }
        if (value === this.head.value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev) {
                const removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return removedNode.value
            }
        }
    }
    searchByValue(value) {
        if (this.isEmpty()) {
            return -1
        }
        let index = 0
        let curr = this.head
        while (curr) {
            if (value === curr.value) {
                return index
            }
            curr = curr.next
            index++
        }
        return -1
    }
    reverse() {
        // initiate prev as null
        let prev = null
        // current starts with head
        let curr = this.head
        while (curr) {
            // next will be current node next
            let next = curr.next
            // current node next pointing to prev
            curr.next = prev
            // prev now will come to current node
            prev = curr
            //current will now go to next as
            // we already store the current next node from next variable
            curr = next
        }
        // setting the header with last previous node
        this.head = prev
    }
    getSize() {
        return this.size
    }
    print() {
        if (this.isEmpty()) {
            console.log('List is empty')
        }
        let curr = this.head
        let value = ''
        while (curr) {
            value += `${curr.value}->`
            curr = curr.next
        }
        console.log(value)
    }
}

const list1 = new LinkedListWithoutTail()
console.log(list1.removeFrom(0));
list1.append(10)
list1.append(20)
list1.append(30)
list1.prepend(40)
list1.insert(2, 60)
list1.print()
console.log(list1.getSize());
console.log(list1.removeByValue(60));
list1.print()
list1.reverse()
list1.print()
// console.log(list1.getSize());
// console.log(list1.searchByValue(20));