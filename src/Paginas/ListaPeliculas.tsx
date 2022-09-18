import {useState, useEffect} from 'react';
import {Pelicula,PeliculasResponseApi} from '../types';
import { Link } from "react-router-dom";


const ListaPeliculas = () => {

    interface AppState{
        peliculas: Array<Pelicula>;
    }

    const [peliculas, setPeliculas] = useState<AppState["peliculas"]>([]);

const urlPoster="https://image.tmdb.org/t/p/original/"

useEffect(() =>{
    const fetchPeliculas = (): Promise<PeliculasResponseApi> => {
    return fetch('http://127.0.0.1:8000/peliculas',{
        method:"GET",
        mode:"cors",
    }).then(res=>res.json());
    }

    fetchPeliculas()
    .then(peliculas => {
        setPeliculas(peliculas)
    })
},[])


return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-24 mx-16'>
        {
            peliculas.map(pelicula => {
                return(
                    <div>
                        
                            <div  >
                                <Link to={`/pelicula/${pelicula.id}`}>
                                    <img  src={urlPoster + pelicula.poster} alt={pelicula.titulo}/>
                                </Link>
                                <p className='text-yellow-500 mt-8'>{pelicula.titulo}</p>
                            </div>
                        
                    </div>
                )
            })
        }
    </div>
)
}

export default ListaPeliculas