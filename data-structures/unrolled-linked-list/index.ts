export interface UnrolledLinkedListNode {
  count: number;
  array: number[];
  next: UnrolledLinkedListNode;
}

export class UnrolledLinkedListNode implements UnrolledLinkedListNode {
  constructor(n: number) {
    this.array = new Array(n).fill(undefined);
    this.count = 0;
  }
}

export class UnrolledLinkedList {
  head?: UnrolledLinkedListNode;
  tail?: UnrolledLinkedListNode;
  nodeIndex: number;
  nodeCapacity: number;
  constructor(nodeCapacity: number) {
    this.nodeIndex = 0;
    this.nodeCapacity = nodeCapacity;
  }
  add(number: number) {
    this.nodeIndex++;

    if (!this.head) {
      console.log("First");

      const node = new UnrolledLinkedListNode(this.nodeCapacity);

      node.array[0] = number;

      // console.log("Add number to node", 0, number);

      node.count++;

      this.head = node;

      this.tail = this.head;

      return this.tail;
    }

    if (!this.head || !this.tail) {
      throw Error();
    }

    // Attaching the elements into nodes
    if (this.tail.count + 1 <= this.nodeCapacity) {
      // console.log("Add number to node", this.tail.count, number);
      this.tail.array[this.tail.count] = number;
      this.tail.count++;
    } else {
      // console.log("Add node");
      const node = new UnrolledLinkedListNode(this.nodeCapacity);
      let j = 0;
      for (
        let i = Math.floor(this.tail.count / 2 + 1);
        i < this.tail.count;
        i++, j++
      ) {
        console.log(
          `Swap element at index ${i} from tail array to index ${j} on new node array`,
          this.tail.array[i]
        );

        // Perform swap
        [this.tail.array[i], node.array[j]] = [
          node.array[j],
          this.tail.array[i],
        ];
      }

      node.array[j++] = number;
      node.count = j;
      this.tail.count = Math.floor(this.tail.count / 2 + 1);
      this.tail.next = node;
      this.tail = node;
    }
  }
}

const n = 5;
const list = new UnrolledLinkedList(n);

console.log(list);

[90, 3, 12, 43, 88, 94, 15, 7, 67, 74, 85, 48].forEach((n: number) => {
  list.add(n);
});

console.log(list.head?.count, list.head?.array);
console.log(list.head?.next?.count, list.head?.next?.array);
console.log(list.head?.next?.next?.count, list.head?.next?.next?.array);
console.log(
  list.head?.next?.next?.next?.count,
  list.head?.next?.next?.next?.array
);
