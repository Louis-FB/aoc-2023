import { readFileSync } from "node:fs";

const elves = readFileSync("../data/input.txt", { encoding: "utf-8" })
  .trim()
  .split("\n");

const newArray = [];
const loop = () => {
  for (let i = 0; i < elves.length; i++) {
    let matches = elves[i].match(/\d/g);
    if (matches.length < 2) {
      let newVal = matches[0] + matches[0];
      newArray.push(parseInt(newVal));
    } else {
      const lastMarch = matches.length;
      let newVal = matches[0] + matches[lastMarch - 1];
      newArray.push(parseInt(newVal));
    }
  }
  const total = newArray.reduce((acc, cur) => acc + cur);
  console.log(total);
};
loop();
