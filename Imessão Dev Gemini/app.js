// Selecionando os elementos do DOM
const buscaInput = document.querySelector('input[name="busca"]');
const resultadosDiv = document.querySelector('.resultados-pesquisa');

// Função para criar um elemento HTML para cada personagem
function criarElementoPersonagem(personagem) {
    const div = document.createElement('div');
    div.classList.add('item-resultado');

    div.innerHTML = `
        <div class="informacoes">
            <h2>${personagem.titulo}</h2>
            <p class="descricao-meta">${personagem.descricao}</p>
            <a href="${personagem.link}" target="_blank">Mais informações</a>
        </div>
        <div class="imagem">
            <img src="${personagem.imagem}" alt="Retrato de ${personagem.titulo}" width="200" height="200">
        </div>
    `;

    return div;
}

// Função para renderizar todos os personagens na página
function renderizarPersonagens(personagens) {
    resultadosDiv.innerHTML = ''; // Limpar os resultados anteriores

    personagens.forEach(personagem => {
        resultadosDiv.appendChild(criarElementoPersonagem(personagem));
    });
}

// Função para filtrar os personagens com base na busca
function filtrarPersonagens(textoBusca) {
    const personagensFiltrados = dados.filter(personagem => {
        // Busca exata no título do personagem (case-insensitive)
        return personagem.titulo.toLowerCase().includes(textoBusca.toLowerCase());
    });

    // Renderiza apenas o primeiro resultado (se existir)
    if (personagensFiltrados.length > 0) {
        renderizarPersonagens(personagensFiltrados);
    } else {
        // Exibe uma mensagem caso não seja encontrado nenhum resultado
        resultadosDiv.innerHTML = '<p class="sem-resultados">A entidade de Conhecimento não encontrou nenhum personagem.</p>';
    }
}

// Chamar a função para renderizar os personagens inicialmente
renderizarPersonagens(dados);

// Adicionar um event listener ao campo de busca
buscaInput.addEventListener('input', () => {
    const textoBusca = buscaInput.value;
    filtrarPersonagens(textoBusca);
});

// funcionalidade do botão X na barra de pesquisa

const limparBusca = document.querySelector('.limpar-busca');

limparBusca.addEventListener('click', () => {
    buscaInput.value = '';
});