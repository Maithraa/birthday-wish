let currentPage = 0;

const pages = document.querySelectorAll(".page");
const song = document.getElementById("birthdaySong");

let musicStarted = false;


// ==========================================
// START MUSIC
// ==========================================

function startMusic() {

    if (!musicStarted) {

        song.play().then(() => {

            musicStarted = true;

        }).catch(() => {

            console.log("Music needs user interaction.");

        });

    }

}



// ==========================================
// OPENING SCREEN → BIRTHDAY REVEAL
// ==========================================

function startBirthday() {

    // Start music
    startMusic();


    // Remove opening page
    pages[currentPage].classList.remove("active");


    // Go to Birthday Reveal
    currentPage = 1;


    pages[currentPage].classList.add("active");


    // Confetti
    createConfetti();


    // Floating hearts
    createHearts();

}



// ==========================================
// NEXT PAGE
// ==========================================

function nextPage() {

    // Start music
    startMusic();


    // Remove current page
    pages[currentPage].classList.remove("active");


    // Move to next page
    currentPage++;


    // Prevent going beyond last page
    if (currentPage >= pages.length) {

        currentPage = pages.length - 1;

    }


    // Show next page
    pages[currentPage].classList.add("active");


    // Floating hearts
    createHearts();

}



// ==========================================
// GIFT BOX OPEN
// ==========================================

function openGift() {

    const giftBox =
        document.getElementById("giftBox");

    const giftHint =
        document.getElementById("giftHint");

    const finalMessage =
        document.getElementById("finalMessage");


    // Open gift animation
    giftBox.classList.add("opened");


    // Hide click text
    giftHint.style.display = "none";


    // Wait for gift animation
    setTimeout(function () {

        // Show final message
        finalMessage.classList.add("show");


        // Confetti
        createConfetti();


        // Floating hearts
        createHearts();

    }, 700);

}



// ==========================================
// CONFETTI EFFECT
// ==========================================

function createConfetti() {

    for (let i = 0; i < 100; i++) {

        const confetti =
            document.createElement("div");


        confetti.classList.add("confetti");


        // Random horizontal position
        confetti.style.left =
            Math.random() * 100 + "vw";


        // Random animation delay
        confetti.style.animationDelay =
            Math.random() * 2 + "s";


        // Random size
        const size =
            6 + Math.random() * 8;

        confetti.style.width =
            size + "px";

        confetti.style.height =
            size * 1.5 + "px";


        // Random colour
        confetti.style.backgroundColor =
            `hsl(${Math.random() * 360}, 80%, 65%)`;


        // Random rotation
        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        // Add to page
        document.body.appendChild(confetti);


        // Remove after animation
        setTimeout(function () {

            confetti.remove();

        }, 5000);

    }

}



// ==========================================
// FLOATING HEARTS
// ==========================================

function createHearts() {

    for (let i = 0; i < 12; i++) {

        const heart =
            document.createElement("div");


        heart.innerHTML = "💗";


        heart.style.position = "fixed";


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.bottom =
            "-30px";


        heart.style.fontSize =
            18 + Math.random() * 20 + "px";


        heart.style.zIndex =
            "9999";


        heart.style.pointerEvents =
            "none";


        document.body.appendChild(heart);


        const animation =
            heart.animate(

                [

                    {
                        transform:
                            "translateY(0) rotate(0deg)",

                        opacity: 1
                    },

                    {
                        transform:
                            "translateY(-100vh) rotate(360deg)",

                        opacity: 0
                    }

                ],

                {

                    duration:
                        3000 + Math.random() * 2000,

                    easing:
                        "ease-out"

                }

            );


        animation.onfinish = () => {

            heart.remove();

        };

    }

}



// ==========================================
// RESTART SURPRISE
// ==========================================

function restart() {

    // Remove current page
    pages[currentPage].classList.remove("active");


    // Go back to opening
    currentPage = 0;


    // Show opening page
    pages[currentPage].classList.add("active");


    // Reset gift box
    const giftBox =
        document.getElementById("giftBox");


    if (giftBox) {

        giftBox.classList.remove("opened");

    }


    // Reset gift hint
    const giftHint =
        document.getElementById("giftHint");


    if (giftHint) {

        giftHint.style.display = "block";

    }


    // Reset final message
    const finalMessage =
        document.getElementById("finalMessage");


    if (finalMessage) {

        finalMessage.classList.remove("show");

    }


    // Floating hearts
    createHearts();

}