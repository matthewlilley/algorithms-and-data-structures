class Node {
  key: number;
  forward: Node[];
  constructor(key: number, level: number) {
    this.key = key;
    this.forward = Array(level).fill(undefined);
  }
}

export class SkipList {
  maximumLevel: number;
  level: number;
  probability: number;
  head: Node;
  constructor(maximumLevel: number, probability: number) {
    this.maximumLevel = maximumLevel;
    this.probability = probability;
    this.head = new Node(-1, maximumLevel);
    this.level = 0;
  }
  randomLevel() {
    let level = 0;
    while (Math.random() < this.probability && level < this.maximumLevel) {
      level += 1;
    }
    return level;
  }
  insert(key: number) {
    const update = Array(this.maximumLevel + 1).fill(undefined);
    let node = this.head;

    for (let i = this.level; i >= 0; i--) {
      while (node.forward[i] && node.forward[i].key < key) {
        node = node.forward[i];
      }
      update[i] = node;
    }

    node = node.forward[0];

    if (node === undefined || node.key !== key) {
      const randomLevel = this.randomLevel();

      if (randomLevel > this.level) {
        for (let i = this.level + 1; i < randomLevel + 1; i++)
          update[i] = this.head;

        this.level = randomLevel;
      }

      const n = new Node(key, randomLevel);

      for (let i = 0; i <= randomLevel; i++) {
        n.forward[i] = update[i].forward[i];
        update[i].forward[i] = n;
      }
    }

    console.log(`Successfully inserted key ${key}`);
  }
  find(key: number) {
    let node = this.head;

    for (let i = level; i >= 0; i--) {
      while (node.forward[i] && node.forward[i].key < key) {
        node = node.forward[i];
      }
    }

    node = node.forward[0];

    if (node && node.key === key) {
      console.log(`Found key: ${key}`);
    }
  }
  delete(key: number) {
    let node = this.head;
    let update = Array(this.maximumLevel + 1);

    for (let i = level; i >= 0; i--) {
      while (node.forward[i] !== undefined && node.forward[i].key < key) {
        node = node.forward[i];
      }

      update[i] = node;
    }

    node = node.forward[0];

    if (node !== undefined && node.key === key) {
      for (let i = 0; i <= level; i++) {
        if (update[i].forward[i] !== node) {
          break;
        }

        update[i].forward[i] = node.forward[i];
      }

      // Remove levels having no elements
      while (this.level > 0 && this.head.forward[this.level] === undefined) {
        this.level--;
      }

      console.log(`Successfully deleted key ${key}`);
    }
  }
}

const level = 3;

const probability = 0.5;

const list = new SkipList(level, probability);

list.insert(3);
list.insert(6);
list.insert(7);
list.insert(9);
list.insert(12);
list.insert(19);
list.insert(17);
list.insert(26);
list.insert(21);
list.insert(25);

list.find(19);
list.delete(19);

for (let i = 0; i <= level; i++) {
  let node = list.head.forward[i];
  let text = `Level ${i}: `;
  while (node) {
    text = text.concat(`${node.key} `);
    node = node.forward[i];
  }
  console.log(text);
}
