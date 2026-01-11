const btn = document.getElementById('btn');
const tickets = [];
for (let i = 0; i < 100; i++) {
    tickets.push(i);
}
function draw(winnerCount) {
    if (winnerCount > tickets.length) {
        throw new Error("Winner count can't exceed the total tickets.");
    }

    // Make a copy so original order is preserved
    const shuffled = [...tickets];

    // Fisher–Yates shuffle
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        console.log(j);
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, winnerCount);
}
btn.addEventListener('click', () => {
    console.log(draw(3));
});
