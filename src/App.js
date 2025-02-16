// src/App.js
import React from "react";
import "./styles.css";
import useTree from "./hooks/useTree";
import TreeView from "./components/TreeView";

const App = () => {
  const {
    tree,
    selectedNodeId,
    editingNodeId,
    setSelectedNodeId,
    setEditingNodeId,
    handleAddNode,
    handleDeleteNode,
    handleEditNode,
    resetTree,
  } = useTree();

  return (
    <TreeView
      tree={tree}
      selectedNodeId={selectedNodeId}
      editingNodeId={editingNodeId}
      setSelectedNodeId={setSelectedNodeId}
      setEditingNodeId={setEditingNodeId}
      handleAddNode={handleAddNode}
      handleDeleteNode={handleDeleteNode}
      handleEditNode={handleEditNode}
      resetTree={resetTree}
    />
  );
};

export default App;
