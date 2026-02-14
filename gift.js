function gift(n) {
    let text = "";

    if (n === 1) text = "These roses are for you 🌹 but you're more beautiful ❤️";
    if (n === 2) text = "Your eyes are enough to fall for you❤️";
    if (n === 3) text = "I really like your smile... more than you think 😌❤️";

    type(text);
    confetti();
}

// typing
function type(text) {
    let i = 0;
    let el = document.getElementById("giftText");
    el.innerHTML = "";

    function t() {
        if (i < text.length) {
            el.innerHTML += text[i];
            i++;
            setTimeout(t, 40);
        }
    }
    t();
}

// Confetti
function confetti() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let pieces = [];

    for (let i = 0; i < 100; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 5,
            speed: Math.random() * 3 + 1
        });
    }

    function draw() {
        ctx.clearRect(0,0,canvas.width,canvas.height);

        pieces.forEach(p => {
            ctx.fillStyle = "pink";
            ctx.fillRect(p.x, p.y, p.size, p.size);
            p.y += p.speed;

            if (p.y > canvas.height) p.y = 0;
        });

        requestAnimationFrame(draw);
    }

    draw();
}