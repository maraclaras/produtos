function mostrarSecao(secaoId) {
  document.querySelectorAll("section").forEach((secao) => {
    secao.classList.add("hidden");
  });
  document.getElementById(secaoId).classList.remove("hidden");
}

function mostrarDetalhes(nome) {
  const produto = detalhesProdutos[nome];
  if (!produto) return;

  document.getElementById("nome-bolo").textContent = produto.nome.toUpperCase();
  document.querySelector("#detalhes img").src = produto.imagem;
  document.querySelector("#detalhes img").alt = produto.nome;
  document.querySelector("#detalhes p").textContent = produto.descricao;

  mostrarSecao("detalhes");
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

  // Definindo os detalhes dos produtos (existing code)
  const detalhesProdutos = {
    "Brigadeiro": {
      nome: "Brigadeiro",
      descricao: "Delicioso brigadeiro tradicional feito com leite condensado, chocolate e granulado.",
      imagem: "imagens/doces/doce6.png", // Corrected path
      preco: 5.00
    },
    "Beijinho": {
      nome: "Beijinho",
      descricao: "Docinho de coco coberto com açúcar cristal, perfeito para qualquer festa.",
      imagem: "imagens/doces/doce3.png", // Corrected path
      preco: 5.00
    },
    "Docinho Gourmet": {
      nome: "Docinho Gourmet",
      descricao: "Docinho sofisticado com ingredientes especiais e sabor incomparável.",
      imagem: "imagens/doces/doce5.jpg", // Corrected path
      preco: 6.00
    },
    "Natal": {
      nome: "Natal",
      descricao: "Delícia natalina para tornar sua ceia inesquecível.",
      imagem: "imagens/datas/data2.png", // Corrected path
      preco: 30.00
    },
    "Páscoa": {
      nome: "Páscoa",
      descricao: "Ovos de chocolate para presentear.",
      imagem: "imagens/datas/data3.png", // Corrected path
      preco: 30.00
    },
    "Páscoa 2": {
      nome: "Páscoa 2",
      descricao: "Ovos de chocolate para presentear.",
      imagem: "imagens/datas/data5.png", // Corrected path
      preco: 30.00
    },
    "Ganache 1": {
      nome: "Ganache 1",
      descricao: "Delicioso bolo coberto com ganache.",
      imagem: "imagens/bolos/bolo3.png", // Corrected path
      preco: "Consultar tabela"
    },
    "Ganache 2": {
      nome: "Ganache 2",
      descricao: "Delicioso bolo coberto com ganache.",
      imagem: "imagens/bolos/bolo7.jpg", // Corrected path
      preco: "Consultar tabela"
    },
    "Ganache 3": {
      nome: "Ganache 3",
      descricao: "Delicioso bolo coberto com ganache.",
      imagem: "imagens/bolos/bolo13.jpg", // Corrected path
      preco: "Consultar tabela"
    },
    "Ganache 4": {
      nome: "Ganache 4",
      descricao: "Delicioso bolo coberto com ganache.",
      imagem: "imagens/bolos/bolo14.jpg", // Corrected path
      preco: "Consultar tabela"
    },
    "Ganache 5": {
      nome: "Ganache 5",
      descricao: "Delicioso bolo coberto com ganache.",
      imagem: "imagens/bolos/bolo15.jpg", // Corrected path
      preco: "Consultar tabela"
    },
    "Ganache 6": {
      nome: "Ganache 6",
      descricao: "Delicioso bolo coberto com ganache.",
      imagem: "imagens/bolos/bolo16.jpg", // Corrected path
      preco: "Consultar tabela"
    },
    "Chantininho 1": {
      nome: "Chantininho 1",
      descricao: "Bolo decorado com chantininho.",
      imagem: "imagens/bolos/bolo1.png", // Corrected path
      preco: "Consultar tabela"
    },
    "Chantininho 2": {
      nome: "Chantininho 2",
      descricao: "Bolo coberto com chantininho.",
      imagem: "imagens/bolos/bolo2.png", // Corrected path
      preco: "Consultar tabela"
    },
    "Chantininho 3": {
      nome: "Chantininho 3",
      descricao: "Bolo decorado com chantininho.",
      imagem: "imagens/bolos/bolo4.png", // Corrected path
      preco: "Consultar tabela"
    },
    "Chantininho 4": {
      nome: "Chantininho 4",
      descricao: "Bolo decorado com chantininho.",
      imagem: "imagens/bolos/bolo5.jpg", // Corrected path
      preco: "Consultar tabela"
    },
    "Chantininho 5": {
      nome: "Chantininho 5",
      descricao: "Bolo decorado com chantininho.",
      imagem: "imagens/bolos/bolo6.jpg", // Corrected path
      preco: "Consultar tabela"
    },
    "Chantininho 6": {
      nome: "Chantininho 6",
      descricao: "Bolo decorado com chantininho.",
      imagem: "imagens/bolos/bolo11.jpg", // Corrected path
      preco: "Consultar tabela"
    },
    "Pasta Americana 1": {
      nome: "Pasta Americana 1",
      descricao: "Bolo decorado com pasta americana.",
      imagem: "imagens/bolos/bolo10.jpg", // Corrected path
      preco: "Consultar tabela"
    },
    "Pasta Americana 2": {
      nome: "Pasta Americana 2",
      descricao: "Bolo decorado com pasta americana.",
      imagem: "imagens/bolos/bolo18.jpg", // Corrected path
      preco: "Consultar tabela"
    },
    "Pasta Americana 3": {
      nome: "Pasta Americana 3",
      descricao: "Bolo decorado com pasta americana.",
      imagem: "imagens/bolos/bolo19.jpg", // Corrected path
      preco: "Consultar tabela"
    },
    "Pasta Americana 4": {
      nome: "Pasta Americana 4",
      descricao: "Bolo decorado com pasta americana.",
      imagem: "imagens/bolos/bolo24.jpg", // Corrected path
      preco: "Consultar tabela"
    },
    "Pasta Americana 5": {
      nome: "Pasta Americana 5",
      descricao: "Bolo decorado com pasta americana.",
      imagem: "imagens/bolos/bolo25.jpg", // Corrected path
      preco: "Consultar tabela"
    },
    "Pasta Americana 6": {
      nome: "Pasta Americana 6",
      descricao: "Bolo decorado com pasta americana.",
      imagem: "imagens/bolos/bolo26.jpg", // Corrected path
      preco: "Consultar tabela"
    },
    "Linha Diet 1": {
      nome: "Linha Diet 1",
      descricao: "Bolo sem adição de açúcar, ideal para quem busca uma alimentação mais equilibrada.",
      imagem: "imagens/bolos/bolo21.jpg", // Corrected path
      preco: "Consultar tabela"
    },
    "Linha Diet 2": {
      nome: "Linha Diet 2",
      descricao: "Bolo diet com frutas e ingredientes naturais, perfeito para dietas restritivas.",
      imagem: "imagens/bolos/bolo22.jpg", // Corrected path
      preco: "Consultar tabela"
    },
    "Linha Diet 3": {
      nome: "Linha Diet 3",
      descricao: "Receita leve e saudável, sem comprometer o sabor.",
      imagem: "imagens/bolos/bolo23.jpg", // Corrected path
      preco: "Consultar tabela"
    },
    "Linha Diet 4": {
      nome: "Linha Diet 4",
      descricao: "Bolo decorado com frutas vermelhas, zero açúcar.",
      imagem: "imagens/bolos/bolo27.jpg", // Corrected path
      preco: "Consultar tabela"
    },
    "Linha Diet 5": {
      nome: "Linha Diet 5",
      descricao: "Saboroso bolo diet com cobertura de chocolate sem açúcar.",
      imagem: "imagens/bolos/bolo28.jpg", // Corrected path
      preco: "Consultar tabela"
    },
    "Linha Diet 6": {
      nome: "Linha Diet 6",
      descricao: "Combinação perfeita de sabor e leveza para quem segue dieta.",
      imagem: "imagens/bolos/bolo29.jpg", // Corrected path
      preco: "Consultar tabela"
    }
  };

  const imagensPreview = {
    ganache: "produtos/produtos/ganache/bolo13.jpg", // Corrected path
    pasta: "imagens/bolos/bolo10.jpg", // Corrected path
    chantininho: "imagens/bolos/bolo1.png", // Corrected path
    diet: "imagens/bolos/bolo21.jpg", // Corrected path
  };

  function mostrarPreview(tipo) {
    const preview = document.getElementById("preview-bolo");
    const img = document.getElementById("imagem-preview");

    if (imagensPreview[tipo]) {
      img.src = imagensPreview[tipo];
      img.alt = `Preview de bolo de ${tipo}`;
      preview.classList.remove("hidden");
    } else {
      preview.classList.add("hidden");
    }
  }

  function esconderPreview() {
    const preview = document.getElementById("preview-bolo");
    preview.classList.add("hidden");
  }

  const boloSelecionado = localStorage.getItem("boloSelecionado");
  if (boloSelecionado) {
    mostrarDetalhes(boloSelecionado);
    localStorage.removeItem("boloSelecionado");
  }

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