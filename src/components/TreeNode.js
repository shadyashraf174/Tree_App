import React, { useState } from "react";

const TreeNode = ({
  node,
  onSelect,
  selectedNodeId,
  onEdit,
  editingNodeId,
  onSaveEdit,
}) => {
  const isSelected = node.id === selectedNodeId;
  const isEditing = node.id === editingNodeId;

  const [editedName, setEditedName] = useState(node.name);

  const handleSave = () => {
    onSaveEdit(node.id, editedName);
  };

  return (
    <div className="tree-node">
      <div
        className={`tree-node ${isSelected ? "selected" : ""}`}
        onClick={() => !isEditing && onSelect(node.id)}
        role="treeitem"
        aria-selected={isSelected}
      >
        {isEditing ? (
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="tree-input"
              autoFocus
            />
            <button className="tree-button" onClick={handleSave}>
              Save
            </button>
            <button className="tree-button" onClick={() => onEdit(null)}>
              Cancel
            </button>
          </div>
        ) : (
          <span>{node.name}</span>
        )}
      </div>
      {node.children.length > 0 && (
        <div style={{ marginLeft: "20px" }}>
          {node.children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              onSelect={onSelect}
              selectedNodeId={selectedNodeId}
              onEdit={onEdit}
              editingNodeId={editingNodeId}
              onSaveEdit={onSaveEdit}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
