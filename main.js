// // Smooth scrolling for navigation links
// document.querySelectorAll('nav a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         target.scrollIntoView({
//             behavior: 'smooth'
//         });
//     }); 
// });

// Simple alert for CTA button (replace with actual enrollment logic)
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        alert('Enrollment form coming soon!');
    });
}

const faqs = [
      {
        q: "How do I enroll in the school?",
        a: "You can enroll by visiting the admissions office or completing the online enrollment form on our website."
      },
      {
        q: "What are the school office hours?",
        a: "The school office is open from Monday to Friday, 8:00 AM to 5:00 PM."
      },
      {
        q: "What requirements are needed for enrollment?",
        a: "Common requirements include report cards, birth certificate, and a completed application form."
      },
      {
        q: "How do I contact the registrar?",
        a: "You may contact the registrar via email or visit the registrar’s office during office hours."
      }
    ];

    const input = document.getElementById("searchInput");
    if (input) {
      const searchDropdown = document.getElementById("search-dropdown");

      input.addEventListener("input", () => {
        const value = input.value.toLowerCase();
        searchDropdown.innerHTML = "";

        if (!value) {
          searchDropdown.style.display = "none";
          return;
        }

        const results = faqs.filter(item =>
          item.q.toLowerCase().includes(value)
        );

        if (results.length === 0) {
          searchDropdown.style.display = "none";
          return;
        }

        results.forEach(item => {
          const div = document.createElement("div");
          div.className = "search-dropdown-item";
          div.innerHTML = `
            <div class="question">${item.q}</div>
            <div class="answer">${item.a}</div>
          `;

          div.addEventListener("click", () => {
            div.classList.toggle("active");
          });

          searchDropdown.appendChild(div);
        });

        searchDropdown.style.display = "block";
      });

      document.addEventListener("click", (e) => {
        if (!e.target.closest(".search-container")) {
          searchDropdown.style.display = "none";
        }
      });
    }

// ================= HAMBURGER MENU TOGGLE =================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        navMenu.classList.toggle("show");
    });
    
    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Don't close if it's a dropdown toggle on mobile
            if (window.innerWidth <= 992 && link.parentElement.classList.contains("dropdown")) {
                return;
            }
            navMenu.classList.remove("show");
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            navMenu.classList.remove("show");
        }
    });
} 

// ================= SCROLL POP REVEAL =================

const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(reveal => {
    const revealTop = reveal.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      reveal.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ================= MOBILE DROPDOWN FIX =================

document.querySelectorAll(".dropdown > a").forEach(item => {
  item.addEventListener("click", function (e) {
    if (window.innerWidth <= 992) {
      e.preventDefault();

      const parent = this.parentElement;
      parent.classList.toggle("active");
    }
  });
});