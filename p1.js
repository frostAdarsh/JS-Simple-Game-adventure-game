const prompt = require("prompt-sync")();
const name = prompt("what is your name? ");
console.log(`Hello ${name}, welcome to our game`);

const shouldWePlay = prompt("Do you want to play ?").toLocaleLowerCase();

if (shouldWePlay === "yes") {
  console.log("\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Okay we will play 😁");
  console.log("\xa0");
  const leftOrRight = prompt(
    "You enter a maze,do you want to go left or right ?"
  ).toLocaleLowerCase();
  if (leftOrRight === "left") {
    console.log("\xa0\xa0\xa0\xa0\xa0\xa0you go left and see a bridge.....😊");
    const cross = prompt(
      "Do you want to cross the bridge ?"
    ).toLocaleLowerCase();
    if (cross === "yes") {
      console.log("\xa0\xa0\xa0\xa0\xa0you win the game...🏆🥇 ");
    } else {
      console.log("\xa0\xa0\xa0\xa0\xa0\xa0you lose the game...😭 ");
    }
  } else {
    console.log("You go Right and fall off a cliff....! 👻");
  }
} else if (shouldWePlay === "no") {
  console.log("Okay 🥹");
} else {
  console.log("Invalid input ... 😵‍💫");
}
