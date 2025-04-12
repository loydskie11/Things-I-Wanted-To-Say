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
})