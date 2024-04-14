import { series } from "./data.js";
var seriesTbody = document.getElementById('series');
var PromedioElm = document.getElementById("total-promedio");
function getHTMLElement(id) {
    return document.getElementById(id);
}
populateSeriesTable(series);
PromedioElm.innerHTML = "".concat(getPromedioTemporadas(series));
function createSeriesRow(serie) {
    var row = document.createElement("tr");
    row.innerHTML = "\n        <td>".concat(serie.id, "</td>\n        <td>").concat(serie.titulo, "</td>\n        <td>").concat(serie.cadena_tv, "</td>\n        <td>").concat(serie.temporadas, "</td>\n    ");
    return row;
}
function populateSeriesTable(series) {
    var _loop_1 = function (serie) {
        var row = createSeriesRow(serie);
        row.addEventListener('click', function () { return cambiarCard(serie); });
        seriesTbody.appendChild(row);
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        _loop_1(serie);
    }
}
function getPromedioTemporadas(series) {
    var promedioTemporadas = 0;
    var totalTemporadas = 0;
    series.forEach(function (serie) { return totalTemporadas = totalTemporadas + serie.temporadas; });
    promedioTemporadas = totalTemporadas / series.length;
    return promedioTemporadas;
}
function cambiarCard(serie) {
    var info = getHTMLElement("serie-info");
    info.style.display = "block";
    var cardImgElement = info.querySelector('.card-img-top');
    cardImgElement.src = serie.imagenUrl;
    var cardTituloElement = info.querySelector('.card-title');
    cardTituloElement.textContent = serie.titulo;
    var cardDescripcionElement = info.querySelector('.card-text');
    cardDescripcionElement.textContent = serie.descripcion;
    var cardLinkElement = info.querySelector('.btn-primary');
    cardLinkElement.href = serie.link;
    cardLinkElement.textContent = "Go to ".concat(serie.link);
}
