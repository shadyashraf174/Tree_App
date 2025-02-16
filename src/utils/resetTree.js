import { initialTree } from "./treeData";

export const resetTree = () => {
  return {
    tree: initialTree,
    nextId: 3,
    selectedNodeId: null,
    editingNodeId: null,
  };
};
