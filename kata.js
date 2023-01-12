let word = "s9hOrt4CAKE";
let upper = "";
let lower = "";
let number = 0;
function reorder(word) {
  for (let char of word) {
    if (char >= "A" && char <= "Z") {
      upper += char;
    } else if (char >= "a" && char <= "z") {
      lower += char;
    } else {
      number += char;
    }
  }

  let result = upper.concat(lower + number);
  return result;
}

console.log(reorder(word));
