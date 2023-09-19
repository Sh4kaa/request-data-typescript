import stringToDate from "./stringToDate.js";

declare global {
  type TransacaoPagamento = "Boleto" | "Cartão de Crédito";
  type TransacaoStatus =
    | "Paga"
    | "Recusada pela operadora de cartão"
    | "Aguardando pagamento"
    | "Estornada";

  export interface TransacaoAPI {
    Nome: string;
    ID: number;
    Data: string;
    Status: TransacaoStatus;
    Email: string;
    ["Valor (R$)"]: string;
    ["Forma de Pagamento"]: TransacaoPagamento;
    ["Cliente Novo"]: number;
  }
}
export default function normalizarTransacao(transacao: TransacaoAPI) {
  return {
    nome: transacao.Nome,
    id: transacao.ID,
    data: stringToDate(transacao.Data),
    dataNormal: transacao.Data,
    status: transacao.Status,
    email: transacao.Email,
    moeda: transacao["Valor (R$)"],
    valor: 0,
    pagamento: transacao["Forma de Pagamento"],
    novo: Boolean(transacao["Cliente Novo"])
  }
}
