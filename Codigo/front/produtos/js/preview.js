const imagensPreview = {
  ganache: "/Codigo/front/produtos/html/ganache/bolo3.png",
  pasta: "/Codigo/front/produtos/html/pastaAmericana/bolo10.jpg",
  chantininho: "/Codigo/front/produtos/html/chantininho/bolo1.png",
  diet: "/Codigo/front/produtos/html/linhaDiet/bolo21.jpg",
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
