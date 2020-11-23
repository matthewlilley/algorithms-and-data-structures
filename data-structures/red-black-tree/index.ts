import { BinarySearchTree } from "../binary-search-tree/index.ts";
import { BinaryTreeNode } from "../binary-tree/index.ts";

// https://en.wikipedia.org/wiki/Red%E2%80%93black_tree
// TODO: Working, but needs refactoring and tidy up.

enum Color {
  BLACK,
  RED,
}

export interface RedBlackTreeNode<K, V> extends BinaryTreeNode<K, V> {
  key: K;
  value?: V;
  left?: RedBlackTreeNode<K, V>;
  right?: RedBlackTreeNode<K, V>;
  parent?: RedBlackTreeNode<K, V>;
  color?: Color;
}

export class RedBlackTreeNode<K, V> extends BinaryTreeNode<K, V>
  implements RedBlackTreeNode<K, V> {
  constructor(
    key: K,
    value?: V,
    left?: RedBlackTreeNode<K, V>,
    right?: RedBlackTreeNode<K, V>,
    parent?: RedBlackTreeNode<K, V>,
    color?: Color
  ) {
    super(key, value, left, right, parent);
    this.color = color;
  }
}

function rotateLeft<K, V>(node: RedBlackTreeNode<K, V>) {
  // Since the leaves of a red-black tree are empty, they cannot become internal nodes.
  if (!node?.right) {
    return;
  }
  const nnew = node.right;

  const p = node.parent;

  node.right = nnew.left;
  nnew.left = node;
  node.parent = nnew;

  // Handle other child/parent pointers.
  if (node.right) {
    node.right.parent = node;
  }

  // Initially n could be the root.
  if (p) {
    if (node == p.left) {
      p.left = nnew;
    } else if (node == p.right) {
      p.right = nnew;
    }
  }
  nnew.parent = p;
}

function rotateRight<K, V>(n: RedBlackTreeNode<K, V>) {
  // Since the leaves of a red-black tree are empty, they cannot become internal nodes.
  if (!n?.left) {
    return;
  }

  const nnew = n.left;

  const p = n.parent;

  n.left = nnew.right;
  nnew.right = n;
  n.parent = nnew;

  // Handle other child/parent pointers.
  if (n.left) {
    n.left.parent = n;
  }

  // Initially n could be the root.
  if (p) {
    if (n == p.left) {
      p.left = nnew;
    } else if (n == p.right) {
      p.right = nnew;
    }
  }

  nnew.parent = p;
}

function InsertRecurse<K, V>(
  root: RedBlackTreeNode<K, V>,
  node: RedBlackTreeNode<K, V>
) {
  // Recursively descend the tree until a leaf is found.
  if (root) {
    if (node.key < root.key) {
      if (root.left) {
        InsertRecurse(root.left, node);
        return;
      } else {
        root.left = node;
      }
    } else {
      if (root.right) {
        InsertRecurse(root.right, node);
        return;
      } else {
        root.right = node;
      }
    }
  }

  // Insert new Node n.
  node.parent = root;
  node.left = undefined;
  node.right = undefined;
  node.color = Color.RED;
}

function InsertRepairTree<K, V>(node: RedBlackTreeNode<K, V>) {
  console.log("Insert repair tree");
  if (!node.parent) {
    InsertCase1(node);
  } else if (node.parent.color === Color.BLACK) {
    InsertCase2(node);
  } else if ((<RedBlackTreeNode<K, V>>node.uncle)?.color === Color.RED) {
    InsertCase3(node);
  } else {
    InsertCase4(node);
  }
}

function InsertCase1<K, V>(node: RedBlackTreeNode<K, V>) {
  console.log("Insert Case 1");
  node.color = Color.BLACK;
}

function InsertCase2<K, V>(node: RedBlackTreeNode<K, V>) {
  console.log("Insert Case 2");
  return;
}

function InsertCase3<K, V>(node: RedBlackTreeNode<K, V>) {
  console.log("Insert Case 3");
  (<RedBlackTreeNode<K, V>>node.parent).color = Color.BLACK;
  (<RedBlackTreeNode<K, V>>node.uncle).color = Color.BLACK;
  (<RedBlackTreeNode<K, V>>node.grandparent).color = Color.RED;
  InsertRepairTree(<RedBlackTreeNode<K, V>>node.grandparent);
}

function InsertCase4<K, V>(node: RedBlackTreeNode<K, V>) {
  console.log("Insert Case 4");
  const parent = <RedBlackTreeNode<K, V>>node.parent;
  const grandparent = <RedBlackTreeNode<K, V>>node.grandparent;

  if (node === parent.right && parent === grandparent?.left) {
    rotateLeft(parent);
    node = <RedBlackTreeNode<K, V>>node.left;
  } else if (node === parent.left && parent === grandparent?.right) {
    rotateRight(parent);
    node = <RedBlackTreeNode<K, V>>node.right;
  }

  InsertCase4Step2(node);
}

function InsertCase4Step2<K, V>(node: RedBlackTreeNode<K, V>) {
  console.log("Insert Case 4 Step 2");
  const parent = <RedBlackTreeNode<K, V>>node.parent;
  const grandparent = <RedBlackTreeNode<K, V>>node.grandparent;
  if (node === parent.left) {
    rotateRight(grandparent);
  } else {
    rotateLeft(grandparent);
  }
  parent.color = Color.BLACK;
  if (grandparent) {
    grandparent.color = Color.RED;
  }
}

function add<K, V>(
  root: RedBlackTreeNode<K, V> | undefined,
  node: RedBlackTreeNode<K, V>
) {
  if (!root) {
    return node;
  }

  // Insert new Node into the current tree.
  InsertRecurse(root, node);

  // Repair the tree in case any of the red-black properties have been violated.
  InsertRepairTree(node);

  // Find the new root to return.
  root = node;

  while (root?.parent) {
    root = root.parent;
  }

  return root;
}

export interface RedBlackTree<K, V> extends BinarySearchTree<K, V> {
  root?: RedBlackTreeNode<K, V>;
  add(node: RedBlackTreeNode<K, V>): RedBlackTreeNode<K, V>;
  remove(key: K): RedBlackTreeNode<K, V> | undefined;
}

export class RedBlackTree<K, V> extends BinarySearchTree<K, V>
  implements RedBlackTree<K, V> {
  add(node: RedBlackTreeNode<K, V>) {
    this.root = add(this.root, node);
    return node;
  }
  remove(key: K) {
    // TODO: Implement
    return undefined;
  }
}

// Factory functions
export function createTree<K, V>() {
  return new RedBlackTree();
}

export function createNode<K>(key: K) {
  return new RedBlackTreeNode(key);
}

const tree = createTree();

const root = createNode(0);

console.log(tree.add(root));

tree.add(createNode(1));
tree.add(createNode(2));
tree.add(createNode(3));
tree.add(createNode(4));

console.log(tree.root);
