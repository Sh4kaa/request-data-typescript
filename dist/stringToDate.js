export default function stringToDate(texto) {
    const [data, tempo] = texto.split(' ');
    const [dia, mes, ano] = data.split('/').map(Number);
    const [hora, minuto] = tempo.split(':').map(Number);
    console.log(dia, mes, ano);
    console.log(hora, minuto);
    return new Date(ano, mes - 1, dia, hora, minuto);
}
//# sourceMappingURL=stringToDate.js.map