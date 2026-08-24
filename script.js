/* =========================================================
   SOMETHING FOR YOU ♡
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const website =
    document.querySelector(".website");


const openButton =
    document.getElementById("openButton");


const findButton =
    document.getElementById("findButton");


const letterButton =
    document.getElementById("letterButton");


const envelope =
    document.getElementById("envelope");


const finalButton =
    document.getElementById("finalButton");


const prankText =
    document.getElementById("prankText");


const letterTextElement =
    document.getElementById("letterText");


const letterHint =
    document.getElementById("letterHint");


const particleContainer =
    document.getElementById("particles");


/* =========================================================
   PAGES
========================================================= */

const pages = {

    opening:
        document.getElementById("opening"),

    prank:
        document.getElementById("prank"),

    bouquet:
        document.getElementById("bouquet"),

    letter:
        document.getElementById("letter"),

    final:
        document.getElementById("final")

};


const pagesArray =
    Object.values(pages);


/* =========================================================
   CURRENT PAGE
========================================================= */

let currentPage = 0;


/* =========================================================
   INITIAL PAGE
========================================================= */

pagesArray.forEach(
    (page, index) => {

        page.classList.remove(
            "active"
        );


        if (index === 0) {

            page.classList.add(
                "active"
            );

        }

    }
);


/* =========================================================
   GO TO PAGE
========================================================= */

function goToPage(targetPage) {

    const targetIndex =
        pagesArray.indexOf(
            targetPage
        );


    if (targetIndex === -1) {
        return;
    }


    if (targetIndex === currentPage) {
        return;
    }


    const current =
        pagesArray[currentPage];


    const target =
        pagesArray[targetIndex];


    const direction =
        targetIndex > currentPage
            ? 1
            : -1;


    target.style.transform =
        `translateY(${direction * 35}px) scale(.985)`;


    target.style.visibility =
        "visible";


    target.style.opacity =
        "0";


    target.style.zIndex =
        "6";


    target.offsetHeight;


    current.style.opacity =
        "0";


    current.style.transform =
        `translateY(${-direction * 35}px) scale(.985)`;


    target.style.opacity =
        "1";


    target.style.transform =
        "translateY(0) scale(1)";


    target.classList.add(
        "active"
    );


    currentPage =
        targetIndex;


    setTimeout(
        () => {

            current.classList.remove(
                "active"
            );

            current.style.visibility =
                "hidden";

            current.style.opacity =
                "";

            current.style.transform =
                "";

            current.style.zIndex =
                "";

        },
        850
    );


    handlePageEnter(
        targetPage
    );
}


/* =========================================================
   PAGE ENTER
========================================================= */

function handlePageEnter(page) {


    if (
        page === pages.prank
    ) {

        prankText.textContent =
            "...or is it?";

    }


    if (
        page === pages.final
    ) {

        createFinalHearts();

    }

}


/* =========================================================
   OPENING
========================================================= */

if (openButton) {

    openButton.addEventListener(
        "click",
        () => {

            goToPage(
                pages.prank
            );

        }
    );

}


/* =========================================================
   PRANK
========================================================= */

if (findButton) {

    findButton.addEventListener(
        "click",
        () => {

            goToPage(
                pages.bouquet
            );

        }
    );

}


/* =========================================================
   BOUQUET
========================================================= */

if (letterButton) {

    letterButton.addEventListener(
        "click",
        () => {

            goToPage(
                pages.letter
            );

        }
    );

}


/* =========================================================
   LOVE LETTER
========================================================= */

let envelopeOpened =
    false;


const message = `terima kasih telah hadir dan mewarnai hidupku yang dulunya gelap sekarang cerah karna kehadiran sosok seperti mu, bertemu denganmu adalah salah satu keberuntungan yang tidak bisa aku deskripsikan,kamu adalah slah satu bentuk bahagia yg selama ini aku impikan, aku sangat bersyukur karena bisa pertemukan dengan manusia seperti mu, jika bukan karena kamu aku tidak akan pernah tau bahwa aku masih pernah ternilai jika dihitung, aku ingin mengucapkan terimakasih, terimakasih karena telah sabar menghadapi ku, terimakasih karena telah menerima ku dengan apa adanya, terimakasih telah menguatkan ku dalam segala hal yg membuat ku patah, dan terimakasih juga karena kamu telah menjadi support sistem terbaik dalam hidupku.  ♡`;


/* =========================================================
   TYPEWRITER
========================================================= */

