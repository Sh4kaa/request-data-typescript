function filtrarValor(transacao) {
    return transacao !== null;
}
export default class Estatisticas {
    transacoes;
    total;
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
    }
    setTotal() {
        const filtrado = this.transacoes
            .filter(filtrarValor)
            .reduce((acc, currentValue) => acc + currentValue.valor, 0);
        return filtrado;
    }
}
//# sourceMappingURL=Estatisticas.js.map