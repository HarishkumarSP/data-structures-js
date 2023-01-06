class Queue {
    constructor() {
        this.items = {}
        this.head = 0
        this.tail = 0
    }
    enqueue(element) {
        this.items[this.tail] = element
        this.tail++
    }
    dequeue() {
        if (this.isEmpty()) {
            return null
        }
        const item = this.items[this.head]
        delete this.items[this.head]
        this.head++
        return item
    }
    isEmpty() {
        return this.tail - this.head === 0
    }
    peek() {
        if (this.isEmpty()) {
            return null
        }
        return this.items[this.head]
    }
    size() {
        return this.tail - this.head
    }
    print() {
        console.log(this.items);
    }
}

// const queue = new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// console.log(queue.peek())
// queue.print()
// console.log(queue.size())
// console.log(queue.dequeue())
// console.log(queue.peek())
// queue.print()
// console.log(queue.size())

module.exports = Queue