function typeLetter() {

    if (!letterTextElement) {
        return;
    }


    let index = 0;


    letterTextElement.textContent =
        "";


    function type() {

        if (
            index <
            message.length
        ) {

            letterTextElement.textContent +=
                message[index];


            index++;


            setTimeout(
                type,
                35
            );

        }

    }


    type();

}


/* =========================================================
   OPEN ENVELOPE
========================================================= */

if (envelope) {

    envelope.addEventListener(
        "click",
        openEnvelope
    );


    envelope.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                openEnvelope();

            }

        }
    );

}


function openEnvelope() {

    if (envelopeOpened) {
        return;
    }


    envelopeOpened =
        true;


    envelope.classList.add(
        "opened"
    );


    if (letterHint) {

        letterHint.textContent =
            "a little letter, just for you";

    }


    setTimeout(
        () => {

            typeLetter();

        },
        800
    );


    const estimatedTime =
        message.length * 35;


    setTimeout(
        () => {

            if (!finalButton) {
                return;
            }


            finalButton.classList.remove(
                "hidden"
            );


            finalButton.style.display =
                "inline-flex";


            requestAnimationFrame(
                () => {

                    finalButton.style.opacity =
                        "1";

                    finalButton.style.transform =
                        "translateY(0)";

                }
            );

        },
        estimatedTime + 1500
    );

}


/* =========================================================
   FINAL BUTTON
========================================================= */

if (finalButton) {

    finalButton.addEventListener(
        "click",
        () => {

            goToPage(
                pages.final
            );

        }
    );

}


/* =========================================================
   PARTICLES
========================================================= */

const symbols = [

    "✦",
    "✧",
    "·",
    "♡"

];


function createParticle() {

    if (!particleContainer) {
        return;
    }


    const particle =
        document.createElement(
            "span"
        );


    particle.className =
        "particle";


    particle.textContent =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];


    particle.style.left =
        Math.random() * 100 +
        "%";


    particle.style.fontSize =
        (
            7 +
            Math.random() * 10
        ) +
        "px";


    particle.style.animationDuration =
        (
            8 +
            Math.random() * 8
        ) +
        "s";


    particle.style.animationDelay =
        (
            Math.random() * 5
        ) +
        "s";


    particleContainer.appendChild(
        particle
    );


    setTimeout(
        () => {

            particle.remove();

        },
        18000
    );

}


/* INITIAL PARTICLES */

for (
    let i = 0;
    i < 20;
    i++
) {

    createParticle();

}


/* CONTINUOUS */

setInterval(
    createParticle,
    900
);


/* =========================================================
   MOBILE SWIPE
========================================================= */

let touchStartY =
    0;


let touchEndY =
    0;


if (website) {

    website.addEventListener(
        "touchstart",
        (event) => {

            touchStartY =
                event.touches[0].clientY;

        },
        {
            passive: true
        }
    );


    website.addEventListener(
        "touchend",
        (event) => {

            touchEndY =
                event.changedTouches[0].clientY;


            handleSwipe();

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   HANDLE SWIPE
========================================================= */

function handleSwipe() {

    const difference =
        touchStartY -
        touchEndY;


    if (
        Math.abs(difference) < 70
    ) {

        return;

    }


    if (
        difference > 70
    ) {

        scrollNext();

        return;

    }


    if (
        difference < -70
    ) {

        scrollPrevious();

    }

}


/* =========================================================
   NEXT
========================================================= */

function scrollNext() {

    if (
        currentPage <
        pagesArray.length - 1
    ) {

        goToPage(
            pagesArray[
                currentPage + 1
            ]
        );

    }

}


/* =========================================================
   PREVIOUS
========================================================= */

function scrollPrevious() {

    if (
        currentPage > 0
    ) {

        goToPage(
            pagesArray[
                currentPage - 1
            ]
        );

    }

}


/* =========================================================
   FINAL HEARTS
========================================================= */

function createFinalHearts() {

    const container =
        document.querySelector(
            ".floating-hearts"
        );


    if (!container) {
        return;
    }


    const hearts =
        container.querySelectorAll(
            "span"
        );


    hearts.forEach(
        (heart) => {

            heart.style.animation =
                "none";


            heart.offsetHeight;


            heart.style.animation =
                "";

        }
    );

}


/* =========================================================
   KEYBOARD NAVIGATION
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.target.tagName === "INPUT" ||
            event.target.tagName === "TEXTAREA"
        ) {

            return;

        }


        if (
            event.key === "ArrowDown" ||
            event.key === "ArrowRight"
        ) {

            scrollNext();

        }


        if (
            event.key === "ArrowUp" ||
            event.key === "ArrowLeft"
        ) {

            scrollPrevious();

        }

    }
);