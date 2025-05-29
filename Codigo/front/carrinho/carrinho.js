document.addEventListener("DOMContentLoaded", () => {
  const listaCarrinho = document.getElementById("lista-carrinho");
  const totalCarrinho = document.getElementById("total-carrinho");
  const btnFinalizar = document.getElementById("btn-finalizar");

  const itens = JSON.parse(localStorage.getItem("carrinho")) || [];
  let total = 0;

  if (itens.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Seu carrinho está vazio.";
    listaCarrinho.appendChild(li);
    btnFinalizar.disabled = true;
  } else {
    itens.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
      listaCarrinho.appendChild(li);
      total += item.preco;
    });
    btnFinalizar.disabled = false;
  }

  totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;

  btnFinalizar.addEventListener("click", () => {
    alert("Compra finalizada com sucesso!");
    localStorage.removeItem("carrinho");
    window.location.href = "../produtos/html/produtos.html"; // Redirect to products page after purchase
  });
});