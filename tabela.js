function carregarInformacao(info) {
    var infos = {
        1: { nome: "Nome 01", email: "email01@example.com", nascimento: "01/01/2000", telefone: "(123) 456-7890" },
        2: { nome: "Nome 02", email: "email02@example.com", nascimento: "02/02/2000", telefone: "(123) 456-7890" },
        3: { nome: "Nome 03", email: "email03@example.com", nascimento: "03/03/2000", telefone: "(123) 456-7890" },
        4: { nome: "Nome 04", email: "email04@example.com", nascimento: "04/04/2000", telefone: "(123) 456-7890" }
    };

    var selectedInfo = infos[info];

    document.getElementById("nome").textContent = selectedInfo.nome;
    document.getElementById("email").textContent = selectedInfo.email;
    document.getElementById("nascimento").textContent = selectedInfo.nascimento;
    document.getElementById("telefone").textContent = selectedInfo.telefone;
}

carregarInformacao(1);