document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scrolling
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Typing Effect
    const words = ["Pawan Simha ", "a Web Developer ", "a Chess Enthusiast!", "a Neophile!"];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;
    const typingElement = document.querySelector(".typing-effect");

    function type() {
        if (isDeleting) {
            currentWord = words[i].substring(0, j--);
        } else {
            currentWord = words[i].substring(0, j++);
        }

        typingElement.textContent = currentWord;

        if (!isDeleting && j === words[i].length) {
            isDeleting = true;
            setTimeout(type, 1000);
        } else if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }

    type();
});