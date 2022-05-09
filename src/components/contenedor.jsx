import React from 'react'
import usePeticion from '../hooks/usePeticion';
import Caard from './card.jsx';
import "./content.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormControl, InputGroup } from 'react-bootstrap';


function Contenedor(){
    const {ItemsFiltrados, modificarItems} = usePeticion()
    console.log(ItemsFiltrados);
    return (
        <>
            <InputGroup className="mb-3 input pt-4">
                <FormControl onChange={e => modificarItems(e.target.value) } 
                    placeholder="Personajes"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
            </InputGroup>
            <div className="contenedorPrincipal">
                {ItemsFiltrados.map((dato,index) => <Caard item={dato} key={index}/>)}
            </div>
        </>
    )
}

export default Contenedor;