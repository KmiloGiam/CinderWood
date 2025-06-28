// JavaScript for CinderWood Website

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link")

    navLinks.forEach((link) => {
        link.addEventListener("click", function(e) {
            e.preventDefault()
            const targetId = this.getAttribute("href")
            const targetSection = document.querySelector(targetId)

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70 // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                })
            }
        })
    })

    // Smooth scrolling para el botón "Conoce más"
    const conoceMasBtn = document.querySelector('a[href="#about"].btn')

    function smoothScrollToAbout(e) {
        e.preventDefault()
        const aboutSection = document.getElementById("about")
        if (aboutSection) {
            const offsetTop = aboutSection.offsetTop - 40
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            })
        }
    }
    if (conoceMasBtn) {
        conoceMasBtn.addEventListener("click", smoothScrollToAbout)
    }

    // Smooth scrolling para el botón "Conoce a los integrantes"
    const scrollToMembersBtn = document.getElementById("scrollToMembersBtn")
    if (scrollToMembersBtn) {
        scrollToMembersBtn.addEventListener("click", function(e) {
            e.preventDefault()
            const membersSection = document.getElementById("members")
            if (membersSection) {
                const offsetTop = membersSection.offsetTop - 40
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                })
            }
        })
    }

    // Smooth scrolling para el botón "Ver eventos destacados"
    const scrollToEventsBtn = document.getElementById("scrollToEventsBtn")
    if (scrollToEventsBtn) {
        scrollToEventsBtn.addEventListener("click", function(e) {
            e.preventDefault()
            const eventsSection = document.getElementById("events")
            if (eventsSection) {
                const offsetTop = eventsSection.offsetTop - 40
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                })
            }
        })
    }

    // Active navigation highlighting
    window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section")
        const navLinks = document.querySelectorAll(".navbar-nav .nav-link")

        let current = ""
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100
            const sectionHeight = section.clientHeight

            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute("id")
            }
        })

        navLinks.forEach((link) => {
            link.classList.remove("active")
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active")
            }
        })
    })

    // Member card hover effects
    const memberCards = document.querySelectorAll(".member-card")

    memberCards.forEach((card) => {
        card.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-10px) scale(1.02)"
        })

        card.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0) scale(1)"
        })
    })

    // Navbar background change on scroll
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar")

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled")
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.95)"
            navbar.style.backdropFilter = "blur(10px)"
        } else {
            navbar.classList.remove("scrolled")
            navbar.style.backgroundColor = ""
            navbar.style.backdropFilter = ""
        }
    })

    // Mostrar navbar al llegar a la sección "Sobre la Banda"
    const navbar = document.querySelector(".navbar")
    const aboutSection = document.getElementById("about")

    function toggleNavbarOnScroll() {
        const aboutTop = aboutSection.getBoundingClientRect().top + window.scrollY
        if (window.scrollY + 1 >= aboutTop - 70) {
            navbar.classList.remove("d-none")
        } else {
            navbar.classList.add("d-none")
        }
    }

    window.addEventListener("scroll", toggleNavbarOnScroll)
    toggleNavbarOnScroll()

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1"
                entry.target.style.transform = "translateY(0)"
            }
        })
    }, observerOptions)

    // Observe member cards for animation
    memberCards.forEach((card) => {
        card.style.opacity = "0"
        card.style.transform = "translateY(30px)"
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
        observer.observe(card)
    })

    // Console log for band info
    console.log(`
    🎸 CinderWood - Rock que enciende el alma 🎸
    
    Integrantes:
    🎤 Alex Rivera - Vocalista
    🎸 Marcus Stone - Guitarrista  
    🎸 Sofia Bass - Bajista
    🥁 Jake Thunder - Baterista
    
    ¡Gracias por visitar nuestro sitio web!
    `)

    // Botón flotante para volver arriba (hero)
    const backToHeroBtn = document.getElementById("backToHeroBtn")
    const heroSection = document.getElementById("home")

    function toggleBackToHeroBtn() {
        if (window.scrollY > (heroSection ? heroSection.offsetHeight * 0.7 : 200)) {
            backToHeroBtn.style.display = "flex"
        } else {
            backToHeroBtn.style.display = "none"
        }
    }

    window.addEventListener("scroll", toggleBackToHeroBtn)
    toggleBackToHeroBtn()

    // Scroll suave al hacer clic en el botón
    if (backToHeroBtn) {
        backToHeroBtn.addEventListener("click", function(e) {
            e.preventDefault()
            if (heroSection) {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }
        })
    }
})

// Easter egg - Konami code
const konamiCode = []
const konamiSequence = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA",
]

document.addEventListener("keydown", (e) => {
    konamiCode.push(e.code)

    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift()
    }

    if (konamiCode.join(",") === konamiSequence.join(",")) {
        // Easter egg activated
        document.body.style.animation = "rainbow 2s infinite"
        setTimeout(() => {
            document.body.style.animation = ""
            alert("🎸 ¡Has desbloqueado el modo rockstar! 🎸")
        }, 2000)
    }
})

// Add rainbow animation for easter egg
const style = document.createElement("style")
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`
document.head.appendChild(style)