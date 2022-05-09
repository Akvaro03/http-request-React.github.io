import axios from 'axios';
import { useEffect, useState } from 'react';

function usePeticion () {

    const [Items, setItems] = useState([])
    const [ItemsFiltrados, setItemsFiltrados] = useState([])

    useEffect( () =>  {
        axios.get("https://rickandmortyapi.com/api/character") 
                .then(res => res.data.results)
                .then(res => {
                    console.log("se ejecuto el hook");
                    setItems(res);
                    setItemsFiltrados(res);
                })
    }, [])

    function modificarItems(parametro) {
        setItemsFiltrados(Items.filter(dato => dato.name.includes(parametro)))
    }


    return {
        ItemsFiltrados,
        modificarItems
    }
}
export default usePeticion;