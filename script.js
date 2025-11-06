// Game State
let credits = 100;
let bet = 10;
let isSpinning = false;

// Symbols and their values
const symbols = ['🍒', '🔔', '💎', '⭐', '7️⃣', '🍀', '👑'];

const payouts = {
    '👑': 100,
    '7️⃣': 50,
    '💎': 25,
    '🔔': 15,
    '⭐': 10,
    '🍀': 8,
    '🍒': 5
};

// DOM Elements
const creditsDisplay = document.getElementById('credits');
const betDisplay = document.getElementById('bet');
const winDisplay = document.getElementById('win');
const spinButton = document.getElementById('spinButton');
const betUpButton = document.getElementById('betUp');
const betDownButton = document.getElementById('betDown');
const messageDisplay = document.getElementById('message');
const lever = document.getElementById('lever');
const winLine = document.querySelector('.win-line');
const reels = [
    document.getElementById('reel1'),
    document.getElementById('reel2'),
    document.getElementById('reel3')
];

// Initialize
updateDisplays();
showMessage('Good luck! Pull the lever or press SPIN!');

// Event Listeners
spinButton.addEventListener('click', spin);
betUpButton.addEventListener('click', increaseBet);
betDownButton.addEventListener('click', decreaseBet);
lever.addEventListener('click', pullLever);

// Functions
function updateDisplays() {
    creditsDisplay.textContent = credits;
    betDisplay.textContent = bet;

    // Disable spin if not enough credits
    if (credits < bet) {
        spinButton.disabled = true;
        showMessage('Not enough credits! Game Over!');
    } else {
        spinButton.disabled = false;
    }
}

function increaseBet() {
    if (bet < 50 && bet < credits) {
        bet += 10;
        betDisplay.textContent = bet;
        updateDisplays();
    }
}

function decreaseBet() {
    if (bet > 10) {
        bet -= 10;
        betDisplay.textContent = bet;
        updateDisplays();
    }
}

function showMessage(message, isWin = false) {
    messageDisplay.textContent = message;
    if (isWin) {
        messageDisplay.style.color = '#00ff00';
        messageDisplay.style.textShadow = '0 0 20px rgba(0, 255, 0, 0.8)';
    } else {
        messageDisplay.style.color = '#ffd700';
        messageDisplay.style.textShadow = 'none';
    }
}

function pullLever() {
    if (!isSpinning && credits >= bet) {
        lever.classList.add('pulled');
        setTimeout(() => {
            lever.classList.remove('pulled');
            spin();
        }, 300);
    }
}

async function spin() {
    if (isSpinning || credits < bet) return;

    isSpinning = true;
    spinButton.disabled = true;
    winDisplay.textContent = '0';
    winLine.classList.remove('active');
    document.querySelector('.slot-machine').classList.remove('jackpot');

    // Deduct bet
    credits -= bet;
    updateDisplays();
    showMessage('Spinning...');

    // Spin each reel
    const spinPromises = reels.map((reel, index) => {
        return spinReel(reel, index);
    });

    // Wait for all reels to finish
    const results = await Promise.all(spinPromises);

    // Check for wins
    checkWin(results);

    isSpinning = false;
    updateDisplays();
}

function spinReel(reel, reelIndex) {
    return new Promise((resolve) => {
        // Random number of spins (3-5 full rotations)
        const rotations = 3 + Math.floor(Math.random() * 3);
        const totalSymbols = symbols.length;

        // Random final position (which symbol to land on)
        const finalPosition = Math.floor(Math.random() * totalSymbols);

        // Calculate total distance to travel
        const symbolHeight = 66.67; // Height of each symbol
        const totalDistance = (rotations * totalSymbols * symbolHeight) + (finalPosition * symbolHeight);

        let currentDistance = 0;
        const spinDuration = 2000 + (reelIndex * 500); // Each reel stops at different times
        const startTime = Date.now();

        const animateReel = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / spinDuration, 1);

            // Easing function for smooth deceleration
            const easeOut = 1 - Math.pow(1 - progress, 3);
            currentDistance = totalDistance * easeOut;

            // Apply position (wrapping around for infinite scroll effect)
            const position = -(currentDistance % (totalSymbols * symbolHeight));
            reel.style.top = position + 'px';

            if (progress < 1) {
                requestAnimationFrame(animateReel);
            } else {
                // Snap to final position
                const snapPosition = -(finalPosition * symbolHeight);
                reel.style.top = snapPosition + 'px';

                // Get the middle symbol (the one that counts)
                const middleSymbolIndex = (finalPosition + 1) % totalSymbols;
                const resultSymbol = symbols[middleSymbolIndex];
                resolve(resultSymbol);
            }
        };

        requestAnimationFrame(animateReel);
    });
}

function checkWin(results) {
    const [symbol1, symbol2, symbol3] = results;
    let winAmount = 0;
    let message = '';

    // Check for three matching symbols
    if (symbol1 === symbol2 && symbol2 === symbol3) {
        const multiplier = payouts[symbol1];
        winAmount = bet * multiplier;

        if (symbol1 === '👑') {
            message = `👑 ROYAL JACKPOT! YOU WIN ${winAmount} CREDITS! 👑`;
            document.querySelector('.slot-machine').classList.add('jackpot');
        } else if (symbol1 === '7️⃣') {
            message = `🎰 LUCKY SEVENS! YOU WIN ${winAmount} CREDITS! 🎰`;
        } else {
            message = `🎉 THREE ${symbol1}! YOU WIN ${winAmount} CREDITS! 🎉`;
        }

        winLine.classList.add('active');
        triggerWinAnimation();
    }
    // Special case: Any two cherries
    else if (symbol1 === '🍒' && symbol2 === '🍒' ||
             symbol2 === '🍒' && symbol3 === '🍒' ||
             symbol1 === '🍒' && symbol3 === '🍒') {
        winAmount = bet * 2;
        message = `🍒 Two Cherries! You win ${winAmount} credits! 🍒`;
        winLine.classList.add('active');
    }
    // No win
    else {
        message = 'No match. Try again!';
    }

    if (winAmount > 0) {
        credits += winAmount;
        winDisplay.textContent = winAmount;
        showMessage(message, true);

        // Visual feedback
        setTimeout(() => {
            winLine.classList.remove('active');
        }, 3000);
    } else {
        showMessage(message);
    }

    updateDisplays();
}

function triggerWinAnimation() {
    // Add win animation to reel wrappers
    const reelWrappers = document.querySelectorAll('.reel-wrapper');
    reelWrappers.forEach(wrapper => {
        wrapper.classList.add('win-animation');
    });

    setTimeout(() => {
        reelWrappers.forEach(wrapper => {
            wrapper.classList.remove('win-animation');
        });
    }, 2000);
}

// Keyboard controls
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !isSpinning && credits >= bet) {
        e.preventDefault();
        spin();
    } else if (e.code === 'ArrowUp') {
        e.preventDefault();
        increaseBet();
    } else if (e.code === 'ArrowDown') {
        e.preventDefault();
        decreaseBet();
    }
});

// Add some randomization to initial reel positions
reels.forEach((reel, index) => {
    const randomOffset = Math.floor(Math.random() * symbols.length) * 66.67;
    reel.style.top = `-${randomOffset}px`;
});
