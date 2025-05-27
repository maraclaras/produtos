// Exibe a tela de login para Cliente
function showClientLogin() {
    document.getElementById("loginOptions").style.display = "none";
    document.getElementById("clientLogin").style.display = "block";
}

// Exibe a tela de login para Administrador
function showAdminLogin() {
    document.getElementById("loginOptions").style.display = "none";
    document.getElementById("adminLogin").style.display = "block";
}

// Volta para a tela inicial com as opções de login
function backToLoginOptions() {
    document.getElementById("loginOptions").style.display = "block";
    document.getElementById("clientLogin").style.display = "none";
    document.getElementById("adminLogin").style.display = "none";
}

// Exibe a página de cadastro (ainda não implementada)
function showRegister() {
    if(data.success){
        alertalert("Página de cadastro");
        window.location.pathname = "Codigo/front/cadastro/cadastro.html";
    }

}

// Exibe alerta para recuperação de senha
function showForgotPassword() {
    alert("Página de recuperação de senha não implementada ainda.");
}

// Lógica de autenticação para Cliente
async function loginClient(event) {
    event.preventDefault();
    var email = document.getElementById("clientEmail").value;
    var password = document.getElementById("clientPassword").value;

    try {
        let response = await fetch("http://localhost:8080/api/clientes/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        let data = await response.json();
        
        if (data.success) {
            alert("Bem-vindo Cliente!");
            window.location.href = "/dashboard-cliente";
        } else {
            alert("Email ou senha inválidos!");
        }
    } catch (error) {
        alert("Erro ao tentar fazer login. Tente novamente mais tarde.");
        console.error("Erro:", error);
    }
}

document.getElementById("clientForm").addEventListener("submit", loginClient);

// Lógica de autenticação para Administrador
async function loginAdmin(event) {
    event.preventDefault();
    var cpf = document.getElementById("adminCpf").value;
    var password = document.getElementById("adminPassword").value;

    try {
        let response = await fetch("", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cpf, password })
        });
        let data = await response.json();
        
        if (data.success) {
            alert("Bem-vindo Administrador!");
            window.location.href = "/dashboard-admin";
        } else {
            alert("CPF ou senha inválidos!");
        }
    } catch (error) {
        alert("Erro ao tentar fazer login. Tente novamente mais tarde.");
        console.error("Erro:", error);
    }
}

document.getElementById("adminForm").addEventListener("submit", loginAdmin);
