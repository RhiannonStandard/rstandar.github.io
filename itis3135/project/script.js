document.addEventListener('DOMContentLoaded', function () {
  // Dark mode toggle with persistence
  const toggleButton = document.getElementById('mode-toggle');
  if (localStorage.getItem('darkMode') === 'true') {
    document.documentElement.classList.add('dark-mode');
  }

  toggleButton?.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.documentElement.classList.contains('dark-mode'));
  });

  
// Modal functionality (Portfolio Page)
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("modalCaption");
const closeBtn = document.querySelector(".close");
const galleryImages = document.querySelectorAll(".gallery-img");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";

    // Reset animation by toggling an extra class
    modalImg.classList.remove("zoom-animate");
    void modalImg.offsetWidth; // Force reflow
    modalImg.classList.add("zoom-animate");

    modalImg.src = img.src;
    captionText.textContent = img.alt || "Image";
  });
});

if (closeBtn && modal) {
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}



  // Slideshow functionality (Retouching Page)
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  function showSlide(n) {
    slides.forEach(slide => slide.classList.remove("active-slide"));
    slides[n].classList.add("active-slide");
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  }

  if (slides.length) {
    showSlide(slideIndex);
    let slideInterval = setInterval(nextSlide, 4000);

    next?.addEventListener("click", () => {
      nextSlide();
      clearInterval(slideInterval);
    });

    prev?.addEventListener("click", () => {
      prevSlide();
      clearInterval(slideInterval);
    });

    document.querySelector(".slideshow-container").addEventListener("mouseenter", () => {
      clearInterval(slideInterval);
    });

    document.querySelector(".slideshow-container").addEventListener("mouseleave", () => {
      slideInterval = setInterval(nextSlide, 4000);
    });
  }

 
// Contact Form Validation + Character Count + Success Message
const form = document.querySelector('.contact-form');
if (form) {
  const name = form.querySelector('#name');
  const email = form.querySelector('#email');
  const date = form.querySelector('#date');
  const message = form.querySelector('#message');
  const successMsg = document.getElementById('form-success');
  const messageInput = document.getElementById('message');
  const charCount = document.getElementById('charCount');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Always prevent for validation first
    clearErrors();
    let valid = true;

    if (name.value.trim() === '') {
      showError(name, 'Name is required.');
      valid = false;
    }

    if (!email.value.match(/^\S+@\S+\.\S+$/)) {
      showError(email, 'Enter a valid email address.');
      valid = false;
    }

    if (date.value === '') {
      showError(date, 'Please select a date.');
      valid = false;
    }

    if (message.value.trim().length < 10) {
      showError(message, 'Message must be at least 10 characters.');
      valid = false;
    }

    if (valid) {
      form.reset();
      if (charCount) charCount.textContent = "0 / 500 characters";
      if (successMsg) successMsg.style.display = 'block';

      setTimeout(() => {
        if (successMsg) successMsg.style.display = 'none';
      }, 5000); // Hide after 5 seconds
    }
  });

  function showError(input, message) {
    const error = document.createElement('span');
    error.className = 'form-error';
    error.textContent = message;
    input.parentElement.appendChild(error);
  }

  function clearErrors() {
    const errors = document.querySelectorAll('.form-error');
    errors.forEach(error => error.remove());
  }

  if (messageInput && charCount) {
    messageInput.addEventListener('input', () => {
      const count = messageInput.value.length;
      charCount.textContent = `${count} / 500 characters`;
      charCount.style.color = count > 450 ? 'red' : '';
      if (successMsg) successMsg.style.display = 'none'; // Hide success if user edits
    });
  }

}

});
