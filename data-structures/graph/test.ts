import { Graph } from "./index.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("adds vertex to verticies map", () => {
  const graph = new Graph();
  graph.addVertex("foo");
  assertEquals(graph.verticies.size, 1);
});

Deno.test("adds edge map for vertex", () => {
  const graph = new Graph();
  graph.addVertex("foo");
  assertEquals(graph.edges.size, 1);
});

Deno.test("adds multiple verticies to verticies map", () => {
  const graph = new Graph();
  for (const vertex of ["foo", "bar", "baz"]) {
    graph.addVertex(vertex);
  }
  assertEquals(graph.verticies.size, 3);
});

Deno.test("adds multiple edge maps for multiple verticies", () => {
  const graph = new Graph();
  for (const vertex of ["foo", "bar", "baz"]) {
    graph.addVertex(vertex);
  }
  assertEquals(graph.edges.size, 3);
});

Deno.test("edge map x set y, and vice versa for bi-directional", () => {
  const graph = new Graph();
  for (const vertex of ["foo", "bar"]) {
    graph.addVertex(vertex);
  }
  graph.addEdge("foo", "bar");
  assertEquals(graph.edges.get("foo")?.has("bar"), true);
  assertEquals(graph.edges.get("bar")?.has("foo"), true);

  assertEquals(graph.adjacent("foo", "bar"), true);
  assertEquals(graph.adjacent("bar", "foo"), true);

  assertEquals(graph.neighbors("foo")?.size, 1);
  assertEquals(graph.neighbors("bar")?.size, 1);
});

Deno.test("edge map x delete y, and vice versa for bi-directional", () => {
  const graph = new Graph();
  for (const vertex of ["foo", "bar"]) {
    graph.addVertex(vertex);
  }
  graph.addEdge("foo", "bar");
  graph.removeEdge("foo", "bar");
  assertEquals(graph.edges.get("foo")?.has("bar"), false);
  assertEquals(graph.edges.get("bar")?.has("foo"), false);

  assertEquals(graph.adjacent("foo", "bar"), false);
  assertEquals(graph.adjacent("bar", "foo"), false);

  assertEquals(graph.neighbors("foo")?.size, 0);
  assertEquals(graph.neighbors("bar")?.size, 0);
});

Deno.test("sets edge value", () => {
  const graph = new Graph();
  for (const vertex of ["foo", "bar"]) {
    graph.addVertex(vertex);
  }
  graph.addEdge("foo", "bar");
  graph.setEdgeValue("foo", "bar", "baz");

  assertEquals(graph.getEdgeValue("foo", "bar"), "baz");
});

Deno.test("sets vertex value", () => {
  const graph = new Graph();
  graph.addVertex("foo");
  graph.setVertexValue("foo", "bar");
  assertEquals(graph.getVertexValue("foo"), "bar");
});
