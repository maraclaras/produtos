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
});

// Definindo os preços (você pode ajustar os valores aqui)
const precosProdutos = {
  "Bolo 1": 45.00,
  "Bolo 2": 55.00,
  "Bolo 3": 60.00,
  "Bolo 4": 50.00,
  "Bolo 5": 65.00,
  "Bolo 6": 70.00,
  "Brigadeiro": 5.00,
  "Beijinho": 5.00,
  "Docinho Gourmet": 6.00,
  "Natal": 30.00,
  "Páscoa": 30.00,
  "Festas Juninas": 30.00
};

document.addEventListener("DOMContentLoaded", () => {
  const btnAbrirCarrinho = document.getElementById("btn-abrir-carrinho");
  const btnFecharCarrinho = document.getElementById("fechar-carrinho");
  const carrinho = document.getElementById("carrinho");

  btnAbrirCarrinho.addEventListener("click", () => {
    carrinho.classList.remove("carrinho-hidden");
    carrinho.classList.add("carrinho-visible");
    console.log("Carrinho aberto!");
  });

  btnFecharCarrinho.addEventListener("click", () => {
    carrinho.classList.remove("carrinho-visible");
    carrinho.classList.add("carrinho-hidden");
    console.log("Carrinho fechado!");
  });
});

const detalhesProdutos = {
  "Brigadeiro": {
    nome: "Brigadeiro",
    descricao: "Delicioso brigadeiro tradicional feito com leite condensado, chocolate e granulado.",
    imagem: "/Codigo/front/produtos/imagens/doces/doce6.png",
    preco: 5.00
  },
  "Beijinho": {
    nome: "Beijinho",
    descricao: "Docinho de coco coberto com açúcar cristal, perfeito para qualquer festa.",
    imagem: "/Codigo/front/produtos/imagens/doces/doce3.png",
    preco: 5.00
  },
  "Docinho Gourmet": {
    nome: "Docinho Gourmet",
    descricao: "Docinho sofisticado com ingredientes especiais e sabor incomparável.",
    imagem: "/Codigo/front/produtos/imagens/doces/doce5.jpg",
    preco: 6.00
  },
  "Natal": {
    nome: "Natal",
    descricao: "Delícia natalina para tornar sua ceia inesquecível.",
    imagem: "/Codigo/front/produtos/imagens/datas/data2.png",
    preco: 30.00
  },
  "Páscoa": {
    nome: "Páscoa 2",
    descricao: "Ovos de chocolate para presentear.",
    imagem: "/Codigo/front/produtos/imagens/datas/data3.png",
    preco: 30.00
  },
  "Páscoa": {
    nome: "Páscoa 2",
    descricao: "Ovos de chocolate para presentear.",
    imagem: "/Codigo/front/produtos/imagens/datas/data5.png",
    preco: 30.00
  },
  "Ganache 1": {
    nome: "Ganache 1",
    descricao: "Delicioso bolo coberto com ganache",
    imagem: "/Codigo/front/produtos/imagens/bolos/bolo3.png",
    preco: "Consultar tabela"
  },
  "Ganache 2": {
    nome: "Ganache 2",
    descricao: "Delicioso bolo coberto com ganache",
    imagem: "/Codigo/front/produtos/imagens/bolos/bolo7.jpg",
    preco: "Consultar tabela"
  },
  "Ganache 3": {
    nome: "Ganache 3",
    descricao: "Delicioso bolo coberto com ganache",
    imagem: "/Codigo/front/produtos/imagens/bolos/bolo13.jpg",
    preco: "Consultar tabela"
  },
  "Ganache 4": {
    nome: "Ganache 4",
    descricao: "Delicioso bolo coberto com ganache",
    imagem: "/Codigo/front/produtos/imagens/bolos/bolo14.jpg",
    preco: "Consultar tabela"
  },
  "Ganache 5": {
    nome: "Ganache 5",
    descricao: "Delicioso bolo coberto com ganache",
    imagem: "/Codigo/front/produtos/imagens/bolos/bolo15.jpg",
    preco: "Consultar tabela"
  },
  "Ganache 6": {
    nome: "Ganache 6",
    descricao: "Delicioso bolo coberto com ganache",
    imagem: "/Codigo/front/produtos/imagens/bolos/bolo16.jpg",
    preco: "Consultar tabela"
  },
  "Chantininho 1": {
    nome: "Chantininho 1",
    descricao: "Bolo decorado com chantininho",
    imagem: "/Codigo/front/produtos/imagens/bolos/bolo1.png",
    preco: "Consultar tabela"
  },
  "Chantininho 2": {
    nome: "Chantininho 2",
    descricao: "Bolo coberto com chantininho ",
    imagem: "/Codigo/front/produtos/imagens/bolos/bolo2.png",
    preco: "Consultar tabela"
  },
  "Chantininho 3": {
    nome: "Chantininho 3",
    descricao: "Bolo decorado com chantininho",
    imagem: "/Codigo/front/produtos/imagens/bolos/bolo4.png",
    preco: "Consultar tabela"
  },
  "Chantininho 4": {
    nome: "Chantininho 4",
    descricao: "Bolo decorado com chantininho",
    imagem: "/Codigo/front/produtos/imagens/bolos/bolo5.jpg",
    preco: "Consultar tabela"
  },
  "Chantininho 5": {
    nome: "Chantininho 5",
    descricao: "Bolo decorado com chantininho",
    imagem: "/Codigo/front/produtos/imagens/bolos/bolo6.jpg",
    preco: "Consultar tabela"
  },
  "Chantininho 6": {
    nome: "Chantininho 6",
    descricao: "Bolo decorado com chantininho",
    imagem: "/Codigo/front/produtos/imagens/bolos/bolo11.jpg",
    preco: "Consultar tabela"
  },
  "Pasta Americana 1": {
  nome: "Pasta Americana 1",
  descricao: "Bolo decorado com pasta americana.",
  imagem: "/Codigo/front/produtos/imagens/bolos/bolo10.jpg",
  preco: "Consultar tabela"
},
"Pasta Americana 2": {
  nome: "Pasta Americana 2",
  descricao: "Bolo decorado com pasta americana.",
  imagem: "/Codigo/front/produtos/imagens/bolos/bolo18.jpg",
  preco: "Consultar tabela"
},
"Pasta Americana 3": {
  nome: "Pasta Americana 3",
  descricao: "Bolo decorado com pasta americana.",
  imagem: "/Codigo/front/produtos/imagens/bolos/bolo19.jpg",
  preco: "Consultar tabela"
},
"Pasta Americana 4": {
  nome: "Pasta Americana 4",
  descricao: "Bolo decorado com pasta americana.",
  imagem: "/Codigo/front/produtos/imagens/bolos/bolo24.jpg",
  preco: "Consultar tabela"
},
"Pasta Americana 5": {
  nome: "Pasta Americana 5",
  descricao: "Bolo decorado com pasta americana.",
  imagem: "/Codigo/front/produtos/imagens/bolos/bolo25.jpg",
  preco: "Consultar tabela"
},
"Pasta Americana 6": {
  nome: "Pasta Americana 6",
  descricao: "Bolo decorado com pasta americana.",
  imagem: "/Codigo/front/produtos/imagens/bolos/bolo26.jpg",
  preco: "Consultar tabela"
},
"Linha Diet 1": {
  nome: "Linha Diet 1",
  descricao: "Bolo sem adição de açúcar, ideal para quem busca uma alimentação mais equilibrada.",
  imagem: "/Codigo/front/produtos/imagens/bolos/bolo21.jpg",
  preco: "Consultar tabela"
},
"Linha Diet 2": {
  nome: "Linha Diet 2",
  descricao: "Bolo diet com frutas e ingredientes naturais, perfeito para dietas restritivas.",
  imagem: "/Codigo/front/produtos/imagens/bolos/bolo22.jpg",
  preco: "Consultar tabela"
},
"Linha Diet 3": {
  nome: "Linha Diet 3",
  descricao: "Receita leve e saudável, sem comprometer o sabor.",
  imagem: "/Codigo/front/produtos/imagens/bolos/bolo23.jpg",
  preco: "Consultar tabela"
},
"Linha Diet 4": {
  nome: "Linha Diet 4",
  descricao: "Bolo decorado com frutas vermelhas, zero açúcar.",
  imagem: "/Codigo/front/produtos/imagens/bolos/bolo27.jpg",
  preco: "Consultar tabela"
},
"Linha Diet 5": {
  nome: "Linha Diet 5",
  descricao: "Saboroso bolo diet com cobertura de chocolate sem açúcar.",
  imagem: "/Codigo/front/produtos/imagens/bolos/bolo28.jpg",
  preco: "Consultar tabela"
},
"Linha Diet 6": {
  nome: "Linha Diet 6",
  descricao: "Combinação perfeita de sabor e leveza para quem segue dieta.",
  imagem: "/Codigo/front/produtos/imagens/bolos/bolo29.jpg",
  preco: "Consultar tabela"
}


};


