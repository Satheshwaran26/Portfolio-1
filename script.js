document.addEventListener("DOMContentLoaded", function () {
  // Auto typing text
  var typed = new Typed(".auto-type", {
      strings: ["Web Developer", "UI/UX Designer", "Front-end-Dev"],
      typeSpeed: 180,
      backSpeed: 100,
      loop: true
  });

  // Sections and nav links for scrolling
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav a");

  // Scroll to top and active link logic
  let calcScrollValue = () => {
      let scrollProgress = document.getElementById("progress");
      if (!scrollProgress) return; // Check if element exists

      let pos = document.documentElement.scrollTop;
      let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let scrollValue = Math.round((pos * 100) / calcHeight);

      // Display scroll progress if scrolled more than 100px
      if (pos > 100) {
          scrollProgress.style.display = "grid";
      } else {
          scrollProgress.style.display = "none";
      }

      // Scroll to top when progress bar is clicked
      scrollProgress.addEventListener("click", () => {
          document.documentElement.scrollTop = 0;
      });

      // Update scroll progress style
      scrollProgress.style.background = `conic-gradient(#BFBDBD ${scrollValue}%,#363635 ${scrollValue}%)`;

      // Active link based on scroll position
      sections.forEach(sec => {
          let top = window.scrollY;
          let offset = sec.offsetTop - 150;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');

          if (top >= offset && top < offset + height) {
              navLinks.forEach(link => {
                  link.classList.remove('active');
                  let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                  if (activeLink) activeLink.classList.add('active');
              });
          }
      });
  };

  // Execute calcScrollValue on scroll and load
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;

  // Filter Buttons Logic
  const filterButtons = document.querySelectorAll('.filter-btn');
  const workCards = document.querySelectorAll('.work-card');
  if (filterButtons.length > 0) {
      filterButtons.forEach(button => {
          button.addEventListener('click', function () {
              filterButtons.forEach(btn => btn.classList.remove('active'));
              this.classList.add('active');

              const filter = this.getAttribute('data-filter');
              workCards.forEach(card => {
                  const category = card.getAttribute('data-category');
                  if (filter === 'all' || category === filter) {
                      card.style.display = 'block';
                  } else {
                      card.style.display = 'none';
                  }
              });
          });
      });
  }

  // Smooth Scroll to About Section
  const aboutLink = document.getElementById('about-link');
  const aboutSection = document.getElementById('about-section');
  if (aboutLink && aboutSection) {
      aboutLink.addEventListener('click', function (event) {
          event.preventDefault();
          aboutSection.scrollIntoView({
              behavior: 'smooth'
          });
      });
  }

  // Popup Logic for "Download CV"
  const popup = document.getElementById('popup');
  const showPopupBtn = document.getElementById('showPopupBtn');
  const closeBtn = document.querySelector('.close-btn');

  if (popup && showPopupBtn && closeBtn) {
      showPopupBtn.addEventListener('click', function (event) {
          event.preventDefault();
          popup.style.display = 'flex';
      });

      closeBtn.addEventListener('click', function () {
          popup.style.display = 'none';
      });

      window.addEventListener('click', function (event) {
          if (event.target === popup) {
              popup.style.display = 'none';
          }
      });
  }

  // Modal Logic for multiple modals
  const setupModal = (modalId, triggerId, closeId) => {
      const modal = document.getElementById(modalId);
      const openModal = document.getElementById(triggerId);
      const closeModal = document.getElementById(closeId);

      if (modal && openModal && closeModal) {
          openModal.addEventListener("click", () => {
              modal.style.display = "flex";
          });

          closeModal.addEventListener("click", () => {
              modal.style.display = "none";
          });

          window.addEventListener("click", (event) => {
              if (event.target === modal) {
                  modal.style.display = "none";
              }
          });
      }
  };

  // Setup all modals
  setupModal("popup-modal-1", "trigger-popup-1", "close-modal-1");
  setupModal("popup-modal-2", "trigger-popup-2", "close-modal-2");
  setupModal("popup-modal-3", "trigger-popup-3", "close-modal-3");
  setupModal("popup-modal-4", "trigger-popup-4", "close-modal-4");
  setupModal("popup-modal-5", "trigger-popup-5", "close-modal-5");
  setupModal("popup-modal-6", "trigger-popup-6", "close-modal-6");

  // EmailJS form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
      contactForm.addEventListener('submit', function (event) {
          event.preventDefault(); // Prevent the form from submitting the traditional way

          // Send form data using EmailJS
          emailjs.sendForm('service_868xcfc', 'template_c8nxuxd', this)
              .then(function () {
                  alert('Your message has been sent successfully!');
              }, function (error) {
                  alert('Failed to send the message. Please try again later.');
                  console.log('Error:', error);
              });
      });
  }

  // Custom smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          const target = document.querySelector(this.getAttribute('href'));
          const scrollInterval = 2; // The interval in milliseconds
          const scrollStep = (target.getBoundingClientRect().top + window.scrollY) / 100; // Adjust the scroll step to control speed

          const scroll = setInterval(() => {
              if (Math.abs(window.scrollY - (target.getBoundingClientRect().top + window.scrollY)) < Math.abs(scrollStep)) {
                  clearInterval(scroll);
                  window.scrollTo(0, target.getBoundingClientRect().top + window.scrollY);
              } else {
                  window.scrollBy(0, scrollStep);
              }
          }, scrollInterval);
      });
  });
});
