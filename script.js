// Typing text
let text = "Will you go out with me someday?";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text[i];
        i++;
        setTimeout(typing, 60);
    }
}

typing();

// YES → gift page + confetti
function yes() {
    window.location = "gift.html";
}

// NO button runs away
function moveNo() {
    let btn = document.getElementById("noBtn");
    btn.style.left = Math.random() * window.innerWidth + "px";
    btn.style.top = Math.random() * window.innerHeight + "px";
}

// Floating hearts
setInterval(() => {
    let heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}, 300);