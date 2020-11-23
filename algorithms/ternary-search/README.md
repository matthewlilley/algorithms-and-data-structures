# Ternary Search

A ternary search algorithm is a technique in computer science for finding the minimum or maximum of a unimodal function. A ternary search determines either that the minimum or maximum cannot be in the first third of the domain or that it cannot be in the last third of the domain, then repeats on the remaining two thirds. A ternary search is an example of a divide and conquer algorithm. [Wikipedia](https://en.wikipedia.org/wiki/Ternary_search)

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
