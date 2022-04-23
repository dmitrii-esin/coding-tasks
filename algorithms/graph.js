// Graphs:

// What is:
// Non-linear structure consists of vertexes and edges

// Types:
// directed
// undirected 
// weighted
// directed cyclic
// directed acyclic
// etc.

// Types of algorithms for different types of graph
// 1. DFS - for traversing or searching
// 2. BFS - shortest path in unweighted graph
// 3. Deikstra Algorithm - shortest path in weighted graph with only positive edges
// 4. Bellman-Ford Algorith - shortest path in weighted graph with positive and negative edges

// How to define the graph in PL: 
// depends on time/space complexity for representation the graph O(V), O(E)

// Usual ways to defined:

// For finding the neighbours of vertex v:
// Edge List: O(|E|)
// If the list is unsorted you need to check every edge to see if it comes from v
// For a complete graph (where every vertex is connected to all other vertices) this would be O(|V|^2)
// edge list (time O(E), space O(E) - a list, or array, of |E| edges (two points for vertex numbers or three if we deal with weighted graph or any info for details) - 
// [ [0,1], [0,6], [0,8], [1,4], [1,6], [1,9], [2,4], [2,6], [3,4], [3,5], [3,8], [4,5], [4,9], [7,8], [7,9] ]

// Adjacency Matrix: O(|V|)
// You need to check the the row for v, (which has |V| columns) to find which ones are neighbours
// adjacency matrix (time O(1), space - O(V^2)) - for constant search time we can implement another way
[ [0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 1, 0, 0] ]
// constant search - graph[i][j]

// Adjacency List: O(|N|)
// where N is the number of neighbours of v
// You need to iterate through the list for the vertex v, which has N neighbours
// v could have up to V-1 neighbours, so we could also say it is O(|V|)
// adjacency lists (adjacency matrix + adjacency lists) (time O(1), space O(N)) - we typically have an array of ∣V∣ adjacency lists, one adjacency list per vertex.
// [ [1, 6, 8],
//   [0, 4, 6, 9],
//   [4, 6],
//   [4, 5, 8],
//   [1, 2, 3, 5, 9],
//   [3, 4],
//   [0, 1, 2],
//   [8, 9],
//   [0, 3, 7],
//   [1, 4, 7] ]
             
// another way to graph representation
const graph = {
  1: [2,4],
  2: [1,3,4],
  3: [2,4]
  4: [1,2,3]
}         
      
// examples

var edgeList = [ [0, 2], [1, 3], [2, 3], [2, 4], [3, 5], [4, 5] ];

var adjMatrix = [
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
];

var adjList = [
    [2],
    [3],
    [3, 4],
    [5],
    [5],
    [],
];

// Algorithms
// BFS (good for deep trees), DFS (good for wide trees)

// What is the best method is BFS or DFS?
// For example, if a tree goes quite deep BFS may be the best solution because it could have a shorter run time, unless you know the solutions occur often and also very far down in the tree. The opposite also appears true, where if the tree is very wide DFS may be better (due to shorter run time). It sounds like on average DFS is quicker, though.

// The main points I have tried to take away from both methods though are,

// BFS:
// 1.Uses a queue
// 2.Uses FIFO, First-In-First-Out (For example, check-out line in a grocery store, first person in line gets helped first)
// 3.Beneficial finding the shortest link in between vertices

// all steps: 
// Initially, the queue contains just vertex 3 with distance 0.
// Dequeue vertex 3, and enqueue vertices 2 and 6, both with distance 1. The queue now contains vertex 2 with distance 1 and vertex 6 with distance 1.
// Dequeue vertex 2, and enqueue vertices 4 and 5, both with distance 2. The queue now contains vertex 6 with distance 1, vertex 4 with distance 2, and vertex 5 with distance 2.
// Dequeue vertex 6, and don't enqueue any vertices. The queue now contains vertex 4 with distance 2 and vertex 5 with distance 2.
// Dequeue vertex 4, and enqueue vertex 1 with distance 3. The queue now contains vertex 5 with distance 2 and vertex 1 with distance 3.
// Dequeue vertex 5, and don't enqueue any vertices. The queue now contains just vertex 1 with distance 3.
// Dequeue vertex 1, and enqueue vertex 0 with distance 4. The queue now contains just vertex 0 with distance 4.
// Dequeue vertex 0, and don't enqueue any vertices. The queue is now empty. Because the queue is empty, breadth-first search terminates.

