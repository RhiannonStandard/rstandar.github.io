document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('mode-toggle');
  toggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
  });

  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("modalCaption");
  const closeBtn = document.querySelector(".close");

  const galleryImages = document.querySelectorAll(".gallery img");

  for (let i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener("click", function () {
      modal.style.display = "flex";
      modalImg.src = this.src;

      const nextElem = this.nextElementSibling;
      if (this.alt) {
        captionText.textContent = this.alt;
      } else if (nextElem && nextElem.tagName.toLowerCase() === "figcaption") {
        captionText.textContent = nextElem.textContent;
      } else {
        captionText.textContent = "";
      }
    });
  }

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
