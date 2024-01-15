import { readFileSync } from "node:fs";

const games = readFileSync("../data/input2.txt", { encoding: "utf-8" })
  .trim()
  .split("\n");

const unplayableGames = [];
const totalGames = [];

const showGames = () => {
  for (let i = 0; i < games.length; i++) {
    totalGames.push(i + 1);
    const rows = games[i].split(":")[1].trim();

    const sets = rows.split("; ");
    sets.forEach((e) => {
      let handful = e.split(", ");
      handful.forEach((h) => {
        let dice = h.split(" ");
        if (unplayableGames.includes(i + 1)) {
          return;
        } else if (
          (dice[1] == "red" && dice[0] > 12) ||
          (dice[1] == "green" && dice[0] > 13) ||
          (dice[1] == "blue" && dice[0] > 14)
        ) {
          unplayableGames.push(i + 1);
        }
      });
    });
  }
  const playableGames = totalGames.filter(
    (game) => !unplayableGames.includes(game)
  );

  const total = playableGames.reduce((acc, cur) => acc + cur);
  console.log(total);
};
showGames();