// DFS:
// 1.Uses stack
// 2.Uses LIFO, Last-In-Fist-Out (For Example, you have a bucket and are filling it with golf balls. You put bag 1 in first then bag 2. But when you go to actually play, you take out the balls from the top of the bucket which were put in last).
// 3.Beneficial when finding cycles in a directed graph

// BFS code
/* A Queue object for queue-like functionality over JavaScript arrays. */
var Queue = function() {
    this.items = [];
};
Queue.prototype.enqueue = function(obj) {
    this.items.push(obj);
};
Queue.prototype.dequeue = function() {
    return this.items.shift();
};
Queue.prototype.isEmpty = function() {
    return this.items.length === 0;
};

// I.

/*
 * Performs a breadth-first search on a graph
 * @param {array} graph - Graph, represented as adjacency lists.
 * @param {number} source - The index of the source vertex.
 * @returns {array} Array of objects describing each vertex, like
 *     [{distance: _, predecessor: _ }]
 */
var doBFS = function(graph, source) {
    var bfsInfo = [];

    for (var i = 0; i < graph.length; i++) {
	    bfsInfo[i] = {
	        distance: null,
	        predecessor: null };
    }

    bfsInfo[source].distance = 0;

    var queue = new Queue();
    queue.enqueue(source);

    // var pathToRoot = 1;

    // Traverse the graph

    // As long as the queue is not empty:
    //  Repeatedly dequeue a vertex u from the queue.
    //  
    //  For each neighbor v of u that has not been visited:
    //     Set distance to 1 greater than u's distance
    //     Set predecessor to u
    //     Enqueue v
    //
    //  Hint:
    //  use graph to get the neighbors,
    //  use bfsInfo for distances and predecessors 
    
    while (!queue.isEmpty()) {
      var vertex = queue.dequeue(); // 3
      var nodes = graph[vertex]; // [2, 6]

      console.log('!!vertex, nodes', vertex, nodes);

      for (var i = 0; i < nodes.length; i++) {
        var currentNode = bfsInfo[nodes[i]];

        if (currentNode.distance === null) {
          currentNode.distance = bfsInfo[vertex].distance + 1;
          currentNode.predecessor = vertex;
          queue.enqueue(nodes[i]);
        }
      }
    }

    return bfsInfo;
};

// II.
// при условии, что мы имеем дело со смежным списком
// например, таким: adj = {A:[B,C,D], B:[E,F], ... }
function bfs(adj, s, t) {
	// adj - смежный список
	// s - начальная вершина
	// t - пункт назначения

	// инициализируем очередь
	let queue = []
	// добавляем s в очередь
	queue.push(s)
	// помечаем s как посещенную вершину во избежание повторного добавления в очередь
	s.visited = true
	while(queue.length > 0) {
		// удаляем первый (верхний) элемент из очереди
		let v = queue.shift()
		// abj[v] - соседи v
		for(let neighbor of adj[v]) {
			// если сосед не посещался
			if(!neighbor.visited) {
				// добавляем его в очередь
				queue.push(neighbor)
				// помечаем вершину как посещенную
				neighbor.visited = true
				// если сосед является пунктом назначения, мы победили
				if(neighbor === t) return true
			}
		} 
	}
	// если t не обнаружено, значит пункта назначения достичь невозможно
	return false
}

const adjacencyList = new Map();
adjacencyList.set('me', new Set([
      { name: 'denis', isDrink: true }, 
      { name: 'roma', isDrink: false }, 
      { name: 'vitalik', isDrink: true }, 
      { name: 'nastya', isDrink: true },
      { name: 'kostya', isDrink: true },
]));
adjacencyList.set('denis', new Set([
      { name: 'nastya', isDrink: true },
      { name: 'vitalik', isDrink: true },
      { name: 'me', isDrink: false }, 
      { name: 'vasya', isDrink: true },
]));
adjacencyList.set('vitalik', new Set([
      { name: 'denis', isDrink: true },
      { name: 'nastya', isDrink: true },
      { name: 'pasha', isDrink: true },
      { name: 'vasya', isDrink: true },
      { name: 'me', isDrink: false },
]));
adjacencyList.set('kostya', new Set([
      { name: 'me', isDrink: false },
]));
adjacencyList.set('roma', new Set([
      { name: 'me', isDrink: false },
]));
adjacencyList.set('nastya', new Set([
      { name: 'denis', isDrink: true },
      { name: 'vitalik', isDrink: true },
      { name: 'vasya', isDrink: true },
      { name: 'me', isDrink: false },
]));
adjacencyList.set('vasya', new Set([
      { name: 'nastya', isDrink: true },
      { name: 'vitalik', isDrink: true },
      { name: 'denis', isDrink: true },
]));
adjacencyList.set('pasha', new Set([
      { name: 'vitalik', isDrink: true },
]));

