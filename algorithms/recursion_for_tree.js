const categories = [
    {id: 'animals', parent: null},
    {id: 'mammals', parent: 'animals'},
    {id: 'cats', parent: 'mammals'},
    {id: 'dogs', parent: 'mammals'},
    {id: 'chihuahua', parent: 'dogs'},
    {id: 'labrador', parent: 'dogs'},
    {id: 'persion', parent: 'cats'},
    {id: 'siamese', parent: 'cats'}
  ];
  
  const makeTree = (categories, parent) => {
    let node = {};
    
    categories
      .filter(c => c.parent === parent)
      .forEach(c => node[c.id] = makeTree(categories, c.id))
      
    return node;
  };
  
  console.log(
    JSON.stringify(
      makeTree(categories, null),
      null, 4)
  );
  
  // {
  //     "animals": {
  //         "mammals": {
  //             "cats": {
  //                 "persion": {},
  //                 "siamese": {}
  //             },
  //             "dogs": {
  //                 "chihuahua": {},
  //                 "labrador": {}
  //             }
  //         }
  //     }
  // }
  // => undefined


  // ===========

  const tree = [
    {
        id: 1,
        text: 'Recursion is fun!',
        comments: [
            {
                id: 2,
                text: 'Yes, indeed!',
                comments: [
                    {
                        id: 3,
                        text: 'Yaaazzz! I agree with you guys',
                        comments: [
                            {
                                id: 11,
                                text: '😁',
                            },
                            {
                                id: 13,
                                text: '😂',
                            },
                        ]
                    },
                ]
            },
            {
                id: 9,
                text: 'True',
            },
        ],
    },
    {
        id: 4,
        text: 'Functional programming is cool!',
        comments: [
            {
                id: 5,
                text: 'Yep!',
            },
        ],
    },
];

const calcCommentsCount = (data) => {
  return data.reduce((counter, post) => {
    if (post.comments) {
      return counter + 1 + calcCommentsCount(post.comments)
    }

    return counter + 1;
  }, 0);
}


const result = calcCommentsCount(tree);

result;


// =============

var countDownFrom = function(n) {
    if (n === 0) {
        return;
    }

    console.log(n);

    countDownFrom(n - 1);
}

countDownFrom(10);

var commentsTree = [
    {
        id: 1,
        text: 'Recursion is fun!',
        comments: [
            {
                id: 2,
                text: 'Yes, indeed!',
                comments: [
                    {
                        id: 3,
                        text: 'Yaaazzz! I agree with you guys',
                        comments: [
                            {
                                id: 11,
                                text: '😁',
                            },
                            {
                                id: 13,
                                text: '😂',
                            },
                        ]
                    },
                ]
            },
            {
                id: 9,
                text: 'True',
            },
        ],
    },
    {
        id: 4,
        text: 'Functional programming is cool!',
        comments: [
            {
                id: 5,
                text: 'Yep!',
            },
        ],
    },
];

var countComments = (comments) => {
    return comments.reduce(
        (count, comment) => (
            comment.comments
            ? count + 1 + countComments(comment.comments)
            : count + 1
        ),
        0
    );
};

console.log(
    countComments(comments)
);