function countBoomerangs(arr) {
  let count = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    console.log("i", arr[i]);
    if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
      count++;
    }
  }
  return count;
}

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]));
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]));
console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]));
