export interface Graph<X, Y, V> {
  verticies: Map<X, V | undefined>;
  edges: Map<X | Y, Map<Y | X, V | undefined>>;
  adjacent(x: X, y: Y): boolean;
  neighbors(x: X): Map<Y, V>;
  addVertex(x: X): void;
  removeVertex(x: X): void;
  getVertexValue(x: X): V;
  setVertexValue(x: X, v: V): void;
  addEdge(x: X, y: Y): void;
  removeEdge(x: X, y: Y): void;
}

export class Graph<X, Y, V> implements Graph<X, Y, V> {
  verticies: Map<X, V | undefined> = new Map();
  edges: Map<X | Y, Map<Y | X, V | undefined>> = new Map();
  adjacent(x: X, y: Y) {
    return this.edges.get(x)?.has(y);
  }
  neighbors(x: X) {
    return this.edges.get(x);
  }
  addVertex(x: X) {
    this.verticies.set(x, undefined);
    if (!this.edges.has(x)) {
      this.edges.set(x, new Map());
    }
  }
  removeVertex(x: X) {
    // Remove vertex
    this.verticies.delete(x);

    // Remove edges for x
    this.edges.delete(x);

    // Iterate over edges for other verticies and remove x if found.
    for (const edge of this.edges.values()) {
      if (edge.has(x)) {
        edge.delete(x);
      }
    }
  }
  getVertexValue(x: X) {
    return this.verticies.get(x);
  }
  setVertexValue(x: X, v: V) {
    this.verticies.set(x, v);
  }
  addEdge(x: X, y: Y) {
    // TODO: Add case for Undirected/Bi-directional
    this.edges.get(x)?.set(y, undefined);

    this.edges.get(y)?.set(x, undefined);
  }
  removeEdge(x: X, y: Y) {
    this.edges.get(x)?.delete(y);

    this.edges.get(y)?.delete(x);
  }
  getEdgeValue(x: X, y: Y) {
    return this.edges.get(x)?.get(y);
  }
  setEdgeValue(x: X, y: Y, v: V) {
    return this.edges.get(x)?.set(y, v);
  }
}
