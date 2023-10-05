const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

// a ---> c
// |      |
// b      e
// |
// d ---> f

/**
 * Depth First Traversal
 * Expected output = abdfce
**/
const depthFirstTraversal = (graph, source) => {
    const stack = [source]
    while(stack.length > 0){
        const current = stack.pop()
        console.log(current)
        
        for(let neighbour of graph[current]){
            stack.push(neighbour)
        }
    } 
}
depthFirstTraversal(graph, 'a')

/**
 * Breadth First Traversal
 * Expected output = acbedf
**/

const breadthFirstTraversal = (graph, source) => {
    const queue = [source]
    while(queue.length > 0){
        const current = queue.pop()
        console.log(current)
        
        for(let neighbour of graph[current]){
            queue.unshift(neighbour)
        }
    }
}
breadthFirstTraversal(graph, 'a')
