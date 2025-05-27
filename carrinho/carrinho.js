document.addEventListener("DOMContentLoaded", () => {
  const listaCarrinho = document.getElementById("lista-carrinho");
  const totalCarrinho = document.getElementById("total-carrinho");
  const btnFinalizar = document.getElementById("btn-finalizar");

  const itens = JSON.parse(localStorage.getItem("carrinho")) || [];
  let total = 0;

  itens.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    listaCarrinho.appendChild(li);
    total += item.preco;
  });

  totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;

  btnFinalizar.addEventListener("click", () => {
    alert("Compra finalizada com sucesso!");
    localStorage.removeItem("carrinho");
    window.location.href = "index.html";
  });
});
