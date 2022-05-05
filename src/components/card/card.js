import React, { useState } from 'react';
import './card.css';
import { Card, Button, Modal } from 'react-bootstrap';

function Caard (props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
        let item = props.item;
        let foto = props.item.image;
        return (
            <div className="contenedor">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={foto} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            Estado: {item.status}
                        </Card.Text>
                        <Button variant="primary" onClick={handleShow}>Mas información</Button>
                    </Card.Body>
                </Card>   

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>{item.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>

            </div>   
                

        )
}

export default Caard;