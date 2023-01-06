class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }
        // adding the new vertex1 to other vertex2 by Set add.
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    removeEdge(vertex1, vertex2) {
        if (this.hasVertex(vertex1, vertex2)) {
            this.adjacencyList[vertex1].delete(vertex2)
            this.adjacencyList[vertex2].delete(vertex1)
        }
    }
    //O(N)
    removeVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            // this.adjacencyList[vertex].forEach(element => {
            //     this.removeEdge(vertex, element)
            // })
            for (const adjacencyVertex of this.adjacencyList[vertex]) {
                this.removeEdge(vertex, adjacencyVertex)
            }
            delete this.adjacencyList[vertex]
        }
    }
    hasVertex(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            return true
        }
        return false
    }
    hasEdge(vertex1, vertex2) {
        if (this.hasVertex(vertex1, vertex2)) {
            return (
                this.adjacencyList[vertex1].has(vertex2) &&
                this.adjacencyList[vertex2].has(vertex1)
            )
        }
    }
    display() {
        for (const vertex in this.adjacencyList) {
            console.log(vertex + '->' + [...this.adjacencyList[vertex]])
        }
    }

}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdge('A', 'B')
graph.addEdge('B', 'C')
graph.display()
console.log(graph.hasEdge('A', 'C'));
graph.removeVertex('C')
graph.display()