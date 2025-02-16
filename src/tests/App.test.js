import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("App Component", () => {
  test("renders the tree with initial nodes", () => {
    render(<App />);
    expect(screen.getByText("Node 1")).toBeInTheDocument();
    expect(screen.getByText("Node 2")).toBeInTheDocument();
    expect(screen.getByText("Node 3")).toBeInTheDocument();
    expect(screen.getByText("Node 4")).toBeInTheDocument();
    expect(screen.getByText("Node 5")).toBeInTheDocument();
  });

  test("adds a new node when the Add button is clicked", async () => {
    render(<App />);
    fireEvent.click(screen.getByText("Node 2"));
    fireEvent.click(screen.getByText("Add"));
    await waitFor(() => {
      expect(screen.getByText("New Node")).toBeInTheDocument();
    });
  });

  test("deletes a node when the Remove button is clicked", async () => {
    render(<App />);
    fireEvent.click(screen.getByText("Node 3"));
    fireEvent.click(screen.getByText("Remove"));
    await waitFor(() => {
      expect(screen.queryByText("Node 3")).not.toBeInTheDocument();
    });
  });

  test("edits a node when the Edit button is clicked", async () => {
    render(<App />);
    fireEvent.click(screen.getByText("Node 2"));
    fireEvent.click(screen.getByText("Edit"));
    const input = screen.getByDisplayValue("Node 2");
    fireEvent.change(input, { target: { value: "Updated Node" } });
    fireEvent.click(screen.getByText("Save"));
    await waitFor(() => {
      expect(screen.getByText("Updated Node")).toBeInTheDocument();
    });
  });

  test("resets the tree to its initial state", async () => {
    render(<App />);
    fireEvent.click(screen.getByText("Node 2"));
    fireEvent.click(screen.getByText("Remove"));
    fireEvent.click(screen.getByText("Reset"));
    await waitFor(() => {
      expect(screen.getByText("Node 2")).toBeInTheDocument();
    });
  });
});
