const imagensPreview = {
  ganache: [
    "/Codigo/front/produtos/html/ganache/bolo3.png",
    "/Codigo/front/produtos/html/ganache/bolo7.jpg",
    "/Codigo/front/produtos/html/ganache/bolo13.jpg"
  ],
  pasta: [
    "/Codigo/front/produtos/html/pastaAmericana/bolo10.jpg",
    "/Codigo/front/produtos/html/pastaAmericana/bolo18.jpg",
    "/Codigo/front/produtos/html/pastaAmericana/bolo24.jpg"
  ],
  chantininho: [
    "/Codigo/front/produtos/html/chantininho/bolo1.png",
    "/Codigo/front/produtos/html/chantininho/bolo6.jpg",
    "/Codigo/front/produtos/html/chantininho/bolo11.jpg"
  ],
  diet: [
    "/Codigo/front/produtos/html/linhaDiet/bolo21.jpg",
    "/Codigo/front/produtos/html/linhaDiet/bolo22.jpg",
    "/Codigo/front/produtos/html/linhaDiet/bolo23.jpg"
  ],
};

let currentPreviewSlideIndex = 0;
let activePreviewImages = [];
let autoPreviewInterval;

function showPreviewSlides(n) {
  const slides = document.querySelectorAll('.preview-slide');
  const carouselSlidesContainer = document.querySelector('.preview-carousel-slides');
  const dotsContainer = document.querySelector('.preview-carousel-dots');

  if (!slides.length || !carouselSlidesContainer || !dotsContainer) {
    return;
  }

  if (n >= slides.length) {
    currentPreviewSlideIndex = 0;
  }
  if (n < 0) {
    currentPreviewSlideIndex = slides.length - 1;
  }

  const offset = -currentPreviewSlideIndex * 100;
  carouselSlidesContainer.style.transform = `translateX(${offset}%)`;

  const dots = dotsContainer.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[currentPreviewSlideIndex]) {
    dots[currentPreviewSlideIndex].classList.add('active');
  }
}

function mudarPreviewSlide(n) {
  currentPreviewSlideIndex += n;
  showPreviewSlides(currentPreviewSlideIndex);
  resetAutoPlayPreview();
}

function currentPreviewSlide(n) {
  currentPreviewSlideIndex = n;
  showPreviewSlides(currentPreviewSlideIndex);
  resetAutoPlayPreview();
}

function startAutoPlayPreview() {
  stopAutoPlayPreview(); // Ensure no multiple intervals are running
  autoPreviewInterval = setInterval(() => {
    currentPreviewSlideIndex++;
    showPreviewSlides(currentPreviewSlideIndex);
  }, 3000); // Change slide every 3 seconds
}

function stopAutoPlayPreview() {
  clearInterval(autoPreviewInterval);
}

function resetAutoPlayPreview() {
  stopAutoPlayPreview();
  startAutoPlayPreview();
}


function mostrarPreview(tipo) {
  const preview = document.getElementById("preview-bolo");
  const slidesContainer = preview.querySelector('.preview-carousel-slides');
  const dotsContainer = preview.querySelector('.preview-carousel-dots');

  slidesContainer.innerHTML = ''; // Clear previous slides
  dotsContainer.innerHTML = ''; // Clear previous dots

  activePreviewImages = imagensPreview[tipo] || [];
  currentPreviewSlideIndex = 0; // Reset slide index for new preview

  if (activePreviewImages.length > 0) {
    activePreviewImages.forEach((imageSrc, index) => {
      const slideDiv = document.createElement('div');
      slideDiv.classList.add('preview-slide');
      const imgElement = document.createElement('img');
      imgElement.src = imageSrc;
      imgElement.alt = `Preview de ${tipo} ${index + 1}`;
      slideDiv.appendChild(imgElement);
      slidesContainer.appendChild(slideDiv);

      const dot = document.createElement('span');
      dot.classList.add('dot');
      dot.addEventListener('click', () => {
          currentPreviewSlide(index);
      });
      dotsContainer.appendChild(dot);
    });

    preview.classList.remove("hidden");
    showPreviewSlides(currentPreviewSlideIndex); // Show the first slide
    startAutoPlayPreview(); // Start autoplay
  } else {
    esconderPreview(); // Hide if no images are found
  }
}

function esconderPreview() {
  const preview = document.getElementById("preview-bolo");
  preview.classList.add("hidden");
  stopAutoPlayPreview(); // Stop autoplay when hidden
  activePreviewImages = []; // Clear active images
}

// Expose functions to global scope for HTML onclick
window.mudarPreviewSlide = mudarPreviewSlide;
window.currentPreviewSlide = currentPreviewSlide;

// Add event listeners for mouseover/mouseout on the preview container
document.addEventListener("DOMContentLoaded", function() {
  const previewContainer = document.getElementById("preview-bolo");
  if (previewContainer) {
    previewContainer.addEventListener('mouseover', stopAutoPlayPreview);
    previewContainer.addEventListener('mouseout', resetAutoPlayPreview);
  }
});