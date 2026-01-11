const btn = document.getElementById("btn");

const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

function shuffle(cardsArray) {
  const arr = [...cardsArray];
  for (let i = arr.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[random]] = [arr[random], arr[i]];
  }
  return arr;
}

btn.addEventListener("click", () => {
  console.log(shuffle(cards));
});

/* btn.addEventListener("click", () => {
  cards.sort(() => Math.random() - 0.5);
  console.log(cards);
}); */
