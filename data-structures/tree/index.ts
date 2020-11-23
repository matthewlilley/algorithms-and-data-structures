export interface Node {
  children: Node[];
  value: number;
}

export class Node implements Node {
  children: Node[] = [];
  value: number;
  constructor(value: number) {
    this.value = value;
  }
}

// Initilise root node
const root = new Node(8);

// Add children
root.children = [new Node(4), new Node(2), new Node(6)];

// Iterate over children
for (const child of root.children) {
  console.log(child);
}
