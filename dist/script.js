import Estatisticas from "./Estatisticas.js";
import fetchData from "./fetchData.js";
import normalizarTransacao from "./normalizarTransacao.js";
async function apiTransacao() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json");
    if (!data)
        return;
    const transacoes = data.map(normalizarTransacao);
    preencherTabela(transacoes);
    preencherEstatisticas(transacoes);
}
function preencherLista(lista, containerId) {
    const pagamentoElement = document.getElementById(containerId);
    if (pagamentoElement) {
        Object.keys(lista).forEach((key) => {
            pagamentoElement.innerHTML += `<p>${key}: ${lista[key]}</p>`;
        });
    }
}
function preencherEstatisticas(transacoes) {
    const data = new Estatisticas(transacoes);
    preencherLista(data.pagamento, "pagamento");
    preencherLista(data.status, "status");
    const spanTotal = document.querySelector("#total span");
    if (spanTotal) {
        spanTotal.innerText = data.total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }
    const dia = document.querySelector("#dia span");
    if (dia) {
        dia.innerText = data.melhorDia[0];
    }
}
function preencherTabela(transacoes) {
    const tabela = document.querySelector("#transacoes tbody");
    if (!tabela)
        return;
    transacoes.forEach((transacao) => {
        tabela.innerHTML += `
      <tr>
        <td>${transacao.nome}</td>
        <td>${transacao.email}</td>
        <td>R$ ${transacao.moeda}</td>
        <td>${transacao.pagamento}</td>
        <td>${transacao.status}</td>
      </tr>
    
    `;
    });
}
apiTransacao();
//# sourceMappingURL=script.js.map