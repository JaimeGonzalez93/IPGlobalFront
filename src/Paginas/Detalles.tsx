import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {DetallesResponseApi} from '../types';
import FormularioValoracion from './FormularioValoracion';



const Detalles = () => {

  const {id} = useParams();

  const [detallePelicula, setDetallePelicula] = useState<any>([]);
  

  const urlPoster="https://image.tmdb.org/t/p/original/"

  useEffect(() => {
    const fetchDetalles = () : Promise<DetallesResponseApi> => {
      return fetch(`http://127.0.0.1:8000/pelicula/${id}`,{
          method:"GET",
          mode:"cors",
      }).then(res=>res.json());
      }

      fetchDetalles()
      .then(detalleApi => {setDetallePelicula(detalleApi)})
    
  },[id])

  return (
    <div>
      <p className='my-16 text-yellow-500 text-4xl'>{detallePelicula.titulo}</p>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-2 lg:gap-4 mx-20'>
        <div className='w-60 md:mx-6 md:w-3/5'>
          <img  src={urlPoster + detallePelicula.poster} alt={detallePelicula.titulo}className='mb-32'/>
        </div>
        <div className=''>
          <p className='text-white text-3xl text-left my-14'>Fecha de estreno: {detallePelicula.fechaEstreno}</p>
          <p className='text-white text-3xl text-left my-14'>Valoración: {detallePelicula.valoracion}</p>
          <FormularioValoracion/>
        </div>
      </div>
    </div>
  )
}

export default Detalles