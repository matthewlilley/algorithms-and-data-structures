# Heapsort

In computer science, heapsort is a comparison-based sorting algorithm. Heapsort can be thought of as an improved selection sort: like selection sort, heapsort divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element from it and inserting it into the sorted region. Unlike selection sort, heapsort does not waste time with a linear-time scan of the unsorted region; rather, heap sort maintains the unsorted region in a heap data structure to more quickly find the largest element in each step. [Wikipedia](https://en.wikipedia.org/wiki/Heapsort)

<table>
  <tbody align="left">
    <tr>
      <th colspan="3">Time Complexity</th>
      <th>Space Complexity</th>
    </tr>
    <tr>
      <th>Best</th>
      <th>Average</th>
      <th>Worst</th>
      <th>Worst</th>
    </tr>
    <tr>
      <td><code class="orange">Ω(n log(n))</code></td>
      <td><code class="orange">Θ(n log(n))</code></td>
      <td><code class="orange">O(n log(n))</code></td>
      <td><code class="green">O(1)</code></td>
    </tr>
  </tbody>
</table>

[Big-O Cheat Sheet](https://www.bigocheatsheet.com)
