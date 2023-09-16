import fetchData from "./fetchData.js";

type TransacaoPagamento = "Boleto" | "Cartão de Crédito";
type TransacaoStatus =
  | "Paga"
  | "Recusada pela operadora de cartão"
  | "Agurdando pagamento"
  | "Estornada";

interface TransacaoAPI {
  Nome: string;
  ID: number;
  Data: string;
  Status: TransacaoStatus;
  Email: string;
  ["Valor (R$)"]: string;
  ["Forma de Pagamento"]: TransacaoPagamento;
  ["Cliente Novo"]: number;
}

async function apiTransacao() {
  const data = await fetchData<TransacaoAPI[]>('https://api.origamid.dev/json/transacoes.json')
  if(data) {
    data.forEach(data => {
      console.log(data["Valor (R$)"])
    })
  }

}

apiTransacao()