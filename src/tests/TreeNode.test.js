import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TreeNode from "../components/TreeNode";
const mockNode = {
  id: "1",
  name: "Node 1",
  children: [
    { id: "1-1", name: "Node 2", children: [] },
    { id: "1-2", name: "Node 3", children: [] },
  ],
};

describe("TreeNode Component", () => {
  it("renders the node name", () => {
    render(
      <TreeNode
        node={mockNode}
        onSelect={() => {}}
        selectedNodeId={null}
        onEdit={() => {}}
        editingNodeId={null}
        onSaveEdit={() => {}}
      />
    );
    expect(screen.getByText("Node 1")).toBeInTheDocument();
    expect(screen.getByText("Node 2")).toBeInTheDocument();
    expect(screen.getByText("Node 3")).toBeInTheDocument();
  });

  it("calls onSelect when a node is clicked", () => {
    const onSelect = jest.fn();
    render(
      <TreeNode
        node={mockNode}
        onSelect={onSelect}
        selectedNodeId={null}
        onEdit={() => {}}
        editingNodeId={null}
        onSaveEdit={() => {}}
      />
    );
    fireEvent.click(screen.getByText("Node 1"));
    expect(onSelect).toHaveBeenCalledWith("1");
  });

  it("enters edit mode when editingNodeId matches node id", () => {
    render(
      <TreeNode
        node={mockNode}
        onSelect={() => {}}
        selectedNodeId={null}
        onEdit={() => {}}
        editingNodeId="1"
        onSaveEdit={() => {}}
      />
    );
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("Node 1");
  });

  it("calls onSaveEdit when the Save button is clicked", () => {
    const onSaveEdit = jest.fn();
    render(
      <TreeNode
        node={mockNode}
        onSelect={() => {}}
        selectedNodeId={null}
        onEdit={() => {}}
        editingNodeId="1"
        onSaveEdit={onSaveEdit}
      />
    );
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Updated Node" } });
    fireEvent.click(screen.getByText("Save"));
    expect(onSaveEdit).toHaveBeenCalledWith("1", "Updated Node");
  });

  it("cancels editing when the Cancel button is clicked", () => {
    const onEdit = jest.fn();
    render(
      <TreeNode
        node={mockNode}
        onSelect={() => {}}
        selectedNodeId={null}
        onEdit={onEdit}
        editingNodeId="1"
        onSaveEdit={() => {}}
      />
    );
    fireEvent.click(screen.getByText("Cancel"));
    expect(onEdit).toHaveBeenCalledWith(null);
  });
});
