const data = {
    layout: 5,
    title: 'New Navigation',
    type: 'command',
    children: [
        {
            layout: 1,
            title: 'New Navigation',
            type: 'command',
            children: [],
        },
        {
            layout: 2,
            title: 'New inline command',
            type: 'inline-command',
            children: [
                {
                    layout: 4,
                    title: 'New Message',
                    type: 'venue',
                    data: {
                        lat: '21',
                        lon: '34',
                        text: 'html text',
                    },
                },
            ],
        },
        {
            layout: 3,
            title: 'New Message',
            type: 'image',
            data: {
                text: 'text',
                source: 'image',
            },
        },
        {
            data: '<b>text</b>',
            layout: 6,
            title: 'Html title message',
            type: 'html',
        },
        {
            layout: 7,
            title: 'test appending existed quis with botId to bot',
            type: 'quiz',
            data: {
                quizId: '07d3c260-4738-4d6c-92c2-4d74bf36ef47',
            },
        },
    ],
};


const normalizeTree = (tree) => {
  const reducer = (nodes, currentNode, parentId) => {
    const { children, ...nodeBody } = currentNode;

    const normalizedNode = {
      ...nodeBody,
      parentId
    };

    const isParentNode = !!children && children.length > 0;

    if (!isParentNode) return nodes.concat(normalizedNode);

    return children.reduce((a, c) => reducer(a, c, nodeBody.layout), nodes).concat(normalizedNode);
  }

  return reducer([], tree, 0);
}