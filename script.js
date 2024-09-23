const reels = document.querySelectorAll('.reel');
const spinButton = document.getElementById('spinButton');

const symbols = ['1', '2', '3', '5', '7']; // Add more symbols as needed

spinButton.addEventListener('click', () => {
  reels.forEach(reel => {
    let randomIndex = Math.floor(Math.random() * symbols.length);
    reel.textContent = symbols[randomIndex];
  });
});