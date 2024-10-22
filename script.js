//   auto typing txt  //
var typed = new Typed(".auto-type", {
    strings: ["Web Developer", "UI/UX Designer", "Front-end-Dev"],
    typeSpeed: 180,
    backSpeed: 100,
    loop: true
  });
//   auto typing txt  //

// scroll to top //
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
// scroll to top //

// active navbar //
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    
    scrollProgress.style.background = `conic-gradient(#BFBDBD ${scrollValue}%,#363635 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;




document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Remove 'active' class from all buttons
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        
        // Add 'active' class to the clicked button
        this.classList.add('active');
        
        // Get the filter category
        const filter = this.getAttribute('data-filter');
        
        // Filter the work cards
        document.querySelectorAll('.work-card').forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});




function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
  }

  





// Show popup when the "Download CV" button is clicked
document.getElementById('showPopupBtn').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default anchor behavior
    document.getElementById('popup').style.display = 'flex';
});

// Close the popup when the close button is clicked
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

// Close the popup when clicking outside the popup content
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
});

// 2 nd popup ////

// // Modal 1: Sky Wings
const modal1 = document.getElementById("popup-modal-1");
const openModal1 = document.getElementById("trigger-popup-1");
const closeModal1 = document.getElementById("close-modal-1");

// Show modal 1
openModal1.addEventListener("click", () => {
  modal1.style.display = "flex";
});

// Hide modal 1
closeModal1.addEventListener("click", () => {
  modal1.style.display = "none";
});

// Hide modal 1 when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal1) {
    modal1.style.display = "none";
  }
});

// Modal 2: Portfolio 2
const modal2 = document.getElementById("popup-modal-2");
const openModal2 = document.getElementById("trigger-popup-2");
const closeModal2 = document.getElementById("close-modal-2");

// Show modal 2
openModal2.addEventListener("click", () => {
  modal2.style.display = "flex";
});

// Hide modal 2
closeModal2.addEventListener("click", () => {
  modal2.style.display = "none";
});

// Hide modal 2 when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal2) {
    modal2.style.display = "none";
  }
});

// Modal 2: Portfolio 2
const modal3 = document.getElementById("popup-modal-3");
const openModal3 = document.getElementById("trigger-popup-3");
const closeModal3 = document.getElementById("close-modal-3");

// Show modal 2
openModal3.addEventListener("click", () => {
  modal3.style.display = "flex";
});

// Hide modal 2
closeModal3.addEventListener("click", () => {
  modal3.style.display = "none";
});

// Hide modal 2 when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal3) {
    modal3.style.display = "none";
  }
});

// Modal 2: Portfolio 2
const modal4 = document.getElementById("popup-modal-4");
const openModal4 = document.getElementById("trigger-popup-4");
const closeModal4= document.getElementById("close-modal-4");

// Show modal 2
openModal4.addEventListener("click", () => {
  modal4.style.display = "flex";
});

// Hide modal 2
closeModal4.addEventListener("click", () => {
  modal4.style.display = "none";
});

// Hide modal 2 when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal4) {
    modal4.style.display = "none";
  }
});
// Repeat similar structure for other modals
const modal5 = document.getElementById("popup-modal-5");
const openModal5 = document.getElementById("trigger-popup-5");
const closeModal5= document.getElementById("close-modal-5");

// Show modal 2
openModal5.addEventListener("click", () => {
  modal5.style.display = "flex";
});

// Hide modal 2
closeModal5.addEventListener("click", () => {
  modal5.style.display = "none";
});

// Hide modal 2 when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal5) {
    modal5.style.display = "none";
  }
});
const modal6 = document.getElementById("popup-modal-6");
const openModal6 = document.getElementById("trigger-popup-6");
const closeModal6= document.getElementById("close-modal-6");

// Show modal 2
openModal6.addEventListener("click", () => {
  modal6.style.display = "flex";
});

// Hide modal 2
closeModal6.addEventListener("click", () => {
  modal6.style.display = "none";
});

// Hide modal 2 when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal6) {
    modal6.style.display = "none";
  }
});

// Create the cursor element and add it to the body
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Update the position of the cursor based on mouse movement
document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => { // Use requestAnimationFrame for smoother movement
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
});

// Detect when the user is pressing the mouse button (dragging)
document.addEventListener('mousedown', () => {
    cursor.classList.add('dragging'); // Add dragging animation
});

// Detect when the user releases the mouse button (stops dragging)
document.addEventListener('mouseup', () => {
    cursor.classList.remove('dragging'); // Remove dragging animation
});

// Optional: Add hover effect for interactive elements
const hoverableElements = document.querySelectorAll('a, button, h1, p');
hoverableElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5) translate(-50%, -50%)';
    });
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1) translate(-50%, -50%)';
    });
});




document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Send form data using EmailJS
    emailjs.sendForm('service_868xcfc', 'template_c8nxuxd', this)
    .then(function() {
        alert('Your message has been sent successfully!');
    }, function(error) {
        alert('Failed to send the message. Please try again later.');
        console.log('Error:', error);
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const scrollInterval = 25; // The interval in milliseconds
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