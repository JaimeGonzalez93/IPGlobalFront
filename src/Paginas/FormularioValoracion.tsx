import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FormularioValoracion = () => {

    const URL = "a"
    const [inputValues, setInputValues] = useState({})

    const handleSubmit = (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        event.preventDefault()
        EnviarValoracion();
    }

    const EnviarValoracion = () => {
            axios.post(URL, 
                {valoracion: inputValues},
                {headers: {
                    mode: "cors"
                }}
                )
    }

    const handleChange = (e: React.ChangeEvent<HTMLFormElement | HTMLInputElement>) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
            })
    }

    return (
    <div className='text-white text-3xl text-left my-14'>
        <form onSubmit={handleSubmit}>
            <label >
                Valorar:
                <input 
                type='number'
                name='valoracion'
                onChange= {handleChange}
                className='rounded mx-14 bg-yellow-500 text-black text-xl placeholder-gray-500 text-center' 
                placeholder='Valora aquí'
                />
            </label>

            <button type="submit" 
            className="text-black bg-yellow-500 hover:bg-yellow-200 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2"
            > Valorar </button>
        </form>
    </div>
    )
}

export default FormularioValoracion