// Map {
//   'me' => Set {
//     { name: 'denis', isDrink: true },
//     { name: 'roma', isDrink: false },
//     { name: 'vitalik', isDrink: true },
//     { name: 'nastya', isDrink: true },
//     { name: 'kostya', isDrink: true }
//   },
//   'denis' => Set {
//     { name: 'nastya', isDrink: true },
//     { name: 'vitalik', isDrink: true },
//     { name: 'me', isDrink: false },
//     { name: 'vasya', isDrink: true }
//   },
//   'vitalik' => Set {
//     { name: 'denis', isDrink: true },
//     { name: 'nastya', isDrink: true },
//     { name: 'pasha', isDrink: true },
//     { name: 'vasya', isDrink: true },
//     { name: 'me', isDrink: false }
//   },
//   'kostya' => Set { { name: 'me', isDrink: false } },
//   'roma' => Set { { name: 'me', isDrink: false } },
//   'nastya' => Set {
//     { name: 'denis', isDrink: true },
//     { name: 'vitalik', isDrink: true },
//     { name: 'vasya', isDrink: true },
//     { name: 'me', isDrink: false }
//   },
//   'vasya' => Set {
//     { name: 'nastya', isDrink: true },
//     { name: 'vitalik', isDrink: true },
//     { name: 'denis', isDrink: true }
//   },
//   'pasha' => Set { { name: 'vitalik', isDrink: true } }
// }


// BFS with adjastency list

const graph1 = [
  [2, 3, 8], // root
  [4, 5],
  [6],
  [],
  [10, 7, 8],
  [8, 9],
  [8],
  [13],
  [],
  [12, 11],
  [],
  [],
  [],
];

const graph2 = {
  1: [2, 3, 8], // root
  2: [4, 5],
  3: [6],
  4: [],
  5: [10, 7, 8],
  6: [8, 9],
  7: [8],
  8: [13],
  9: [],
  10: [12, 11],
  11: [],
  12: [],
  13: [],
}

const hasTagret_1 = (graph, target) => {
  const queue = []; // push()/shift()
  const visited = new Set(); // add()/has()

  queue.push(...graph[0]);

  while (queue.length > 0) {
    const node = queue.shift();

    if (!visited.has(node) && node === target) return true;

    if (!visited.has(node) && node !== target) {
      queue.push(...graph[node - 1]);
    }

    visited.add(node);
  }

  return false;
}

const hasTagret_2 = (graph, target) => {
  const queue = []; // push()/shift()
  const visited = new Set(); // add()/has()

  for (node in graph) {
    if (node === target) return true;

    queue.push(...graph[node]);

    while (queue.length > 0) {
      const node = queue.shift();

      if (!visited.has(node) && node === target) return true;

      if (!visited.has(node) && node !== target) {
        queue.push(...graph[node]);
      }

      visited.add(node);
    }

    return false;
  }
}

// mistake!
const findShortestPath_2 = (graph, target) => {
  const queue = []; // push()/shift()
  const visited = new Set(); // add()/has()
  let path = 0;

  for (node in graph) {
    console.log('!!node', node);
    if (node === target) return path;

    queue.push(...graph[node]);
    path += 1;

    while (queue.length > 0) {
      const node = queue.shift();

      if (!visited.has(node) && node === target) return path;

      if (!visited.has(node) && node !== target) {
        queue.push(...graph[node]);
      }

      visited.add(node);
    }

    return null;
  }
}

console.log(
  findShortestPath_2(graph2, 6)
);

