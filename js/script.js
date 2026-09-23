const counters = document.querySelectorAll(".counter");

const counterSection = document.querySelector(".counter-section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                counters.forEach((counter) => {

                    counter.innerText = "0";

                    const target = +counter.getAttribute("data-target");

                    let current = 0;

                    const updateCounter = () => {

                        const increment = target / 100;

                        if (current < target) {

                            current += increment;

                            counter.innerText = Math.ceil(current);

                            setTimeout(updateCounter, 20);

                        } else {

                            counter.innerText = target;
                        }
                    };

                    updateCounter();
                });

            } else {

                // لما نخرج من الجزء يرجع الأرقام لـ 0
                counters.forEach((counter) => {
                    counter.innerText = "0";
                });

            }

        });

    },
    {
        threshold: 0.3
    }
);

observer.observe(counterSection);

// =========================
// Client's Feedback Slider
// =========================

const feedbackCards = document.querySelectorAll(".feedback-card");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showFeedback(index) {

    // إخفاء كل الـ feedback
    feedbackCards.forEach((card) => {
        card.classList.remove("active");
    });

    // إزالة active من كل الدوائر
    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    // إظهار الـ feedback المطلوب
    feedbackCards[index].classList.add("active");

    // تفعيل الدائرة المطلوبة
    dots[index].classList.add("active");

    currentSlide = index;
}


// الضغط على الدوائر
dots.forEach((dot, index) => {

    dot.addEventListener("click", function () {
        showFeedback(index);
    });

});

const readMoreButtons = document.querySelectorAll(".read-more");

readMoreButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const postNumber = button.getAttribute("data-post");

        window.location.href = `blog-details.html?post=${postNumber}`;

    });

});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const errorMessage = document.getElementById("errorMessage");

    if (name === "" || email === "" || subject === "" || message === "") {

        errorMessage.textContent = "Please, leave us a message.";

        return;
    }

    errorMessage.textContent = "";

    alert("Your message has been sent successfully!");

    contactForm.reset();
});