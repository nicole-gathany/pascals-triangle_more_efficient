function multiplicationTable(row, col) {
  //your code here
  //columns is the number of indexes
  //rows is the number of arrays
  let result = [];
  let base = [];
  for (let i = 1; i <= col; i++) {
    base.push(i);
  }
  console.log(base);
  for (let i = 1; i <= row; i++) {
    result.push(base.map(a => a * i));
  }

  return result;
}

console.log(multiplicationTable(2, 2)); // + " should be [[1,2],[2,4]]")
console.log(multiplicationTable(3, 3)); // + " should be [[1,2,3],[2,4,6],[3,6,9]]")
console.log(multiplicationTable(3, 4)); // + " should be [[1,2,3,4],[2,4,6,8],[3,6,9,12]]")
console.log(multiplicationTable(4, 4)); // + " should be [[1,2,3,4],[2,4,6,8],[3,6,9,12],[4,8,12,16]]")
console.log(multiplicationTable(2, 5)); // + " should be [[1,2,3,4,5],[2,4,6,8,10]]")
