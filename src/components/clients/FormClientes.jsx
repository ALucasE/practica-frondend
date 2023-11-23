import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

function FormClientes() {
  const [nuevoRegistro, setNuevoRegistro] = useState({
    name: "",
    mobile: "",
  });
  const url = "http://localhost:5000/api/clients";
  const [validationError, setValidationError] = useState(null);
  const [saveSuccessMessage, setSaveSuccessMessage] = useState(null);

  const handleInputChange = (event) => {
    setNuevoRegistro({
      ...nuevoRegistro,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    if (!nuevoRegistro.name || !nuevoRegistro.mobile) {
      setValidationError("Los campos no pueden estar vacíos.");
      return false;
    }
    setValidationError(null);
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await axios.post(url, nuevoRegistro);
      setSaveSuccessMessage("¡Nuevo registro añadido correctamente!");
      // Limpia los campos después de la inserción exitosa
      setNuevoRegistro({
        name: "",
        mobile: "",
      });
    } catch (error) {
      setValidationError(error.response.data.msg);
      console.error("Error al añadir nuevo registro:", error);
    }
  };

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="text-center">Agregar cliente</Accordion.Header>
        <Accordion.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control name="name" type="text" placeholder="Ingrese el nombre" value={nuevoRegistro.name} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Celular</Form.Label>
              <Form.Control
                type="number"
                name="mobile"
                placeholder="ingrese el numero de celular sin 0 y sin 15"
                value={nuevoRegistro.mobile}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
            {validationError && (
              <div className="alert alert-danger mt-2" role="alert">
                {validationError}
              </div>
            )}
            {saveSuccessMessage && (
              <div className="alert alert-success mt-2" role="alert">
                {saveSuccessMessage}
              </div>
            )}
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FormClientes;
