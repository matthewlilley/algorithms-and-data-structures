import { BinarySearchTree } from "../binary-search-tree/index.ts";
import { BinaryTreeNode } from "../binary-tree/index.ts";

export function add<K, V>(
  root: AvlTreeNode<K, V> | undefined,
  node: AvlTreeNode<K, V>
): AvlTreeNode<K, V> {
  // Step 1 - Perform normal BST
  console.log("Step 1 - Perform normal BST");
  if (!root) {
    return node;
  } else if (node.key < root.key) {
    root.left = add(root.left, node);
  } else if (node.key > root.key) {
    root.right = add(root.right, node);
  } else {
    return root;
  }

  // Step 2 - Update the height of the ancestor node
  console.log("Step 2 - Update the height of the ancestor node");
  root.height = Math.max(getHeight(root.left), getHeight(root.right)) + 1;

  // Step 3 - Get the balance factor
  console.log("Step 3 - Get the balance factor");
  const balance = getBalanceFactor(root);
  // console.log("Balance factor 1:", balance);

  // Step 4 - If the node is unbalanced,
  // then try out the 4 cases

  // The left subtree of α's left son was inserted once //rorateRight(α)
  // The right subtree of the left son of α was inserted once //rorateLeft(α.left), rorateRight(α)
  // The left son of α's right son was inserted once //rorateRight(α.right), rorateLeft(α)
  // The right subtree of α's right son was inserted once //rorateLeft(α)

  // Case 1 - Left Left
  if (balance > 1 && node.key < (<AvlTreeNode<K, V>>root.left).key) {
    console.log("Step 4 - Case 1 - Left Left");
    return rightRotate(root);
  } else if (balance < -1 && node.key > (<AvlTreeNode<K, V>>root.right).key) {
    // Case 2 - Right Right
    console.log("Step 4 - Case 2 - Right Right");
    return leftRotate(root);
  } else if (balance > 1 && node.key > (<AvlTreeNode<K, V>>root.left).key) {
    // Case 3 - Left Right
    console.log("Step 4 - Case 3 - Left Right");
    root.left = leftRotate(<AvlTreeNode<K, V>>root.left);
    return rightRotate(root);
  } else if (balance < -1 && node.key < (<AvlTreeNode<K, V>>root.right).key) {
    // Case 4 - Right Left
    console.log("Step 4 - Case 4 - Right Left");
    root.right = rightRotate(<AvlTreeNode<K, V>>root.right);
    return leftRotate(root);
  }

  // console.log("Balance factor 2:", balance);

  return root;
}

export function remove<K, V>(key: K): AvlTreeNode<K, V> | undefined {
  // TODO: Implement
  throw Error("Not implemented");
  return;
}

function getHeight<K, V>(node?: AvlTreeNode<K, V>) {
  if (!node) {
    return 0;
  }

  return node.height;
}

function getBalanceFactor<K, V>(node: AvlTreeNode<K, V>) {
  if (!node) {
    return 0;
  }

  return getHeight(node.left) - getHeight(node.right);
}

//     (x)                    (y)
//     / \     		            / \
//   'a  (y)      ===>	    (x) 'c
//       / \  		         / \
//     'b  'c  	         'a  'b

// In LL Rotation every node moves one position to left from the current position.
function leftRotate<K, V>(x: AvlTreeNode<K, V>) {
  if (!x.right) {
    throw Error("Cannot perform left rotation on this node!");
  }

  // Get Alpha
  const α = x.left;

  // Get Y
  const y = x.right;

  // Get Beta
  const β = y.left;

  // Get Gamma
  const γ = y.right;

  // Rotation
  y.left = x;

  x.right = β;

  // Fix X height max(α,β)
  x.height = Math.max(getHeight(α), getHeight(β)) + 1;

  // Fix Y height max(β,γ)
  y.height = Math.max(getHeight(β), getHeight(γ)) + 1;

  return y;
}

//       (y)                 (x)
//       / \    	           / \
//     (x) 'c     ===>    'a   (y)
//    / \      	          / \
//  'a  'b      	      'b  'c

// In RR Rotation every node moves one position to right from the current position.
function rightRotate<K, V>(y: AvlTreeNode<K, V>) {
  if (!y.left) {
    throw Error("Cannot perform right rotate on this node!");
  }

  // Get X
  const x = y.left;

  // Get Alpha
  const α = x.left;

  // Get Beta
  const β = x.right;

  // Get Gamma
  const γ = y.right;

  // Rotation
  x.right = y;
  y.left = β;

  // Fix Y height max(β,γ)
  y.height = Math.max(getHeight(β), getHeight(γ)) + 1;

  // Fix X height max(α,β)
  x.height = Math.max(getHeight(α), getHeight(β)) + 1;

  return x;
}

interface AvlTreeNode<K, V> extends BinaryTreeNode<K, V> {
  left?: AvlTreeNode<K, V>;
  right?: AvlTreeNode<K, V>;
  height: number;
}

class AvlTreeNode<K, V> extends BinaryTreeNode<K, V>
  implements AvlTreeNode<K, V> {
  left?: AvlTreeNode<K, V>;
  right?: AvlTreeNode<K, V>;
  height: number;
  constructor(
    key: K,
    value?: V,
    left?: AvlTreeNode<K, V>,
    right?: AvlTreeNode<K, V>,
    parent?: AvlTreeNode<K, V>
  ) {
    super(key, value, left, right, parent);
    this.height = 1;
  }
}

interface AvlTree<K, V> extends BinarySearchTree<K, V> {
  root?: AvlTreeNode<K, V>;
  getHeight(node: AvlTreeNode<K, V>): number;
  getBalanceFactor(node: AvlTreeNode<K, V>): number;
  leftRotate(node: AvlTreeNode<K, V>): AvlTreeNode<K, V>;
  rightRotate(node: AvlTreeNode<K, V>): AvlTreeNode<K, V>;
}

class AvlTree<K, V> extends BinarySearchTree<K, V> implements AvlTree<K, V> {
  root?: AvlTreeNode<K, V>;
  add(node: AvlTreeNode<K, V>): AvlTreeNode<K, V> {
    this.root = add(this.root, node);
    return node;
  }
  remove(key: K): AvlTreeNode<K, V> | undefined {
    return this.remove(key);
  }
  getHeight(node?: AvlTreeNode<K, V>) {
    return getHeight(node);
  }

  getBalanceFactor(node: AvlTreeNode<K, V>) {
    return getBalanceFactor(node);
  }

  leftRotate(node: AvlTreeNode<K, V>) {
    return leftRotate(node);
  }

  rightRotate(node: AvlTreeNode<K, V>) {
    return rightRotate(node);
  }
}

const avlTree = new AvlTree();

[10, 20, 30, 40, 50, 25].forEach((i: number) => {
  const node = new AvlTreeNode(i);
  avlTree.add(node);
});

avlTree.preorder();

console.log("Root", JSON.stringify(avlTree.root));
