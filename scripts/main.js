import { series } from "./data.js";
var seriesTbody = document.getElementById('series');
var PromedioElm = document.getElementById("total-promedio");
function getHTML(id) {
    return document.getElementById(id);
}
renderCoursesInTable(series);
PromedioElm.innerHTML = "".concat(getPromedioTemporadas(series));
function renderCoursesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                            <td style=\"color: rgb(0, 112, 224);\">").concat(c.titulo, "</td>\n                           <td>").concat(c.cadena_tv, "</td>\n                           <td>").concat(c.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getPromedioTemporadas(series) {
    var promedioTemporadas = 0;
    var totalTemporadas = 0;
    series.forEach(function (serie) { return totalTemporadas = totalTemporadas + serie.temporadas; });
    promedioTemporadas = totalTemporadas / series.length;
    return promedioTemporadas;
}
function cambiarCard(serie) {
    var info = getHTML("serie-info");
    info.style.display = "block";
    var cardImg = info.querySelector('.card-img-top');
    var cardTitulo = info.querySelector('.card-title');
    var cardDescripcion = info.querySelector('.card-text');
    var cardLink = info.querySelector('.btn-primary');
    cardImg.src = serie.imagenUrl;
    cardTitulo.textContent = serie.titulo;
    cardDescripcion.textContent = serie.descripcion;
    cardLink.href = serie.link;
    cardLink.textContent = "Go to ".concat(serie.link);
}
