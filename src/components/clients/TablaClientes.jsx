import { useNavigate } from "react-router-dom";
import { useState } from "react"

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';



function TablaClintes(props) {
    const {clientes} = props
    const navigate = useNavigate();

    const ver = (id) => {
        navigate(`/show/${id}`);
    }

    const editar = (id) => {
        navigate(`/edit/${id}`);
    }

    const eliminar = (id) => {
        navigate(`/delete/${id}`);
    }

    return (
    <>
      <Table striped className="text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Celular</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody >
        {
            clientes.map((item) => (
                        <tr key={item.id}>
                            <td>{ item.id }</td>
                            <td>{ item.name }</td>
                            <td>{ item.mobile }</td>
                            <td colSpan={3} >
                                <Button className='mx-1' variant="info" onClick={() => ver(item.id)}>Ver</Button>
                                <Button className='mx-1' variant="success" onClick={() => editar(item.id)}>Editar</Button>
                                <Button className='mx-1' variant="danger" onClick={() => eliminar(item.id)}>Eliminar</Button>
                                
                            </td>
                        </tr>
                    ))
        }
        </tbody>
        
      </Table>
      
      </>
    );
  }




  export default TablaClintes;
