// TODO: Implement a function that takes an html tree as input and replaces the class name in all nodes, class names are passed through parameters. The function must not mutate the original tree.

// Example:
// const tree = {
//   name: 'div',
//   type: 'tag-internal',
//   className: 'hexlet-community',
//   children: [
//     {
//       name: 'div',
//       type: 'tag-internal',
//       className: 'old-class',
//       children: [],
//     },
//     {
//       name: 'div',
//       type: 'tag-internal',
//       className: 'old-class',
//       children: [],
//     },
//   ],
// };

// console.log(replaceClass(tree, 'old-class', 'new-class'));

// Result:
// {
//   name: 'div',
//   type: 'tag-internal',
//   className: 'hexlet-community',
//   children: [
//     {
//       name: 'div',
//       type: 'tag-internal',
//       className: 'new-class',
//       children: [],
//     },
//     {
//       name: 'div',
//       type: 'tag-internal',
//       className: 'new-class',
//       children: [],
//     },
//   ],
// }

const htmlTreeSource = {
  name: "html",
  type: "type1",
  className: "ok",
  children: [
    {
      name: "body",
      type: "type1",
      className: "old",
      children: [
        {
          name: "h1",
          type: "type2",
          className: "ok",
          children: [
            {
              name: "",
              type: "type3",
              className: "old",
              content: "Сообщество",
            },
          ],
        },
        {
          name: "p",
          type: "type4",
          className: "old",
          children: [
            {
              type: "type1",
              className: "ok",
              content: "Общение между пользователями Хекслета",
            },
          ],
        },
        {
          name: "hr",
          type: "tag-leaf",
          className: "old",
        },
        {
          name: "input",
          type: "tag-leaf",
          className: "ok",
        },
        {
          name: "div",
          type: "tag-internal",
          className: "hexlet-community",
          children: [
            {
              name: "div",
              type: "tag-internal",
              className: "old",
              children: [],
            },
            {
              name: "div",
              type: "tag-internal",
              className: "ok",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

const replaceClass = (tree, oldName, newName) => {
  const iter = (node) => {
    const hasChildren = !!node.children;

    const modifiedNode = { ...node };

    if (modifiedNode.className === oldName) {
      modifiedNode.className = newName;
    }

    if (!hasChildren) {
      return modifiedNode;
    }

    const modifiedChildren = modifiedNode.children.map(iter);

    modifiedNode.children = modifiedChildren;

    return modifiedNode;
  };

  return iter(tree);
};

console.log(
  "!!replaceClass(htmlTreeSource, 'old', 'new')",
  replaceClass(htmlTreeSource, "old", "new")
);
