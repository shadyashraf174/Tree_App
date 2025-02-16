// src/components/TreeView.js
import React from "react";
import TreeNode from "./TreeNode";

const TreeView = ({
  tree,
  selectedNodeId,
  editingNodeId,
  setSelectedNodeId,
  setEditingNodeId,
  handleEditNode,
  handleAddNode,
  handleDeleteNode,
  resetTree,
}) => {
  return (
    <div className="tree-container">
      <h1 className="tree-header">Tree</h1>
      <div>
        <TreeNode
          node={tree}
          onSelect={setSelectedNodeId}
          selectedNodeId={selectedNodeId}
          onEdit={setEditingNodeId}
          editingNodeId={editingNodeId}
          onSaveEdit={handleEditNode}
        />
      </div>
      <footer className="button-container">
        <div>
          <button
            className="tree-button"
            onClick={() => handleAddNode(selectedNodeId || "root")}
          >
            Add
          </button>
          <button
            className="tree-button"
            onClick={() => handleDeleteNode(selectedNodeId)}
            disabled={!selectedNodeId || selectedNodeId === "root"}
          >
            Remove
          </button>
          <button
            className="tree-button"
            onClick={() => setEditingNodeId(selectedNodeId)}
            disabled={!selectedNodeId || editingNodeId === selectedNodeId}
          >
            Edit
          </button>
          <button className="tree-button" onClick={resetTree}>
            Reset
          </button>
        </div>
      </footer>
    </div>
  );
};

export default TreeView;
