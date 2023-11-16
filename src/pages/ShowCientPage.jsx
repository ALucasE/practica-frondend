import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios"

const ShowCientPage = ()=>{
    const { id } = useParams();
    const url = `https://jsonplaceholder.typicode.com/users/${id}`

    console.log(url)
    const [cliente, setCliente] = useState({});
    const [direccion, setDireccion] = useState([]);

    const mostrar = async ()=>{
        try {
            const {data} = await axios.get(url)
            console.log(data)
            setCliente(data)
            setDireccion(data.address)

        } catch (error) {
            console.error(error)
        }
    }
    
    const navigate = useNavigate();
    const volver = () => {
        navigate('/');
    }
    
    useEffect(()=>{
        mostrar()
    },[])

    return(
        < >
        <div className="text-center">
            <Card.Header><h5>Nombre: {cliente.name}</h5></Card.Header>
            <Card.Body>
                <Card.Text>Celular: {cliente.phone}</Card.Text>
                <Card.Text>
                Cuerpo: {`La direccion es en la calle ${direccion.street} en la ciudad ${direccion.city}`}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <Button className='mx-3' variant="primary" onClick={volver}>volver</Button>
                <Button className='mx-3' variant="success" >Editar</Button>
                <Button className='mx-3' variant="danger" >Eliminar</Button>
            </Card.Footer>
        </div>
        </>
        
    )
}

export default ShowCientPage
//onClick={() => editar(item.id)}
//onClick={() => eliminar(item.id)}