import { readFileSync } from "node:fs";

const elves = readFileSync("../data/input.txt", { encoding: "utf-8" })
  .trim()
  .split("\n");

const newArray = [];

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

const loopElves = () => {
  for (let i = 0; i < elves.length; i++) {
    let matches = elves[i].match(
      /(?:one|two|three|four|five|six|seven|eight|nine|\d)/g
    );
    // console.log(`All matches: ${matches}`);
    if (matches.length === 1) {
      let newVal = numberParser(matches[0]) + numberParser(matches[0]);
      newArray.push(parseInt(newVal));
    } else {
      let newVal =
        numberParser(matches[0]) + numberParser(matches[matches.length - 1]);
      newArray.push(parseInt(newVal));
    }
  }
  const total = newArray.reduce((acc, cur) => acc + cur);
  console.log(total);
};
loopElves();
