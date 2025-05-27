document.getElementById("cadastroForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    // Verificações
    if (!nome || !email || !senha || !confirmarSenha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return;
    }

    // Envio para backend (coloque a URL correta no fetch)
    fetch("http://localhost:8080/api/clientes", { // substitua pela sua URL
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Cadastro realizado com sucesso!");
            window.location.pathname = "Codigo/front/login/login.html";
        } else {
            alert("Erro no cadastro: " + (data.message || "Tente novamente."));
        }
    })
    .catch(error => {
        console.error("Erro ao cadastrar:", error);
        alert("Erro inesperado. Tente novamente mais tarde.");
    });
});
