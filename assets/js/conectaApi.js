async function listaEventos () {
    const conexao = await fetch ("https://api.steinhq.com/v1/storages/6446f022d27cdd09f0f07bcb/agenda");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaApi = {
    listaEventos
}