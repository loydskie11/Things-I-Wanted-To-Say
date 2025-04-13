const emojis = document.querySelectorAll('.emoji');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modalMessage');
const closeBtn = document.getElementById('closeBtn');
const audio = document.getElementById('bg-music');
const icon = document.getElementById('music-icon');

emojis.forEach(emoji => {
    emoji.addEventListener('click', () => {
        const message = emoji.getAttribute('data-message');
        modalMessage.textContent = message;
        modal.style.display = 'block';
    });
});

function shuffleEmojis() {
    document.querySelectorAll('.emoji').forEach(emoji => {
        const delay = (Math.random() * 4).toFixed(2);
        const top = Math.random() * 90;
        const left = Math.random() * 90;
        emoji.style.animationDelay = `${delay}s`;
        emoji.style.top = `${top}%`;
        emoji.style.left = `${left}%`;
    });
};

window.addEventListener('load', shuffleEmojis);

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})


icon.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        icon.src = 'assets/pause.png';
    } else {
        audio.pause();
        icon.src = 'assets/play.png';
    }
});