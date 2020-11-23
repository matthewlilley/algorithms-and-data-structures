# Binary Search

In computer science, binary search, also known as half-interval search, logarithmic search, or binary chop, is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array. [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)

<table>
  <tbody align="left">
    <tr>
      <th colspan="3">Time Complexity</th>
      <th>Space Complexity</th>
    </tr>
    <tr>
      <th>Average</th>
      <th>Best</th>
      <th>Worst</th>
      <th>Worst</th>
    </tr>
    <tr>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="green">O(1)</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="green">O(1)</code></td>
    </tr>
  </tbody>
</table>
