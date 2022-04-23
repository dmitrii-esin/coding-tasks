// DFS
const calcTreeDataWithExpandedState = (oldTree, newTree) => {
    const traverseExpandableTree = tree => {
      const { children, id } = tree;
  
      const isDirectory = hasIn('children', tree);
      const currentOldNode = findById(oldTree, id);
  
      const currentNewNode = {
        ...tree,
        expanded: !!currentOldNode && currentOldNode.expanded || false,
      };
  
      if (!isDirectory) {
        return { ...currentNewNode }
      }
  
      return {
        ...currentNewNode,
        children: not(isNil(children))
          ? children.map(traverseExpandableTree)
          : []
      };
    };
  
    return newTree.map(traverseExpandableTree);
  };
  
  const result = calcTreeDataWithExpandedState(someData1, someData2);

  //DFS Filter
  const oldTree =  {
    name: '/',
    type: 'directory',
    meta: {},
    children: [
      {
        name: 'eTc',
        type: 'directory',
        meta: {},
        children: [
          {
            name: 'NgiNx',
            type: 'directory',
            meta: {},
            children: [],
          },
          {
            name: 'CONSUL',
            type: 'directory',
            meta: {},
            children: [{ name: 'Config.json', type: 'file', meta: {} }],
          },
        ],
      },
      { name: 'HOSTS', type: 'file', meta: {}, },
    ],
  };
  
  const pred = n => n.type !== 'directory';
  
  const dfsFilter = (predicate, tree) => {
    if (!predicate(tree)) {
      return null;
    }
  
    const { children } = tree;
  
    if (!children) {
      return tree;
    }
  
    return {
      ...tree,
      children: children.map(c => dfsFilter(predicate, c)).filter(v => v)
    }
  }
  
  const newTree = dfsFilter(pred, oldTree);

  // DFS Finder
  const tree =  {
    name: '/',
    type: 'directory',
    meta: {},
    children: [
      {
        name: 'eTcn',
        type: 'directory',
        meta: {},
        children: [
          {
            name: 'Nginx',
            type: 'directory',
            meta: {},
            children: [],
          },
          {
            name: 'consul',
            type: 'directory',
            meta: {},
            children: [{ name: 'Config.json', type: 'file', meta: {} }],
          },
        ],
      },
      { name: 'HOSTS', type: 'file', meta: {}, },
    ],
  };
  
  const findFilesByName = (nodes, textPattern, depths) => {
    const iter = (n, acc, currentDepth = 0) => {   
      const { name, children } = n;
  
      const currentAcc = name.includes(textPattern) ? acc.concat(name) : acc;
  
      if (!children || currentDepth > depths) {
        return currentAcc;
      }
  
      return children.reduce((a, c) => iter(c, a, currentDepth + 1), currentAcc);
    }
  
    return iter(nodes, []);
  }
  
  const result = findFilesByName(tree, 'n', 2);

  // DFS Map
  const oldTree =  {
    name: '/',
    type: 'directory',
    meta: {},
    children: [
      {
        name: 'eTc',
        type: 'directory',
        meta: {},
        children: [
          {
            name: 'NgiNx',
            type: 'directory',
            meta: {},
            children: [],
          },
          {
            name: 'CONSUL',
            type: 'directory',
            meta: {},
            children: [{ name: 'Config.json', type: 'file', meta: {} }],
          },
        ],
      },
      { name: 'HOSTS', type: 'file', meta: {}, },
    ],
  };
  
  const mapper = n => ({...n, name: n.name.toLowerCase()});
  
  const dfsMap = (mapper, node) => {
    const { type, name, children } = node;
  
    const mappedNode = mapper(node);
  
    if (!children) {
      return mappedNode
    }
  
    return {
      ...mappedNode,
      children: children.map(n => dfsMap(mapper, n))
    }
  }
  
  const newTree = dfsMap(mapper, oldTree);

  // DFS Reducer
  const tree =  {
    name: '/',
    type: 'directory',
    meta: {},
    children: [
      {
        name: 'eTc',
        type: 'directory',
        meta: {},
        children: [
          {
            name: 'NgiNx',
            type: 'directory',
            meta: {},
            children: [],
          },
          {
            name: 'CONSUL',
            type: 'directory',
            meta: {},
            children: [{ name: 'Config.json', type: 'file', meta: {} }],
          },
        ],
      },
      { name: 'HOSTS', type: 'file', meta: {}, },
    ],
  };
  
  const dfsReduce = (reducer, nodes, initial) => {
    const { children } = nodes;
  
    const currentAcc = reducer(initial, nodes);
  
    if (!children) {
      return currentAcc;
    }
  
    return children.reduce((a, c) => dfsReduce(reducer, c, a), currentAcc);
  }
  
  const result = dfsReduce((acc, curr) => acc + 1, tree, 0);
  
  console.log(result);

  // Find by id
  const findById = (nodes, parentId) => {
    let stack = [...nodes];
  
    while (stack.length) {
      const node = stack.pop();
  
      if (getIDFromUUID(node.id) === getIDFromUUID(parentId)) {
        return node;
      }
  
      if (Array.isArray(node.children) && node.children.length) {
        stack = stack.concat(node.children);
      }
    }
  
    return undefined;
  };

  