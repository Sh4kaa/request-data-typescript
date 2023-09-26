import countBy from "./countBy.js";
function filtrarValor(transacao) {
    return transacao !== null;
}
export default class Estatisticas {
    transacoes;
    total;
    pagamento;
    status;
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
        this.pagamento = this.setPagamento();
        this.status = this.setStatus();
    }
    setTotal() {
        const filtrado = this.transacoes
            .filter(filtrarValor)
            .reduce((acc, currentValue) => acc + currentValue.valor, 0);
        return filtrado;
    }
    setPagamento() {
        return countBy(this.transacoes.map(({ pagamento }) => pagamento));
    }
    setStatus() {
        return countBy(this.transacoes.map(({ status }) => status));
    }
}
//# sourceMappingURL=Estatisticas.js.map