import Estatisticas from "./Estatisticas.js";
import fetchData from "./fetchData.js";
import normalizarTransacao from "./normalizarTransacao.js";

async function apiTransacao() {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json"
  );
  if (!data) return;

  const transacoes = data.map(normalizarTransacao);
  preencherTabela(transacoes);
  preencherEstatisticas(transacoes)
}

function preencherEstatisticas(transacoes: Transacao[]): void {
  const data = new Estatisticas(transacoes)
  const spanTotal = document.querySelector<HTMLSpanElement>('#total span')
  if(spanTotal) {
    spanTotal.innerText = data.total.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }
  console.log(data.total)
}

function preencherTabela(transacoes: Transacao[]): void {
  const tabela = document.querySelector("#transacoes tbody");
  if (!tabela) return;

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
