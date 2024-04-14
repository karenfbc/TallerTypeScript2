import { Serie } from "./serie.js";
import { series } from "./data.js";


let seriesTbody: HTMLElement = document.getElementById('series')!;
const PromedioElm: HTMLElement = document.getElementById("total-promedio")!;

function getHTMLElement(id: string): HTMLElement{
    return document.getElementById(id) as HTMLElement
}

renderCoursesInTable(series);
PromedioElm.innerHTML = `${getPromedioTemporadas(series)}`

function renderCoursesInTable(series: Serie[]): void {
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.id}</td>
                            <td style="color: rgb(0, 112, 224);">${c.titulo}</td>
                           <td>${c.cadena_tv}</td>
                           <td>${c.temporadas}</td>`;
        seriesTbody.appendChild(trElement);
    });
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

