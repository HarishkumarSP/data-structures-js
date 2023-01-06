const Queue = require("../Queues/Queues")

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearch {
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root === null
    }
    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode) {
        // left side of tree   
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                return this.insertNode(root.left, newNode)
            }
        }
        // right side of tree   
        else {
            if (root.right === null) {
                root.right = newNode
            } else {
                return this.insertNode(root.right, newNode)
            }
        }
    }
    search(value) {
        if (value && this.root) {
            return this.searchNode(this.root, value)
        }
        return false
    }
    searchNode(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.searchNode(root.left, value)
            } else {
                return this.searchNode(root.right, value)
            }
        }
    }
    // Depth first search
    dfs = {
        preOrder(root) {
            if (root) {
                console.log(root.value)
                this.preOrder(root.left)
                this.preOrder(root.right)
            }
        },
        inOrder(root) {
            if (root) {
                this.inOrder(root.left)
                console.log(root.value)
                this.inOrder(root.right)
            }
        },
        postOrder(root) {
            if (root) {
                this.postOrder(root.left)
                this.postOrder(root.right)
                console.log(root.value)
            }
        }
    }
    // Breadth first search
    bfs() {
        // I used Queue ds instead of array.
        // because of using queue will have better time complexity O(1)
        // Step 1 create a queue
        const queue = new Queue()
        // Step 2. Enqeue the root node
        queue.enqueue(this.root) // like array push
        // Step 3. as long as a node existe in the queue 
        while (!queue.isEmpty()) {
            // - Dequeue the node from front
            const curr = queue.dequeue() // like array shift
            // - Read the nodes value
            console.log(curr.value)
            // - Enqueue the nodes left child if it exists
            if (curr.left) {
                queue.enqueue(curr.left)
            }
            // - Enqueue the nodes right child if it exists
            if (curr.right) {
                queue.enqueue(curr.right)
            }
        }
    }
    min(root) {
        if (!root.left) {
            return root.value
        }
        else {
            return this.min(root.left)
        }
    }
    max(root) {
        if (!root.right) {
            return root.value
        }
        else {
            return this.min(root.right)
        }
    }
    delete(value) {
        if (value) {
            this.root = this.deleteNode(this.root, value)
        }
    }
    deleteNode(root, value) {
        if (root === null) {
            return root
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        }
        else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        }
        else {
            // if node has no children
            if (!root.left && !root.right) {
                return null
            }
            // if node has one child
            else if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }
            // if node has two childrens                
            else {
                root.value = this.min(root.right)
                root.right = this.deleteNode(root.right, root.value)
            }
        }
        return root
    }
}

const tree = new BinarySearch()
tree.insert(10)
tree.insert(5)
tree.insert(3)
tree.insert(7)
tree.insert(20)
console.log(tree)
console.log(tree.search(3));
console.log('---Tree DFS----');
console.log('---DFS Pre order----');
tree.dfs.preOrder(tree.root)
console.log('---DFS In order----');
tree.dfs.inOrder(tree.root)
console.log('---DFS Post order----');
tree.dfs.postOrder(tree.root)
console.log('---Tree BFS-----');
tree.bfs(tree.root)
console.log('---Tree min-----');
console.log(tree.min(tree.root));
console.log('---Tree max-----');
console.log(tree.max(tree.root));
console.log('---Tree delete node-----');
tree.delete(10)
console.log(tree)
