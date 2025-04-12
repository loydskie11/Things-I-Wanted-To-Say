const emojis = document.querySelectorAll('.emoji');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modalMessage');

emojis.forEach(emoji => {
    emoji.addEventListener('click', () => {
        const message = emoji.getAttribute('data-message');
        modalMessage.textContent = message;
        modal.style.display = 'block';
    });
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

document.querySelectorAll('.emoji').forEach(emoji => {
    const delay = (Math.random() * 4).toFixed(2);
    const top = Math.random() * 90;
    const left = Math.random() * 90;
    emoji.style.animationDelay = `${delay}s`;
    emoji.style.top = `${top}%`;
    emoji.style.left = `${left}%`;
});