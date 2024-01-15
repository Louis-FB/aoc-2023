import { readFileSync } from "node:fs";

const games = readFileSync("../data/input2.txt", { encoding: "utf-8" })
  .trim()
  .split("\n");

const cubePowers = [];

const showGames = () => {
  for (let i = 0; i < games.length; i++) {
    let redCubes = [];
    let greenCubes = [];
    let blueCubes = [];
    const rows = games[i].split(":")[1].trim();

    const sets = rows.split("; ");
    sets.forEach((e) => {
      let handful = e.split(", ");
      handful.forEach((h) => {
        let dice = h.split(" ");

        if (dice[1] == "red") {
          redCubes.push(dice[0]);
        } else if (dice[1] == "green") {
          greenCubes.push(dice[0]);
        } else if (dice[1] == "blue") {
          blueCubes.push(dice[0]);
        }
      });
    });

    const gameCubePower =
      Math.max(...redCubes) * Math.max(...blueCubes) * Math.max(...greenCubes);
    cubePowers.push(gameCubePower);
  }
  const total = cubePowers.reduce((acc, cur) => acc + cur);

  console.log(total);
};
showGames();
