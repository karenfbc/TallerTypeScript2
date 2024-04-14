import { Serie } from "./serie.js";
import { series } from "./data.js";


let seriesTbody: HTMLElement = document.getElementById('series')!;
const PromedioElm: HTMLElement = document.getElementById("total-promedio")!;

function getHTMLElement(id: string): HTMLElement{
    return document.getElementById(id) as HTMLElement
}

populateSeriesTable(series)
PromedioElm.innerHTML = `${getPromedioTemporadas(series)}`

function createSeriesRow(serie: Serie): HTMLTableRowElement {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${serie.id}</td>
        <td>${serie.titulo}</td>
        <td>${serie.cadena_tv}</td>
        <td>${serie.temporadas}</td>
    `;
    return row;
}



function populateSeriesTable(series: Serie[]): void {
    for (let serie of series) {
        const row = createSeriesRow(serie);
        row.addEventListener('click', () => cambiarCard(serie));
        seriesTbody.appendChild(row);
    }
}

function getPromedioTemporadas(series: Serie[]): number {
    let promedioTemporadas: number = 0;
    let totalTemporadas: number = 0;
    series.forEach((serie) => totalTemporadas = totalTemporadas + serie.temporadas);
    promedioTemporadas = totalTemporadas / series.length;
    return promedioTemporadas;
  }

  function cambiarCard(serie: Serie): void {

    const info = getHTMLElement("serie-info");
    info.style.display ="block";

    const cardImgElement = info.querySelector('.card-img-top') as HTMLImageElement;
    cardImgElement.src = serie.imagenUrl; 

    const cardTituloElement = info.querySelector('.card-title') as HTMLElement;
    cardTituloElement.textContent = serie.titulo;

    const cardDescripcionElement = info.querySelector('.card-text') as HTMLElement;
    cardDescripcionElement.textContent = serie.descripcion;

    const cardLinkElement = info.querySelector('.btn-primary') as HTMLAnchorElement;
    cardLinkElement.href = serie.link; 
    cardLinkElement.textContent = `Go to ${serie.link}`; 
}

