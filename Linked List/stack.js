const LinkedList = require("./linkedList")

class StackLinkedList {
    constructor() {
        this.list = new LinkedList()
    }
    isEmpty() {
        this.list.isEmpty()
    }
    push(value) {
        this.list.prepend(value)
    }
    pop() {
        return this.list.removeFromFront()
    }
    size() {
        this.list.getSize()
    }
    peek() {
        return this.list.head.value
    }
    print() {
        this.list.print()
    }
}

const stack = new StackLinkedList()
stack.push(10)
stack.push(20)
stack.push(30)
stack.print()
console.log(stack.pop())
console.log(stack.peek())
stack.print()

