export const addNode = (tree, parentId, nextId) => {
  const newId = `new-${nextId}`;

  const traverse = (node) => {
    if (node.id === parentId) {
      return {
        ...node,
        children: [
          ...node.children,
          { id: newId, name: "New Node", children: [] },
        ],
      };
    }
    return {
      ...node,
      children: node.children.map(traverse),
    };
  };

  return traverse(tree);
};
