export const editNode = (tree, nodeId, newName) => {
  const traverse = (node) => {
    if (node.id === nodeId) {
      return { ...node, name: newName };
    }
    return { ...node, children: node.children.map(traverse) };
  };

  return traverse(tree);
};
