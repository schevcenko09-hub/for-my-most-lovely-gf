function showMessage() {
    const message = document.getElementById("message");

    message.scrollIntoView({
        behavior: "smooth"
    });

    createHearts();
}

function createHearts() {

    for (let i = 0; i < 18; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.className = "floating-heart";
            heart.innerHTML = "♥";

            heart.style.left = Math.random() * 100 + "vw";
            heart.style.fontSize = (12 + Math.random() * 20) + "px";
            heart.style.animationDuration = (5 + Math.random() * 5) + "s";

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 10000);

        }, i * 180);
    }
}

setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "floating-heart";
    heart.innerHTML = "♥";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (10 + Math.random() * 18) + "px";
    heart.style.animationDuration = (7 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);

}, 900);
