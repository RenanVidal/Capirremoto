import {conectaApi} from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard (dia, mes, horario, titulo, descricao, img, link) {
    const evento = document.createElement("li");
    evento.className = "agenda__evento";
    evento.innerHTML = `
        <div>
            <h2 class="agenda__titulo">${titulo}</h2>
            <p class="agenda__descricao">${descricao}</p>
            <p class="agenda__eventos"><strong>${dia} ${mes}</strong> ${horario} </p>
            <a class="agenda__link" href="${link}"><i class="ri-twitch-fill"></i>/capirremoto</a>
        </div>
    `;
    return evento;
}

async function listaEventos () {
    try {
        const listaApi = await conectaApi.listaEventos();
        listaApi.forEach (elemento => lista.appendChild(constroiCard(elemento.dia, elemento.mes, elemento.horario, elemento.titulo, elemento.descricao, elemento.img, elemento.link)))
        console.log(listaApi);
    } catch {
        lista.innerHTML= '<h2 class="mensagem__titulo"> Não foi possivel carregar a lista de vídeos</h2>';
    }
}

listaEventos();