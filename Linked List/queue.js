const LinkedList = require("./linkedList")

class QueueLinkedList {
    constructor() {
        this.list = new LinkedList()
    }
    isEmpty() {
        return this.list.isEmpty()
    }
    enqueue(value) {
        this.list.append(value)
    }
    dequeue() {
        return this.list.removeFromFront()
    }
    peek() {
        return this.list.head.value
    }
    size() {
        return this.list.getSize()
    }
    print() {
        this.list.print()
    }
}

const queue = new QueueLinkedList()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
console.log(queue.dequeue())
queue.print()

