// Small interactions for Kroebelz Digital
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Hide navbar on scroll down, show on scroll up
  const navbar = document.querySelector(".navbar");
  let lastScrollTop = 0;
  
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      navbar.style.transform = "translateY(-100%)";
      navbar.style.transition = "transform 0.3s ease-in-out";
    } else {
      // Scrolling up
      navbar.style.transform = "translateY(0)";
      navbar.style.transition = "transform 0.3s ease-in-out";
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // Close the mobile menu after a navigation link is selected.
  document.querySelectorAll("#mainNav .nav-link, #mainNav .btn").forEach((link) => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("mainNav");
      if (menu && menu.classList.contains("show") && window.bootstrap) {
        window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  // The static site prepares an email in the visitor's mail app.
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const project = String(data.get("project") || "Website enquiry");
      const message = String(data.get("message") || "").trim();
      const subject = encodeURIComponent(`Website enquiry: ${project}`);
      const body = encodeURIComponent(
        `Hi Lars,\n\nI'd like to get in touch about a project.\n\nName: ${name}\nEmail: ${email}\nProject: ${project}\n\nMessage:\n${message}\n\nKind regards,\n${name}`
      );

      const status = document.getElementById("formStatus");
      if (status) status.textContent = "Your email app should open with your message ready. Please send the email to complete your enquiry.";
      window.location.href = `mailto:info@kroebelzdigital.be?subject=${subject}&body=${body}`;
    });
  }
});
