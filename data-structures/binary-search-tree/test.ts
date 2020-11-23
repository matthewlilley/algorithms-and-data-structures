import { BinarySearchTree } from "./index.ts";
import { BinaryTreeNode } from "../binary-tree/index.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("binary search tree root is undefined", () => {
  const bst = new BinarySearchTree();
  assertEquals(bst.root, undefined);
});

Deno.test("binary search tree root is binary tree node after insert", () => {
  const tree = new BinarySearchTree();
  const node = new BinaryTreeNode(0);
  tree.add(node);
  assertEquals(tree.root, node);
});

Deno.test("findParent locates parent", () => {
  const tree = new BinarySearchTree();
  const root = new BinaryTreeNode(0);
  tree.add(root);
  const node = new BinaryTreeNode(1);
  tree.add(node);
  assertEquals(tree.findParent(node), root);
});

Deno.test("validates binary search tree", () => {
  const tree = new BinarySearchTree();
  // 13, 3, 4, 12, 14, 10, 5, 1, 8, 2, 7, 9, 11, 6, 18 in that order, starting from an empty tree.
  [13, 3, 4, 12, 14, 10, 5, 1, 8, 2, 7, 9, 11, 6, 18].forEach((i: number) => {
    const node = new BinaryTreeNode(i);
    tree.add(node);
  });
  assertEquals(tree.validate(), true);
});

Deno.test("invalidates invalid binary search tree", () => {
  const tree = new BinarySearchTree();

  // An invalid tree
  const root = new BinaryTreeNode(20);
  root.left = new BinaryTreeNode(10);
  root.right = new BinaryTreeNode(30);
  root.right.left = new BinaryTreeNode(5);
  root.right.right = new BinaryTreeNode(40);

  tree.add(root);

  assertEquals(tree.validate(), false);
});
