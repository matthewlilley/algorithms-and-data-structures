# Skip List

In computer science, a skip list is a data structure that allows Θ(log(n)) search complexity as well as Θ(log(n)) insertion complexity within an ordered sequence of n elements. Thus it can get the best features of an array (for searching) while maintaining a linked list-like structure that allows insertion, which is not possible in an array. [Wikipedia](https://en.wikipedia.org/wiki/Skip_list)


[A Skip List Cookbook](https://cglab.ca/~morin/teaching/5408/refs/p90b.pdf)


<table>
  <tbody align="left">
    <tr>
      <th colspan="8">Time Complexity</th>
      <th>Space Complexity</th>
    </tr>
    <tr>
      <th colspan="4">Average</th>
      <th colspan="4">Worst</th>
      <th>Worst</th>
    </tr>
    <tr>
      <th>Access</th>
      <th>Search</th>
      <th>Insertion</th>
      <th>Deletion</th>
      <th>Access</th>
      <th>Search</th>
      <th>Insertion</th>
      <th>Deletion</th>
      <th></th>
    </tr>
    <tr>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="orange">O(n log(n))</code></td>
    </tr>
  </tbody>
</table>

[Big-O Cheat Sheet](https://www.bigocheatsheet.com)
