import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ModalEdit } from "../components/clients/ModalEdit";
import ModalDelete from "../components/clients/ModalDelete";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ShowCientPage = () => {
  const { id } = useParams();
  //   console.log("Datos de params: ", id);
  const url = `http://localhost:5000/api/clients/${id}`;

  //Modal
  const [modalShowEdit, setModalShowEdit] = useState(false);
  const [modalShowDelete, setModalShowDelete] = useState(false);

  const [cliente, setCliente] = useState({});
  const [ordenes, setOrdenes] = useState([]);

  const mostrar = async () => {
    try {
      const res = await axios.get(url);
      const { data } = res;
      setCliente(data);
      setOrdenes(data.orders);
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();
  const volver = () => {
    navigate("/");
  };

  useEffect(() => {
    mostrar();
  }, []);

  return (
    <>
      <div className="text-center">
        <Card.Header>
          <h5>Nombre: {cliente.name}</h5>
        </Card.Header>
        <Card.Body>
          <Card.Text>Celular: {cliente.mobile}</Card.Text>
          <Card.Text>Cantidad de pedidos: {ordenes.length}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button className="mx-3" variant="primary" onClick={volver}>
            volver
          </Button>
          <Button className="mx-3" variant="success" onClick={() => setModalShowEdit(true)}>
            Editar
          </Button>
          <ModalEdit show={modalShowEdit} onHide={() => setModalShowEdit(false)} />
          <Button className="mx-3" variant="danger" onClick={() => setModalShowDelete(true)}>
            Eliminar
          </Button>
          <ModalDelete data={cliente.name} show={modalShowDelete} onHide={() => setModalShowDelete(false)} />
        </Card.Footer>
      </div>
    </>
  );
};

export default ShowCientPage;
//onClick={() => editar(item.id)}
//onClick={() => eliminar(item.id)}
//onClick={() => setModalShow(true)}
