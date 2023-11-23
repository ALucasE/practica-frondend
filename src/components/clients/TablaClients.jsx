import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function TablaClintes(props) {
  const { clientes } = props;
  const navigate = useNavigate();

  const ver = (id) => {
    navigate(`/show/${id}`);
  };

  return (
    <>
      <Table striped className="text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Celular</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((item, key) => (
            <tr key={item._id}>
              <td>{key + 1}</td>
              <td>{item.name}</td>
              <td>{item.mobile}</td>
              <td colSpan={3}>
                <Button className="mx-1" variant="info" onClick={() => ver(item._id)}>
                  Ver
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default TablaClintes;
