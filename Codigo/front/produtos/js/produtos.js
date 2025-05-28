function mostrarSecao(secaoId) {
  document.querySelectorAll("section").forEach((secao) => {
    secao.classList.add("hidden");
  });
  document.getElementById(secaoId).classList.remove("hidden");
}


document.addEventListener("DOMContentLoaded", function () {
  const estrelas = document.querySelectorAll("#avaliacao span");

  estrelas.forEach((estrela, index) => {
    estrela.addEventListener("click", () => {
      const nota = parseInt(estrela.getAttribute("data-estrela"));
      atualizarEstrelas(nota);
    });
  });

  function atualizarEstrelas(nota) {
    estrelas.forEach((estrela, index) => {
      if (index < nota) {
        estrela.textContent = "★";
      } else {
        estrela.textContent = "☆";
      }
    });
  }

  // --- CAROUSEL AUTO-PLAY UTILITY FUNCTION ---
  function setupCarouselAutoPlay(
    slidesSelector,
    slidesContainerSelector,
    dotsContainerSelector,
    mudarFnName, // e.g., 'mudarBoloSlide'
    currentFnName // e.g., 'currentBoloSlide'
  ) {
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll(slidesSelector);
    const carouselSlidesContainer = document.querySelector(slidesContainerSelector);
    const dotsContainer = document.querySelector(dotsContainerSelector);
    let autoSlideInterval;

    if (!slides.length || !carouselSlidesContainer || !dotsContainer) {
      console.warn(`Carousel elements not found for selectors: ${slidesSelector}, ${slidesContainerSelector}, ${dotsContainerSelector}`);
      return; // Exit if elements are missing
    }

    function showSlides(n) {
      if (n >= slides.length) {
        currentSlideIndex = 0;
      }
      if (n < 0) {
        currentSlideIndex = slides.length - 1;
      }

      const offset = -currentSlideIndex * 100;
      carouselSlidesContainer.style.transform = `translateX(${offset}%)`;

      const dots = dotsContainer.querySelectorAll('.dot');
      dots.forEach(dot => dot.classList.remove('active'));
      if (dots[currentSlideIndex]) {
        dots[currentSlideIndex].classList.add('active');
      }
    }

    // Generate dots dynamically
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            currentSlideIndex = i;
            showSlides(currentSlideIndex);
            resetAutoPlay();
        });
        dotsContainer.appendChild(dot);
    }

    showSlides(currentSlideIndex); // Initialize carousel

    function startAutoPlay() {
      autoSlideInterval = setInterval(() => {
        currentSlideIndex++;
        showSlides(currentSlideIndex);
      }, 3000); // Change slide every 3 seconds
    }

    function stopAutoPlay() {
      clearInterval(autoSlideInterval);
    }

    function resetAutoPlay() {
      stopAutoPlay();
      startAutoPlay();
    }

    // Start auto-play initially
    startAutoPlay();

    // Pause on hover
    const carouselContainer = carouselSlidesContainer.closest('.bolo-carousel-container, .doces-carousel-container, .datas-carousel-container'); // Find the closest specific container
    if (carouselContainer) {
      carouselContainer.addEventListener('mouseover', stopAutoPlay);
      carouselContainer.addEventListener('mouseout', resetAutoPlay);
    }


    // Expose global functions for HTML buttons
    window[mudarFnName] = function(n) {
        currentSlideIndex += n;
        showSlides(currentSlideIndex);
        resetAutoPlay();
    };
    window[currentFnName] = function(n) {
        currentSlideIndex = n;
        showSlides(currentSlideIndex);
        resetAutoPlay();
    };
  }

  // --- CAROUSEL INSTANTIATIONS ---
  // Bolo Carousel
  setupCarouselAutoPlay(
    '.bolo-slide',
    '.bolo-carousel-slides',
    '.bolo-carousel-dots',
    'mudarBoloSlide',
    'currentBoloSlide'
  );

  // Doces Carousel
  setupCarouselAutoPlay(
    '.doces-slide',
    '.doces-carousel-slides',
    '.doces-carousel-dots',
    'mudarDocesSlide',
    'currentDocesSlide'
  );

  // Datas Comemorativas Carousel
  setupCarouselAutoPlay(
    '.datas-slide',
    '.datas-carousel-slides',
    '.datas-carousel-dots',
    'mudarDatasSlide',
    'currentDatasSlide'
  );


  const btnAdicionarCarrinho = document.getElementById("btn-adicionar-carrinho");

  btnAdicionarCarrinho.addEventListener("click", () => {
    const nomeProduto = document.getElementById("nome-bolo").textContent.trim();
    const produto = detalhesProdutos[nomeProduto];

    if (!produto) {
      alert("Produto não encontrado!");
      return;
    }

    if (typeof produto.preco === "number") {
      const carrinhoItens = JSON.parse(localStorage.getItem("carrinho")) || [];
      carrinhoItens.push(produto);
      localStorage.setItem("carrinho", JSON.stringify(carrinhoItens));

      alert(`${produto.nome} adicionado ao carrinho!`);
    } else {
      alert(`Este produto (${produto.nome}) é sob consulta. Preço não disponível para adicionar ao carrinho.`);
    }
  });
});