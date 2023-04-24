const lista = document.querySelector("[data-lista]");

async function  eventosAgenda() {
    const conexao = await fetch ("https://api.steinhq.com/v1/storages/6446f022d27cdd09f0f07bcb/agenda");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}



function constroiCard (dia, mes, horario, titulo, descricao, img, link) {
    const evento = document.createElement("li");
    evento.className = "agenda__evento";
    evento.innerHTML = `
        <div>
            <h2>${titulo}</h2>
            <p>${descricao}</p>
        </div>
    `
}

async function listaEventos () {
    try {
        const listaApi = await eventosAgenda.listaEventos();
        listaApi.forEach (elemento => lista.appendChild(constroiCard(elemento.dia, elemento.mes, elemento.titulo, elemento.descricao,elemento.url, elemento.img, elemento.link)))
    } catch {
        lista.innerHTML= '<h2 class="mensagem__titulo"> Não foi possivel carregar a lista de vídeos</h2>';
    }
}

console.log(eventosAgenda());
listaEventos();




// <!-- <script src="https://unpkg.com/stein-js-client"></script>
//     <script>
//     const store = new SteinStore(
//         "https://api.steinhq.com/v1/storages/6446f022d27cdd09f0f07bcb"
//     );

//     store.read("agenda", { limit: 10, offset: 0 }).then(data => {
//     console.log(data);
//     });

    

//     // Logs ↓ (trimmed for brevity)
//     // [{"title":"Why the Best Things in Life Can’t Be Planned","content":"Thales of Miletus, considered ...","link":"https://medium.com/...","author":"Zat Rana"}, {...}, ...]
//     </script> -->