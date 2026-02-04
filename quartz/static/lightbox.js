document.addEventListener("DOMContentLoaded", () => {
  // Select all images inside article content
  const images = document.querySelectorAll("img");

  images.forEach((img) => {
    img.style.cursor = "zoom-in";

    img.addEventListener("click", () => {
      // Create overlay
      const overlay = document.createElement("div");
      overlay.classList.add("quartz-lightbox-overlay");

      // Clone image
      const fullImg = document.createElement("img");
      fullImg.src = img.src;
      fullImg.classList.add("quartz-lightbox-image");

      overlay.appendChild(fullImg);
      document.body.appendChild(overlay);

      // Close on click
      overlay.addEventListener("click", () => {
        overlay.remove();
      });

      // Close on ESC
      document.addEventListener(
        "keydown",
        function escHandler(e) {
          if (e.key === "Escape") {
            overlay.remove();
            document.removeEventListener("keydown", escHandler);
          }
        },
        { once: true }
      );
    });
  });
});