import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Caard from './card/card'
import 'bootstrap/dist/css/bootstrap.min.css';
import './card/content.css';
import { InputGroup, FormControl } from 'react-bootstrap';
import {IoCloseOutline} from "react-icons/io5";


function Contenedores (Valor) {
    const [Items, setItems] = useState([])
    const [ItemsFiltrados, setItemsFiltrados] = useState([])


    useEffect( () =>  {
        axios.get("https://rickandmortyapi.com/api/character/?page=1") 
                .then(res => res.data.results)
                .then(res => {
                    setItems(res);
                    setItemsFiltrados(res);
                })

    }, [Valor])

    // setItems(allItems.filter(item => item.name.includes(event.target.value)))

    return(
        <>
        <InputGroup className="mb-3 input pt-4">
            <FormControl onChange={event => setItemsFiltrados(Items.filter(item => item.name.includes(event.target.value)))} 
              placeholder="Personajes"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              
            />
            <IoCloseOutline></IoCloseOutline>
        </InputGroup>

        <div className="contenedorPrincipal">
        {ItemsFiltrados.map((dato,index) => <Caard item={dato} key={index}/>)}
        </div>
        </>
        
    )
}   


export default Contenedores;