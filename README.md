# Tree Management Application

This is a React-based Tree Management Application that allows users to:

- Add new nodes to the tree.
- Delete existing nodes.
- Edit the names of nodes.
- Reset the tree to its initial state.

The application is built using React and follows a modular structure for better maintainability and scalability.

---

## Table of Contents

1. [Features](#features)

2. [Project Structure](#project-structure)

3. [Setup Instructions](#setup-instructions)

4. [Usage](#usage)

5. [Diagrams](#diagrams)

- [Class Diagram](#class-diagram)

- [Use Case Diagram](#use-case-diagram)

6. [Testing](#testing)

---

## Features

- **Add Node**: Add a new node as a child of the selected node.

- **Delete Node**: Delete a node (except the root node).

- **Edit Node**: Edit the name of a node.

- **Reset Tree**: Reset the tree to its initial state.

- **Interactive UI**: Intuitive buttons for adding, deleting, editing, and resetting nodes.

---

## Project Structure

```

src/
├── components/
│   ├── TreeNode.js
│   └── TreeView.js
├── hooks/
│   └── useTree.js
├── tests/
│   ├── App.test.js
│   └── TreeNode.test.js
├── utils/
│   ├── treeData.js
│   ├── addNode.js
│   ├── deleteNode.js
|   ├── resetTree.js
│   └── editNode.js
├── App.js
├── index.js
└── styles.css

```

---

## Setup Instructions

### Clone the Repository

```bash

git clone https://github.com/shadyashraf174/tree_app.git

cd tree-management-app

```

### Install Dependencies

```bash

npm install

```

### Run the Application

```bash

npm start

```

The application will open at [http://localhost:3000](http://localhost:3000).

---

## Usage

- **Add a Node**: Select a node by clicking on it, then click the "Add" button to add a new child node.

- **Delete a Node**: Select a node by clicking on it, then click the "Remove" button to delete the node.

- **Edit a Node**: Select a node by clicking on it, then click the "Edit" button, update the name, and click "Save".

- **Reset the Tree**: Click the "Reset" button to reset the tree to its initial state.

---

## Diagrams

### Class Diagram

The class diagram represents the structure of the application, including components, hooks, and utility functions.

![Class Diagram](https://uml.planttext.com/plantuml/png/XLCzRuCm4DsH-0yUYPhq1p1KYPGCxP2535qTV6sfp85iarQg-jzhGmv3SgARx-Cztti-RwsJndMrJfDIIsl5hct5Jve8yI0Ce0AJhNBnKhm-7ZJKW2vDVjE4cay6uDWe80JwSowQyoUKRiWqM83sKIxUEYnTrU2GjtqML40_grnOPofy9yn1LNS8y3dVmWCAUG4EzB-4pa9GGGgSFyyLB4swCDE7HALXftfSrae_YOizVg1BKwbfwzxVutetCvpnCRr1AjEv5WXVHra32pLWmGMjsPYU-227ISc7QvXD_LYBMndXmky-ngu-Wrb5woRKQbH6x35pSy6TSeOEhkA9ZE95AiuQXZjGxAMJn5sXVs2fJxEjwFl3Fzbidk8NoCCgsLYWnQ8ynQ56PdErYLjSULJF5SVngRZr--y_zny0)

---

### Use Case Diagram

The use case diagram represents the interactions between the user and the system.

![Use Case Diagram](https://uml.planttext.com/plantuml/png/TPBDIiKm58JtWRp3S3Vgule0BkIAkjI5V_j3C_O6qXIIKqN4TpTfgRGNkqk6RuOpXtF8Aac7BbWJ-AxG7ictHuNpYOtwFbeZZVO9hvd96ckgBB4DnEubaNYGA2qxHiNpLrPsEtnRWv77Vd-DynldyDWxNk0Ajn8XvI-8_4GiwfgzOw1oXRj9ad_eU-TrnR8A4tcM4QKxCJmnKr7ddXrfLFH8Q6rJ-dlDyD6hbu2o7Js9UFDby6N2HnN-0hAceT4XiUuAo_ANnJnapjQIc4TYLNaBMZJTGfRTjfZ5y1Mfhtbz4_DZpO7HbOFu1G00)

---

## Testing

The application is tested using React Testing Library and Jest. To run the tests:

```bash

npm test

```

### Test Cases

- **App Component**:

- Renders the tree with initial nodes.

- Adds a new node when the "Add" button is clicked.

- Deletes a node when the "Remove" button is clicked.

- Edits a node when the "Edit" button is clicked.

- Resets the tree to its initial state when the "Reset" button is clicked.

- **TreeNode Component**:

- Renders the node name.

- Calls `onSelect` when a node is clicked.

- Enters edit mode when `editingNodeId` matches the node ID.

- Calls `onSaveEdit` when the "Save" button is clicked.

- Cancels editing when the "Cancel" button is clicked.

---

![Screenshot 2025-02-17 015707](https://github.com/user-attachments/assets/28b09f48-cdbb-4282-baaa-c47f701d4c9e)

---

![Screenshot 2025-02-17 015732](https://github.com/user-attachments/assets/d6205ce5-2ec2-4077-8628-5c46cc37f8ba)

---
