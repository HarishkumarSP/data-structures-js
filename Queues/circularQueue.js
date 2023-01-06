class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity)
        this.capacity = capacity
        // initially head and tail points no index
        this.head = -1
        this.tail = -1
        this.currentLength = 0
    }
    isFull() {
        return this.currentLength === this.capacity
    }
    isEmpty() {
        return this.currentLength === 0
    }
    enqueue(element) {
        if (!this.isFull()) {
            // we used to set tail until the given capacity so using mod.
            this.tail = (this.tail + 1) % this.capacity
            this.items[this.tail] = element
            this.currentLength += 1
            if (this.head === -1) {
                this.head = this.tail
            }
        }
    }
    dequeue() {
        if (this.isEmpty()) {
            return null
        }
        const item = this.items[this.head]
        this.items[this.head] = null
        // we used to set head until the given capacity so using mod.
        this.head = (this.head + 1) % this.capacity
        this.currentLength -= 1
        if (this.isEmpty()) {
            this.head = -1
            this.tail = -1
        }
        return item
    }
    peek() {
        if (this.isEmpty()) {
            return null
        }
        return this.items[this.head]
    }
    size() {
        return this.currentLength
    }
    print() {
        console.log(this.items);
    }
}

const cirularQueue = new CircularQueue(5)
cirularQueue.print()
cirularQueue.enqueue(10)
cirularQueue.enqueue(20)
cirularQueue.enqueue(30)
cirularQueue.enqueue(40)
cirularQueue.print()
console.log(cirularQueue.peek());
console.log(cirularQueue.dequeue());
console.log(cirularQueue.peek());
cirularQueue.enqueue(50)
cirularQueue.print()
cirularQueue.enqueue(60)
cirularQueue.print()
console.log(cirularQueue.isFull());