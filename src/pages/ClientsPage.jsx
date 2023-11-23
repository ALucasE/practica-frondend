import { useEffect, useState } from "react";
import TablaClientes from "../components/clients/TablaClients";
import { Card } from "react-bootstrap";
import axios from "axios";
import FormClientes from "../components/clients/FormClientes";

const ClientsPage = () => {
  const [clientes, setClientes] = useState([]);
  const url = "http://localhost:5000/api/clients";

  const cargarClientes = async () => {
    const res = await axios.get(url);
    setClientes(res.data);
  };

  useEffect(() => {
    cargarClientes();
  }, []);

  return (
    <>
      <Card.Header>
        <h1>Clientes</h1>
      </Card.Header>
      <Card.Title>
        <FormClientes />
      </Card.Title>
      <Card.Body>
        <TablaClientes clientes={clientes} />
      </Card.Body>
    </>
  );
};

export default ClientsPage;
