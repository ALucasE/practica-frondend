import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ModalDelete(props) {
  const [disabledButton, setDisabledButton] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const url = `http://localhost:3000/client/${id}`;
  const navigate = useNavigate();

  const eliminar = async () => {
    setDisabledButton(true);
    setError(false);

    try {
      const respuesta = await axios.delete(url);

      if (respuesta.status === 200) {
        return navigate(`/`);
      } else {
        setError("Error: No se pudo completar la eliminación");
      }
    } catch (error) {
      setError("Error: No se pudo conectar con el servidor intente mas tarde");
    }
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Nombre: {props.data}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error ? <Alert variant="danger">{error}</Alert> : <Alert variant="danger">Esta seguro que desea eliminar el cliente?</Alert>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" disabled={disabledButton} onClick={eliminar}>
          ELIMINAR
        </Button>
        <Button onClick={props.onHide}>Cancelar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDelete;
