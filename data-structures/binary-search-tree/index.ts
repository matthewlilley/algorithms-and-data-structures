import { BinaryTreeNode } from "../binary-tree/index.ts";

// BINARY SEARCH TREE is a node based binary tree which further has right and left subtree that too are binary search tree.
// Insertion, deletion, searching of an element is faster in BINARY SEARCH TREE than BINARY TREE due to the ordered characteristics
// IN BINARY SEARCH TREE the left subtree has elements less than the nodes element and the right subtree has elements greater than the nodes element.

export function find<K, V>(
  root: BinaryTreeNode<K, V> | undefined,
  key: K
): BinaryTreeNode<K, V> | undefined {
  if (!root) {
    return;
  } else if (root.key === key) {
    return root;
  } else if (root.key > key) {
    return find(root.left, key);
  } else {
    return find(root.right, key);
  }
}

export function add<K, V>(
  // root to insert
  root: BinaryTreeNode<K, V> | undefined,
  // node to add
  node: BinaryTreeNode<K, V>
): BinaryTreeNode<K, V> {
  if (!root) {
    return node;
  } else if (root.key < node.key) {
    root.right = add(root.right, node);
  } else {
    root.left = add(root.left, node);
  }
  return root;
}

export function remove<K, V>(
  root: BinaryTreeNode<K, V> | undefined,
  key: K
): BinaryTreeNode<K, V> | undefined {
  if (!root) {
    return root;
  } else if (key < root.key) {
    root.left = remove(root.left, key);
    return root;
  } else if (key > root.key) {
    root.right = remove(root.right, key);
    return root;
  }

  // at this point we've recursed to the correct key node
  console.log("Node to delete", root);

  // both children
  if (!root.left && !root.right) {
    console.log("No children");
    root = undefined;
    return root;
  }

  // one child
  if (!root.left) {
    console.log("One child - Right");
    root = root.right;
    return root;
  } else if (!root.right) {
    console.log("One child - Left");
    root = root.left;
    return root;
  }

  // two children
  console.log("Two children");
  const successor = minimum(root.right);

  root.key = successor.key;

  root.right = remove(root.right, successor.key);

  return root;
}

export function contains<K, V>(
  root: BinaryTreeNode<K, V> | undefined,
  key: K
): boolean {
  if (!root) {
    return false;
  } else if (root.key === key) {
    return true;
  } else if (root.key > key) {
    return contains(root.left, key);
  } else {
    return contains(root.right, key);
  }
}

export function findParent<K, V>(
  root: BinaryTreeNode<K, V> | undefined,
  node: BinaryTreeNode<K, V>
): BinaryTreeNode<K, V> | undefined {
  console.log("find parent", JSON.stringify(root));
  if (node.parent) {
    return node.parent;
  } else if (!root) {
    console.log("no root");
    return;
  } else if (node === root.left || node === root.right) {
    return root;
  } else {
    if (node.key < root.key) {
      return findParent(root.left, node);
    } else {
      return findParent(root.right, node);
    }
  }
}

function inorder<K, V>(node: BinaryTreeNode<K, V> | undefined) {
  if (!node) {
    return;
  }

  if (node.left) {
    inorder(node.left);
  }

  console.log(node.key);

  if (node.right) {
    inorder(node.right);
  }
}

function preorder<K, V>(node: BinaryTreeNode<K, V> | undefined) {
  if (!node) {
    return;
  }

  console.log(node.key);

  if (node.left) {
    preorder(node.left);
  }

  if (node.right) {
    preorder(node.right);
  }
}

function postorder<K, V>(node: BinaryTreeNode<K, V> | undefined) {
  if (!node) {
    return;
  }

  if (node.left) {
    postorder(node.left);
  }
  if (node.right) {
    postorder(node.right);
  }

  console.log(node.key);
}

export function minimum<K, V>(
  node: BinaryTreeNode<K, V>
): BinaryTreeNode<K, V> {
  if (!node.left) {
    return node;
  }

  return minimum(node.left);
}

export function maximum<K, V>(
  node: BinaryTreeNode<K, V>
): BinaryTreeNode<K, V> {
  if (!node.right) {
    return node;
  }

  return maximum(node.right);
}

export function validate(
  node: BinaryTreeNode<any, any> | undefined,
  minimum: number = 0,
  maximum: number = Number.MAX_SAFE_INTEGER
): boolean {
  if (!node) {
    return true;
  } else if (node.key < minimum || node.key > maximum) {
    return false;
  }

  return (
    validate(node.left, minimum, node.key - 1) &&
    validate(node.right, node.key + 1, maximum)
  );
}

export interface BinarySearchTree<K, V> {
  root?: BinaryTreeNode<K, V>;
  find(key: K, root: BinaryTreeNode<K, V>): BinaryTreeNode<K, V> | undefined;
  add(node?: BinaryTreeNode<K, V>): BinaryTreeNode<K, V>;
  remove(key: K, root?: BinaryTreeNode<K, V>): BinaryTreeNode<K, V> | undefined;
  contains(key: K, root?: BinaryTreeNode<K, V>): boolean;
  findParent(
    node: BinaryTreeNode<K, V> | undefined,
    root: BinaryTreeNode<K, V>
  ): BinaryTreeNode<K, V> | undefined;
  inorder(node: BinaryTreeNode<K, V>): void;
  preorder(node: BinaryTreeNode<K, V>): void;
  postorder(node: BinaryTreeNode<K, V>): void;
  minimum(node: BinaryTreeNode<K, V>): BinaryTreeNode<K, V>;
  maximum(node: BinaryTreeNode<K, V>): BinaryTreeNode<K, V>;
  validate(): boolean;
}

export class BinarySearchTree<K, V> implements BinarySearchTree<K, V> {
  root?: BinaryTreeNode<K, V>;

  find(node: K, root = this.root) {
    return find(root, node);
  }

  add(node: BinaryTreeNode<K, V>) {
    this.root = add(this.root, node);
    return node;
  }

  remove(key: K, root = this.root) {
    return remove(root, key);
  }

  contains(key: K, root = this.root) {
    return contains(root, key);
  }

  findParent(node: BinaryTreeNode<K, V>, root = this.root) {
    return findParent(root, node);
  }

  inorder(node = this.root) {
    inorder(node);
  }

  preorder(node = this.root) {
    preorder(node);
  }

  postorder(node = this.root) {
    postorder(node);
  }

  minimum(node: BinaryTreeNode<K, V>) {
    return minimum(node);
  }

  maximum(node: BinaryTreeNode<K, V>) {
    return maximum(node);
  }

  validate(): boolean {
    return validate(this.root);
  }
}

// const binarySearchTree = new BinarySearchTree();

// // Build BST for testing
// // 13, 3, 4, 12, 14, 10, 5, 1, 8, 2, 7, 9, 11, 6, 18 in that order, starting from an empty tree.
// [13, 3, 4, 12, 14, 10, 5, 1, 8, 2, 7, 9, 11, 6, 18].forEach((i: number) => {
//   const node = new BinaryTreeNode(i);
//   binarySearchTree.add(node);
// });

// console.log("Valid Binary Search Tree:", binarySearchTree.validate());
