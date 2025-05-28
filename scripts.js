// === Scroll-based Fade-In Animations ===
// This feature makes elements with class "fade-in" appear smoothly as the user scrolls.
document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add the "visible" class when in view
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
    });

    faders.forEach((fade) => observer.observe(fade));
});


// === Scroll to Top Button ===
// Shows a button when the user scrolls down, allowing them to return to the top smoothly.
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
    // Display the scroll button when user scrolls 300px down
    scrollBtn.style.display = (document.documentElement.scrollTop > 300) ? "block" : "none";
};

scrollBtn.onclick = () => {
    // Smooth scroll back to top when the button is clicked
    window.scrollTo({ top: 0, behavior: "smooth" });
};


// === Sticky Header Shadow ===
// Adds a shadow to the header when user scrolls, for better depth and navigation visibility.
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 30) {
        header.classList.add("scrolled"); // Add shadow class
    } else {
        header.classList.remove("scrolled"); // Remove shadow class
    }
});


// === Hamburger Menu  ===
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });

        navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("show");
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const popup = document.getElementById("form-success-popup");

    if (form && popup) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Send data using Formspree (AJAX)
            const formData = new FormData(form);
            fetch(form.action, {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" }
            }).then(response => {
                if (response.ok) {
                    popup.classList.add("show");
                    form.reset();

                    setTimeout(() => {
                        popup.classList.remove("show");
                    }, 4000);
                }
            });
        });
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");

    if (cookieBanner && acceptBtn) {
        if (!localStorage.getItem("cookiesAccepted")) {
            cookieBanner.style.display = "flex";
        }

        acceptBtn.addEventListener("click", () => {
            cookieBanner.style.display = "none";
            localStorage.setItem("cookiesAccepted", "true");
        });
    }
});

