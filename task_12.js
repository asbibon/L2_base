function longest(arr, n) {
  let sorted = arr.slice().sort((a, b) => b.length - a.length || arr.indexOf(a) - arr.indexOf(b));
  return sorted[n - 1];
}
