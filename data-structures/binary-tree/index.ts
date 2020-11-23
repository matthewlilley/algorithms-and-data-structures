// import { add, find, remove } from "../binary-search-tree/index.ts";

import { Queue } from "../queue/index.ts";

// BINARY TREE is a non linear data structure where each node can have almost two child nodes.
// BINARY TREE is unordered hence slower in process of insertion, deletion and searching.
// IN BINARY TREE there is no ordering in terms of how the nodes are arranged

export function add<K, V>(root: BinaryTreeNode<K, V>, key: K, value?: V) {
  console.log("Binary tree add", root, key);

  const queue = new Queue<BinaryTreeNode<K, V>>();
  queue.enqueue(root);

  while (queue.size) {
    root = queue.peek();
    queue.dequeue();

    if (!root.left) {
      root.left = new BinaryTreeNode<K, V>(key, value);
      break;
    } else {
      queue.enqueue(root.left);
    }

    if (!root.right) {
      root.right = new BinaryTreeNode(key, value);
      break;
    } else {
      queue.enqueue(root.right);
    }
  }
}

export function find<K, V>(
  root: BinaryTreeNode<K, V> | undefined,
  key: K
): BinaryTreeNode<K, V> | undefined {
  if (!root) {
    return;
  }

  if (root.key === key) {
    return root;
  }

  const left = find(root.left, key);

  return left ? left : find(root.right, key);
}

export interface BinaryTreeNode<K, V> {
  key: K;
  value?: V;
  left?: BinaryTreeNode<K, V>;
  right?: BinaryTreeNode<K, V>;
  parent?: BinaryTreeNode<K, V>;
}

export class BinaryTreeNode<K, V> implements BinaryTreeNode<K, V> {
  constructor(
    key: K,
    value?: V,
    left?: BinaryTreeNode<K, V>,
    right?: BinaryTreeNode<K, V>,
    parent?: BinaryTreeNode<K, V>
  ) {
    this.key = key;
    this.value = value;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }

  // Insert
  add(key: K, value?: V) {
    return add(this, key, value);
  }

  // Search
  find(key: K) {
    return find(this, key);
  }

  // TODO: Delete
  // Ref: https://www.geeksforgeeks.org/deletion-binary-tree
  remove(key: K) {
    // remove(this, key);
  }

  get grandparent() {
    return this.parent?.parent;
  }
  get uncle() {
    return this.parent?.sibling;
  }
  get sibling() {
    if (!this?.parent) {
      return;
    }
    if (this === this.parent.left) {
      return this.parent.right;
    } else {
      return this.parent.left;
    }
  }
}

// // Initilise root node
// const root = new BinaryTreeNode(0);

// root.left = new BinaryTreeNode(1);
// root.left.left = new BinaryTreeNode(2);

// root.right = new BinaryTreeNode(3);
// root.right.right = new BinaryTreeNode(4);

// console.log(root.find(3));

// root.add(5);

// console.log(root);