const imagensPreview = {
  ganache: "/Codigo/front/produtos/imagens/bolos/bolo3.png",
  pasta: "/Codigo/front/produtos/imagens/bolos/bolo10.jpg",
  chantininho: "/Codigo/front/produtos/imagens/bolos/bolo1.png",
  diet: "/Codigo/front/produtos/imagens/bolos/bolo7.jpg",
};

function mostrarPreview(tipo) {
  const preview = document.getElementById("preview-bolo");
  const img = document.getElementById("imagem-preview");

  if (imagensPreview[tipo]) {
    img.src = imagensPreview[tipo];
    img.alt = `Preview de ${tipo}`;
    preview.classList.remove("hidden");
  }
}

function esconderPreview() {
  const preview = document.getElementById("preview-bolo");
  preview.classList.add("hidden");
}


document.addEventListener("DOMContentLoaded", () => {
  const boloSelecionado = localStorage.getItem("boloSelecionado");
  if (boloSelecionado) {
    mostrarDetalhes(boloSelecionado);
    localStorage.removeItem("boloSelecionado"); // Limpa após uso
  }
  function mostrarPreview(tipo) {
  const preview = document.getElementById("preview-bolo");
  const img = document.getElementById("imagem-preview");

  img.src = imagensPreview[tipo];
  img.alt = `Preview do bolo ${tipo}`;
  preview.classList.remove("hidden");
}

});

const carrinhoItens = [];
let total = 0;

document.addEventListener("DOMContentLoaded", () => {
  const btnAdicionarCarrinho = document.getElementById("btn-adicionar-carrinho");
  const listaCarrinho = document.getElementById("lista-carrinho");
  const totalCarrinho = document.getElementById("total-carrinho");

  btnAdicionarCarrinho.addEventListener("click", () => {
    const nomeProduto = document.getElementById("nome-bolo").textContent.trim();
    const produto = detalhesProdutos[nomeProduto];

    if (!produto) {
      alert("Produto não encontrado!");
      return;
    }

    // Adiciona ao carrinho apenas se tiver preço definido
    if (typeof produto.preco === "number") {
      carrinhoItens.push(produto);
      total += produto.preco;

      // Atualiza a interface do carrinho
      const item = document.createElement("li");
      item.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
      listaCarrinho.appendChild(item);

      totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;
    } else {
      alert("Este produto é sob consulta. Preço não disponível.");
    }
  });
});
