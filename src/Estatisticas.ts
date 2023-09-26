import countBy from "./countBy.js";

type TransacaoValor = Transacao & { valor: number };
function filtrarValor(transacao: Transacao): transacao is TransacaoValor {
  return transacao !== null;
}

export default class Estatisticas {
  private transacoes;
  total;
  pagamento;
  status;
  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
    this.pagamento = this.setPagamento();
    this.status = this.setStatus();
  }

  private setTotal() {
    const filtrado = this.transacoes
      .filter(filtrarValor)
      .reduce((acc, currentValue) => acc + currentValue.valor, 0);
    return filtrado;
  }

  private setPagamento() {
    return countBy(this.transacoes.map(({ pagamento }) => pagamento));
  }
  private setStatus() {
    return countBy(this.transacoes.map(({ status }) => status))
  }
}