const BFS = (graph, predicate) => {
  const queue = []; // push()/shift()
  const visitedNames = new Set(); // add()/has()
  const result = []; // push()

  for ([k, v] of graph) {
      queue.push(...Array.from(v.values()));

      while (queue.length > 0) {
        const item = queue.shift();

        if (predicate(item) && !visitedNames.has(item.name)) result.push(item);

        visitedNames.add(item.name);
      }
  }

  return result;
}

const isPersonNoDrink = person => !person.isDrink;

console.log(
  BFS(adjacencyList, isPersonNoDrink)
);


const bfs = (startNode) => {
  const visited = new Set();
  const queue = [];
  queue.push(startNode);
  visited.add(startNode);

  while (queue.length > 0) {
    const currentNode = queue.shift();
    visit(currentNode);

    for (let neighbour of adjacencyList.get(currentNode)) {
      if (!visited.has(neighbour)) {
        queue.push(neighbour);
        visited.add(neighbour);
      }
    }
  }
};

const visited = new Set();

const dfs = node => {
  visited.add(node);
  for (let neighbour of adjacencyList.get(node)) {
    if (!visited.has(neighbour)) {
     dfs(neighbour);
    }
  }
};






// TODO: given graph with start node and finish node, find shortest path
// TODO: algorithm: 
// 1. generate set of verticles for keeping track the min distance from one to another
// {
//   A: 0,
//   B: Infinity,
//   ...
//   F: Infinity
// }
// 2. for all vertices - update the min distances from start to current verticle
// 3. return shortest path from startNode to finishNode

let graph = {
	A: { B: 2, C: 1, E: 6, F: 8 }, // start
	B: { D: 1 },
	C: { E: 4 },
	D: { E: 1, F: 5 },
  E: { F: 2 },
  F: {}, // finish
};

const findShortestPath = (graph, start, end) => {
  const costs = {};
  const visited = [start];
  let neighbours = {};

  const findNodeWithLowestCost = (costs, visited) => {
    let lowestCost = Infinity;
    let lowestNode = null;

    for (let node in costs) {
      const cost = costs[node];

      if (cost < lowestCost && !visited.includes(node)) {
        lowestCost = cost;
        lowestNode = node;
      }
    }

    return lowestNode;
  }
  
  for (let node in graph) {
    if (node === start) costs[node] = 0;
    if (node !== start) costs[node] = graph[start][node] || Infinity;
  }

  let node = findNodeWithLowestCost(costs, visited);

  while (node) {
    const cost = costs[node];
    neighbours = graph[node];

    for (n in neighbours) {
        const newCost = cost + neighbours[n];
        
        if (newCost < costs[n]) {
          costs[n] = newCost;
        }
    }

    console.log('!!node, cost, neighbours', node, cost, neighbours);

    visited.push(node);
    node = findNodeWithLowestCost(costs, visited);
  }
  
  return costs;
}

console.log(
  findShortestPath(graph, 'A', 'F')
);

// ===== ========

// Управление зависимостями это очень важная задача при разработке программного обеспечения. Обычно в приложениях задействовано множество сторонних компонентов, которые в свою очередь тоже могут полагаться на сторонние компоненты. Одной из задач менеджера зависимостей является подключение зависимостей в правильном порядке. Библиотеки от которых зависят другие, должны подключаться раньше. Определение этой последовательности сводится к задаче сортировки графа.


// Реализуйте и экспортируйте функцию sortGraph, 
//которая принимает на вход граф и возвращает 
//список узлов отсортированных при помощи топологической сортировки. 
//Подробно об алгоритме: https://ru.wikipedia.org/wiki/%D0%A2%D0%BE%D0%BF%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0

// Пример:

// import { sortGraph } from "./solution";

//const graph = {
//    'mongo': [],
//    'tzinfo': ['thread_safe'],
//    'uglifier': ['execjs'],
//    'execjs': ['thread_safe', 'json'],
//    'redis': []
//};

//['mongo', 'thread_safe', 'tzinfo', 'json', 'execjs', 'uglifier', 'redis'] == sortGraph(graph);

export const sortGraph = (graph) => {
  const add = (acc, node) => {
    return Object.assign(
      {},
      acc,
      node in graph ? graph[node].reduce(add, acc) : {},
      { [node]: true }
    );
  };

  return Object.keys(Object.keys(graph).reduce(add, {}));
};