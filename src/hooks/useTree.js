import { useState } from "react";
import { initialTree } from "../utils/treeData";
import { addNode } from "../utils/addNode";
import { deleteNode } from "../utils/deleteNode";
import { editNode } from "../utils/editNode";

const useTree = () => {
  const [tree, setTree] = useState(initialTree);
  const [nextId, setNextId] = useState(3);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [editingNodeId, setEditingNodeId] = useState(null);

  const handleAddNode = (parentId) => {
    const newTree = addNode(tree, parentId, nextId);
    setTree(newTree);
    setNextId(nextId + 1);
  };

  const handleDeleteNode = (nodeId) => {
    const newTree = deleteNode(tree, nodeId);
    setTree(newTree);
    setSelectedNodeId(null);
  };

  const handleEditNode = (nodeId, newName) => {
    const newTree = editNode(tree, nodeId, newName);
    setTree(newTree);
    setEditingNodeId(null);
  };

  const resetTree = () => {
    setTree(initialTree);
    setNextId(3);
    setSelectedNodeId(null);
    setEditingNodeId(null);
  };

  return {
    tree,
    selectedNodeId,
    editingNodeId,
    setSelectedNodeId,
    setEditingNodeId,
    handleAddNode,
    handleDeleteNode,
    handleEditNode,
    resetTree,
  };
};

export default useTree;
