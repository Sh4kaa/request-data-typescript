import fetchData from "./fetchData.js";
async function apiTransacao() {
    const data = await fetchData('https://api.origamid.dev/json/transacoes.json');
    if (data) {
        data.forEach(data => {
            console.log(data["Valor (R$)"]);
        });
    }
}
apiTransacao();
//# sourceMappingURL=script.js.map