import { Serie } from "./serie.js";
import { series } from "./data.js";


let seriesTbody: HTMLElement = document.getElementById('series')!;
const PromedioElm: HTMLElement = document.getElementById("total-promedio")!;

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

