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

// Get the modal element
const modal = document.getElementById("popup-modal");

// Get the open button
const openModal = document.getElementById("trigger-popup");

// Get the close button
const closeModal = document.getElementById("close-modal");

// Show modal
openModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Hide modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Hide modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
