document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('mode-toggle');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("modalCaption");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
      captionText.textContent = img.alt || img.nextElementSibling?.textContent || '';
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
