class Node {
    constructor(value) {
        this.value = value
        this.prev = null
        this.next = null
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    //O(1)
    prepend(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }
    //O(1)
    append(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
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
    //O(1)
    removeFromFront() {
        if (this.isEmpty()) {
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.head.prev = null
        this.size--
        return value
    }
    //O(1)
    removeFromLast() {
        if (this.isEmpty()) {
            return null
        }
        const value = this.tail.value
        if (this.getSize() === 1) {
            this.head = null
            this.tail = null
        } else {
            let prev = this.tail.prev
            this.tail = prev
            this.tail.next = null
        }
        this.size--
        return value
    }
    getSize() {
        return this.size
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
            // current node prev pointing to next
            curr.prev = next
            // prev now will come to current node
            prev = curr
            //current will now go to next as
            // we already store the current next node from next variable
            curr = next
        }
        // setting the header and tail with last previous node
        let tail = this.head
        this.tail = tail
        this.head = prev
    }
    print() {
        if (this.isEmpty()) {
            console.log('List is empty')
        }
        let curr = this.head
        let value = ''
        while (curr) {
            value += `${curr.value}<->`
            curr = curr.next
        }
        console.log(value)
    }
    printReverse() {
        if (this.isEmpty()) {
            console.log('List is empty')
        }
        let curr = this.tail
        let value = ''
        while (curr) {
            value += `${curr.value}<->`
            curr = curr.prev
        }
        console.log(value)
    }
}

// const list = new DoubleLinkedList()
// list.append(10)
// list.append(30)
// list.append(50)
// list.append(20)
// list.prepend(0)
// list.print()
// list.reverse()
// list.print()
// list.printReverse()
module.exports = DoubleLinkedList