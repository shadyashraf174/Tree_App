export const deleteNode = (tree, nodeId) => {
  if (nodeId === "root") {
    return { id: "root", name: "Root Node", children: [] };
  }

  const traverse = (node) => ({
    ...node,
    children: node.children
      .filter((child) => child.id !== nodeId)
      .map(traverse),
  });

  return traverse(tree);
};
