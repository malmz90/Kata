const replaceVowel = (string) => {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    let char = string[i].toLowerCase();
    if (char === "a") {
      newString += "1";
    } else if (char === "e") {
      newString += "2";
    } else if (char === "i") {
      newString += "3";
    } else if (char === "o") {
      newString += "4";
    } else if (char === "u") {
      newString += "5";
    } else {
      newString += char;
    }
  }
  return newString;
};

console.log(replaceVowel("chEmBur"));
