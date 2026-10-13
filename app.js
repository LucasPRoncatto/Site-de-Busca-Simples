function pesquisar() {
    const section = document.getElementById("resultados-pesquisa");
    const consulta = document
        .getElementById("campo-pesquisa")
        .value
        .trim()
        .toLocaleLowerCase("pt-BR");

    if (!consulta) {
        section.innerHTML = "<p class=\"mensagem-vazia\">Digite o nome de um item para pesquisar.</p>";
        return;
    }

    const resultadosEncontrados = dados.filter(dado =>
        dado.titulo.toLocaleLowerCase("pt-BR").includes(consulta)
    );

    if (resultadosEncontrados.length === 0) {
        section.innerHTML = "<p class=\"mensagem-vazia\">Nenhum item encontrado com esse nome.</p>";
        return;
    }

    section.innerHTML = resultadosEncontrados.map(dado => `
        <article class="item-resultado">
            <h2>
                <img src="${dado.imagem}" class="imagem" alt="" width="100" height="100" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.hidden=true">
                <a href="${dado.link}" target="_blank" rel="noopener noreferrer">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <h3>Informações adicionais</h3>
            <p><strong>Tipo:</strong> ${dado.tipo}</p>
            <p><strong>Material:</strong> ${dado.material}</p>
            <p><strong>Dificuldade:</strong> ${dado.dificuldade}</p>
            <p><strong>Obtenção:</strong> ${dado.obtencao}</p>
            <p><strong>Uso:</strong> ${dado.uso}</p>
        </article>
    `).join("");
}

function pesquisarReceitas() {
    const section = document.getElementById("resultados-receitas");
    const consulta = normalizarTexto(document.getElementById("campo-receitas").value);

    if (!consulta) {
        section.innerHTML = '<p class="mensagem-vazia">Digite um item ou ingrediente para pesquisar receitas.</p>';
        return;
    }

    const resultados = receitas.filter(receita => {
        const textoPesquisavel = [
            receita.item,
            receita.estacao,
            ...receita.grade.filter(Boolean)
        ].join(" ");

        return normalizarTexto(textoPesquisavel).includes(consulta);
    });

    if (resultados.length === 0) {
        section.innerHTML = '<p class="mensagem-vazia">Nenhuma receita encontrada. Tente pesquisar pelo nome do resultado ou de um ingrediente.</p>';
        return;
    }

    section.innerHTML = resultados.map(renderizarReceita).join("");
}

function renderizarReceita(receita) {
    const colunas = receita.colunas || 3;
    const nomesIngredientes = receita.grade.filter(Boolean).join(", ");
    const celulas = receita.grade.map(ingrediente => {
        if (!ingrediente) {
            return '<span class="celula-receita celula-vazia" aria-hidden="true"></span>';
        }

        const nomeSeguro = escaparHTML(ingrediente);
        return `<span class="celula-receita" title="${nomeSeguro}">${nomeSeguro}</span>`;
    }).join("");

    return `
        <article class="receita-resultado">
            <div class="cabecalho-receita">
                <h3>${escaparHTML(receita.item)}</h3>
                <span class="quantidade-saida">${receita.quantidadeSaida} ${receita.quantidadeSaida === 1 ? "unidade" : "unidades"}</span>
            </div>
            <div class="detalhes-receita">
                <div class="grade-receita grade-${colunas}x${colunas}" role="img" aria-label="Receita de ${escaparHTML(receita.item)}. Ingredientes: ${escaparHTML(nomesIngredientes)}">
                    ${celulas}
                </div>
                <div class="saida-receita" aria-hidden="true">➜</div>
                <div class="resultado-receita">
                    <span class="rotulo-receita">Resultado</span>
                    <strong>${escaparHTML(receita.item)}</strong>
                    <span>${receita.quantidadeSaida} ${receita.quantidadeSaida === 1 ? "unidade" : "unidades"}</span>
                </div>
            </div>
            <p class="estacao-receita"><strong>Estação:</strong> ${escaparHTML(receita.estacao)}</p>
            <p class="legenda-receita">${receita.formato === "livre" ? "Os ingredientes podem ser colocados em qualquer posição." : "A posição dos ingredientes na grade faz parte da receita."}</p>
        </article>
    `;
}

function normalizarTexto(texto) {
    return texto
        .trim()
        .toLocaleLowerCase("pt-BR")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function escaparHTML(texto) {
    return String(texto).replace(/[&<>"']/g, caractere => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[caractere]);
}

document.getElementById("form-pesquisa-itens").addEventListener("submit", evento => {
    evento.preventDefault();
    pesquisar();
});

document.getElementById("form-pesquisa-receitas").addEventListener("submit", evento => {
    evento.preventDefault();
    pesquisarReceitas();
});
