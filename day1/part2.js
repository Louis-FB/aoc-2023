import { readFileSync } from "node:fs";

// Import the file and arrayifies
const elves = readFileSync("../data/input.txt", { encoding: "utf-8" })
  .trim()
  .split("\n");

// Create empty array to contain values
const newArray = [];

// Parse words to numbers
function numberParser(num) {
  if (num == "one" || num == "1") {
    return "1";
  } else if (num == "two" || num == "2") {
    return "2";
  } else if (num == "three" || num == "3") {
    return "3";
  } else if (num == "four" || num == "4") {
    return "4";
  } else if (num == "five" || num == "5") {
    return "5";
  } else if (num == "six" || num == "6") {
    return "6";
  } else if (num == "seven" || num == "7") {
    return "7";
  } else if (num == "eight" || num == "8") {
    return "8";
  } else if (num == "nine" || num == "9") {
    return "9";
  }
}

// Loop through each line of the file
const loopElves = () => {
  for (let i = 0; i < elves.length; i++) {
    // Match either based on integer or words

    const expression = new RegExp(
      /(?:one|two|three|four|five|six|seven|eight|nine|\d)/g
    );

    const reversedExpression = new RegExp(
      /(?:eno|owt|eerht|ruof|evif|xis|neves|thgie|enin|\d)/g
    );

    const reversedElves = elves[i].split("").reverse().join("");

    const matches1 = elves[i].match(expression);
    const matches2 = reversedElves.match(reversedExpression);

    const newVal =
      numberParser(matches1[0]) +
      numberParser(matches2[0].split("").reverse().join(""));
    newArray.push(parseInt(newVal));
  }
  // Add up the total
  const total = newArray.reduce((acc, cur) => acc + cur);
  console.log(total);
};
loopElves();
