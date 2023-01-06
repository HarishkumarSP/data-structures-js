// Graph represntation
// 1.Adjacency matrix
// 2.Adjacency list

// Adjacency matrix representaion
//O(N)
const matrix = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
]
console.log(matrix[1][2]);

// Adjacency list
//O(1)
const list = {
    'A': ['B'],
    'B': ['A', 'C'],
    'C': ['B'],
}

console.log(list.C)