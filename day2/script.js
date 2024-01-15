import { readFileSync } from "node:fs";

const games = readFileSync("../data/test.txt", { encoding: "utf-8" })
  .trim()
  .split("\n");

const unplayableGames = [];
const totalGames = [];

const showGames = () => {
  for (let i = 0; i < games.length; i++) {
    totalGames.push(i + 1);
    // Rows are each entire game, so a row.
    const rows = games[i].split(":")[1].trim();

    // Sets are each individual "play" of the game divided by semicolons.
    const sets = rows.split("; ");
    sets.forEach((set) => {
      // Handfuls are each collection of dice which includes the colour and the count.
      let handful = set.split(", ");
      for (let n = 0; n < handful.length; n++) {
        let subHandful = handful[n].split(" ");
        if (unplayableGames.includes(i + 1)) {
          break;
        } else if (
          (subHandful[n] == "red" && subHandful[n - 1] > 12) ||
          (subHandful[n] == "green" && subHandful[n - 1] > 13) ||
          (subHandful[n] === "blue" && subHandful[n - 1] > 14)
        ) {
          unplayableGames.push(i + 1);
          //   playableGames = totalGames.filter((game) => game === i + 1);
          //   let unplayable = i + 1;
          //   playableGames = totalGames.filter((game) =>
          //     unplayable.includes(game)
          //   );

          //   break;
        }
        // return;
      }
    });
  }
  console.log("Total games:");
  console.log(totalGames);

  console.log("Unplayable games");
  console.log(unplayableGames);
  const playableGames = totalGames.filter(
    (game) => !unplayableGames.includes(game)
  );

  console.log("Total with unplayables removed:");
  console.log(playableGames);
  //   const total = playableGames.reduce((acc, cur) => acc + cur);
  //   console.log(total);
};
showGames();
