function inicializarDadosIniciais() {
    const dadosArmazenados = localStorage.getItem('cadastro');

    if (!dadosArmazenados) {
        // Preencha os dados iniciais no índice 1
        const dadosIniciais = {
            1: { nome: "Fulano Beltrano de Oliveira da Silva", email: "fulanobos@gmail.com", nascimento: "1995-09-13", telefone: "31 99666-1111" }
        };

        // Armazene os dados iniciais no localStorage
        localStorage.setItem('cadastro', JSON.stringify(dadosIniciais));
    }
}


inicializarDadosIniciais();


function armazenarCadastro() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const nascimento = document.getElementById('nascimento').value;
    const telefone = document.getElementById('telefone').value;

    // Recupera os dados já armazenados
    const dadosArmazenados = localStorage.getItem('cadastro');
    let dados = {};

    if (dadosArmazenados) {
        dados = JSON.parse(dadosArmazenados);
    }

    // Encontra o próximo índice disponível
    let proximoIndice = 1;
    while (dados[proximoIndice]) {
        proximoIndice++;
    }

    // Adiciona os dados ao próximo índice disponível
    dados[proximoIndice] = { nome, email, nascimento, telefone };

    // Armazena os dados atualizados no localStorage
    localStorage.setItem('cadastro', JSON.stringify(dados));
    console.log('Cadastro armazenado localmente:', dados);

    // Atualiza a tabela após cadastrar
    preencherTabela()
    preencherTabelaMobile();
}
function preencherTabela() {
    // Recupera os dados do localStorage
    const dadosArmazenados = localStorage.getItem('cadastro');

    if (dadosArmazenados) {
        const dados = JSON.parse(dadosArmazenados);

        // Loop para preencher cada linha da tabela
        for (let i = 1; i <= 4; i++) {
            const linha = document.querySelector(`.table table tr:nth-child(${i + 1})`);

            if (linha) {
                const info = dados[i];

                if (info) {
                    linha.cells[1].textContent = info.nome || '';
                    linha.cells[2].textContent = info.email || '';
                    linha.cells[3].textContent = info.nascimento || '';
                    linha.cells[4].textContent = info.telefone || '';

                    console.log(`Preenchendo linha ${i + 1} com dados:`, info);
                } else {
                    console.log(`Nenhum dado encontrado para linha ${i + 1}`);
                }
            } else {
                console.log(`Linha ${i + 1} não encontrada`);
            }
        }
    } else {
        console.log('Nenhum dado armazenado no localStorage.');
    }
}

// Chama a função para preencher a tabela ao carregar a página
preencherTabela();



function preencherTabelaMobile() {
    const dadosArmazenados = localStorage.getItem('cadastro');

    if (dadosArmazenados) {
        const dados = JSON.parse(dadosArmazenados);

        // Preenche as células da tabela com os dados
        document.getElementById("nome").textContent = dados['1'].nome;
        document.getElementById("email").textContent = dados['1'].email;
        document.getElementById("nascimento").textContent = dados['1'].nascimento;
        document.getElementById("telefone").textContent = dados['1'].telefone;
    }
}
function carregarInformacao(info) {
    // Recupera os dados do localStorage
    const dadosArmazenados = localStorage.getItem('cadastro');

    if (dadosArmazenados) {
        const infos = JSON.parse(dadosArmazenados);
        const selectedInfo = infos[info];

        // Verifica se existe uma entrada para o índice fornecido
        if (selectedInfo) {
            // Adiciona ou atualiza os dados na tabela
            const tabela = document.getElementById("table-mobile");

            // Percorre as células da tabela e atualiza com as informações
            for (let i = 0; i < tabela.rows.length; i++) {
                const celula = tabela.rows[i].cells[1];  // Usa cells[1] para pegar a segunda célula (índice 1)
                const campo = Object.keys(selectedInfo)[i];  // Obtém o nome do campo correspondente ao índice

                // Atualiza o conteúdo da célula com base no campo
                if (celula && campo) {
                    celula.textContent = selectedInfo[campo];
                }
            }
        } else {
            console.log(`Nenhuma informação encontrada para o índice ${info}.`);
        }
    } else {
        console.log('Nenhum dado armazenado');
    }
}

// Carrega a informação inicial
carregarInformacao(1);
