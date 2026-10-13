# AluraMinecraftWiki

### **Pesquisador de Itens do Minecraft: Sua Enciclopédia de Blocos e Ferramentas!**

**O que é?**

Este projeto é um aplicativo web simples, mas poderoso, que te ajuda a encontrar qualquer item do Minecraft em segundos. Basta digitar o nome do item que você está procurando e pronto! Você terá acesso a informações detalhadas, como:

* **Descrição:** Saiba tudo sobre o item, desde sua função até suas propriedades.
* **Tipo:** Descubra se é um bloco, ferramenta, alimento, etc.
* **Material:** Entenda de que o item é feito.
* **Dificuldade de obtenção:** Avalie se o item é fácil ou difícil de encontrar.
* **Como obter:** Saiba onde encontrar o item no mundo do Minecraft.
* **Utilidades:** Descubra para que serve o item e como utilizá-lo.
* **Receitas de fabricação:** Pesquise pelo resultado ou por um ingrediente e veja a disposição dos materiais, a estação necessária e a quantidade produzida.

**Como funciona?**

1. **Digite o nome do item:** Use a barra de pesquisa para digitar o nome do item que você procura.
2. **Obtenha resultados instantâneos:** A aplicação irá procurar por todos os itens que correspondam à sua pesquisa e exibir os resultados de forma clara e organizada.
3. **Explore os detalhes:** Clique em um item para ver todas as informações relevantes.
4. **Pesquise receitas:** Use a seção Receitas de fabricação para buscar pelo resultado ou por um ingrediente. A pesquisa aceita nomes com ou sem acentos.

**Tecnologias utilizadas:**

* **HTML:** A estrutura básica da página.
* **CSS:** Estiliza a página, deixando-a com uma aparência agradável e fácil de usar.
* **JavaScript:** Adiciona interatividade à página, permitindo a pesquisa e a exibição dos resultados.

**Como usar este projeto:**

1. **Clone o repositório:** Faça um clone deste repositório para o seu computador local.
2. **Abra o arquivo index.html:** Abra o arquivo index.html em um navegador web.
3. **Comece a pesquisar:** Utilize a barra de pesquisa para encontrar os itens que você deseja.

**Contribuições:**

Se você quiser contribuir para este projeto, fique à vontade para criar um fork e enviar um pull request. Qualquer ajuda é bem-vinda!

**Observações:**

* **Dados:** Os dados dos itens do Minecraft foram obtidos de https://pt.minecraft.wiki.
* **Personalização:** Sinta-se à vontade para personalizar o visual e as funcionalidades da aplicação.
* **Adicionar novos itens de pesquisa:** Edite `dados.js` e siga o formato dos itens existentes.
* **Adicionar receitas:** Edite `receitas.js`. Cada receita informa `item`, `quantidadeSaida`, `estacao` e uma `grade` em ordem da esquerda para a direita e de cima para baixo. Use 9 posições para uma bancada 3×3; para a grade 2×2 do inventário, use 4 posições e `colunas: 2`. Use `null` para espaços vazios. Marque `formato: "livre"` quando a posição dos ingredientes não importar.
