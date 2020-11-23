export class Node {
  isLeaf: boolean = false;
  children: Node[];
  constructor(n: number) {
    this.children = new Array(n).fill(null);
  }
}

function add(root: Node, string: string) {
  let tmp = root;
  for (const c of string.toLowerCase()) {
    const index = c.charCodeAt(0) - 97;
    if (!tmp.children[index]) {
      tmp.children[index] = new Node(26);
    }
    tmp = tmp.children[index];
  }
  tmp.isLeaf = true;
}

function find(root: Node, string: string) {
  let tmp = root;
  for (const c of string.toLowerCase()) {
    const index = c.charCodeAt(0) - 97;

    tmp = tmp.children[index];

    if (!tmp) {
      return false;
    }
  }

  return tmp.isLeaf;
}

const decoder = new TextDecoder("utf-8");
// Dictionary used taken from
// wget https://cdn.cs50.net/2019/fall/psets/5/speller/speller.zip
const data = await Deno.readFile("./dictionary");

const root = new Node(26);

// Load a dictionary
for (const line of decoder.decode(data).split("\n")) {
  add(root, line);
}

console.log(find(root, "hello"));
