// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// ===== Theme Toggle =====
const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");
const savedTheme = localStorage.getItem("luxtime-theme") || "dark";

document.documentElement.setAttribute("data-theme", savedTheme);
updateThemeIcon(savedTheme);

themeBtn.addEventListener("click", function () {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("luxtime-theme", next);
    updateThemeIcon(next);
});

function updateThemeIcon(theme) {
    if (theme === "light") {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
}

// ===== Page Load Transition =====
const pageTransition = document.getElementById("pageTransition");

gsap.to(pageTransition, {
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    ease: "power2.inOut",
    onComplete: function () {
        pageTransition.classList.add("hide");
    }
});

gsap.from(".transition-logo", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power2.out"
});

// ===== Page Transition on Nav Click =====
const navLinks = document.querySelectorAll('.navbar a, .logo, .footer a[href^="#"]');

navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        const href = link.getAttribute("href");

        if (!href || !href.startsWith("#") || href === "#") return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (!target) return;

        pageTransition.classList.remove("hide");

        gsap.to(pageTransition, {
            opacity: 1,
            duration: 0.4,
            ease: "power2.inOut",
            onComplete: function () {
                target.scrollIntoView({ behavior: "auto" });
                navbar.classList.remove("active");

                gsap.to(pageTransition, {
                    opacity: 0,
                    duration: 0.5,
                    delay: 0.2,
                    ease: "power2.inOut",
                    onComplete: function () {
                        pageTransition.classList.add("hide");
                    }
                });
            }
        });
    });
});

// ===== Mobile Menu =====
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

navbar.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
    });
});

// ===== Header Scroll =====
const header = document.getElementById("header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// ===== GSAP Hero Animations =====
gsap.from(".hero-anim", {
    opacity: 0,
    y: 60,
    duration: 1,
    stagger: 0.2,
    delay: 1,
    ease: "power3.out"
});

gsap.to(".hero video", {
    scale: 1.1,
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// ===== GSAP Scroll Animations =====
gsap.utils.toArray(".slide-up").forEach(function (el) {
    gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });
});

gsap.utils.toArray(".gsap-reveal").forEach(function (el) {
    gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });
});

// Stagger cards on scroll
gsap.to(".card", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".cards",
        start: "top 80%"
    }
});

// Parallax story image
gsap.to(".parallax-img", {
    y: -60,
    scrollTrigger: {
        trigger: ".story",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

// Partner cards stagger
gsap.to(".partner-card", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.12,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".partner-grid",
        start: "top 80%"
    }
});

// News cards stagger
gsap.to(".news-card", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".news-grid",
        start: "top 80%"
    }
});

// ===== Animated Statistics =====
const statNumbers = document.querySelectorAll(".stat-number");

statNumbers.forEach(function (stat) {
    const target = parseInt(stat.getAttribute("data-target"));

    ScrollTrigger.create({
        trigger: "#story",
        start: "top 70%",
        once: true,
        onEnter: function () {
            gsap.to(stat, {
                innerText: target,
                duration: 2,
                snap: { innerText: 1 },
                ease: "power1.out",
                onUpdate: function () {
                    stat.textContent = Math.round(stat.innerText) + "+";
                }
            });
        }
    });
});

// ===== Watch Showcase Slider =====
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.getElementById("sliderDots");
let currentSlide = 0;

slides.forEach(function (_, index) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");

    dot.addEventListener("click", function () {
        goToSlide(index);
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function goToSlide(index) {
    const oldSlide = slides[currentSlide];
    const newSlide = slides[index];

    gsap.to(oldSlide, {
        opacity: 0,
        x: -30,
        duration: 0.3,
        onComplete: function () {
            oldSlide.classList.remove("active");
            oldSlide.style.opacity = "";
            oldSlide.style.transform = "";
        }
    });

    dots[currentSlide].classList.remove("active");
    currentSlide = index;
    dots[currentSlide].classList.add("active");

    newSlide.classList.add("active");
    gsap.fromTo(newSlide,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
    );
}

function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
setInterval(nextSlide, 5000);

// ===== Newsletter =====
const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for subscribing!");
    newsletterForm.reset();
});
