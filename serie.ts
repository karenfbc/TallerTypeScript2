export class Serie {
    id: number;
    titulo: string;
    cadena_tv: string;
    temporadas: number;
    descripcion: string;
    link: string;
    imagenUrl: string;

    constructor(id: number, titulo: string, cadena_tv: string, temporadas: number, descripcion: string, link: string, imagenUrl: string) {
        this.id = id;
        this.titulo = titulo;
        this.cadena_tv = cadena_tv;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.link = link;
        this.imagenUrl = imagenUrl;
    }
}