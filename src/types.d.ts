export interface Pelicula {
    id:id
    titulo: string;
    poster: string;
    fechaEstreno: string;
    valoracion: number;
}

export type PeliculasResponseApi = Array<{
    id:id
    titulo: string;
    poster: string;
    fechaEstreno: string;
    valoracion: number;
}>

export interface Detalle {
    id:id
    titulo: string;
    poster: string;
    fechaEstreno: string;
    valoracion: number;
}



export type DetallesResponseApi = Object<{
    id:id
    titulo: string;
    poster: string;
    fechaEstreno: string;
    valoracion: number;
}>