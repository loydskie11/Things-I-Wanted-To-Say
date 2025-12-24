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

function validate(event) {
    event.preventDefault();

    const nickname = document.getElementById("Nickname").value.trim().toLowerCase();
    const birthdate = document.getElementById("Birthdate").value;
    const errorDiv = document.getElementById("error-msg");

    if (nickname === "alli" && birthdate === "2007-01-18") {
        window.location.href = "main.html";
    } else {
        errorDiv.textContent = "Incorrect nickname or birthdate.";
        errorDiv.style.visibility = "visible";
        errorDiv.style.opacity = "1";
    }
};