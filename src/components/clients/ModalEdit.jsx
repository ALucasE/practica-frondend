import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function ModalEdit(props) {
  const { id } = useParams();
  const url = `http://localhost:5000/api/clients/${id}`;
  const [deshabilitarSubmit, setDeshabilitarSubmit] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
  });
  //   const [validationError, setValidationError] = useState(null);
  const [saveSuccessMessage, setSaveSuccessMessage] = useState(null);

  // Obtener datos del backend al cargar el componente
  useEffect(() => {
    traerDatos();
  }, []);

  const traerDatos = async () => {
    try {
      // Hacer una solicitud al backend para obtener los datos
      const response = await axios.get(url);
      // Actualizar el estado con los datos del backend
      setFormData(response.data);
    } catch (error) {
      console.error("Error al obtener datos del backend:", error);
    }
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Hacer una solicitud al backend para enviar los datos modificados
      await axios.put(url, formData);
      setDeshabilitarSubmit(true); //Esconde el boton de guardar
      setSaveSuccessMessage("Los datos se guardaron correctamente!");
    } catch (error) {
      console.error("Error al enviar datos modificados al backend:", error);
    }
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modidicar Cliente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Ingrese el nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              onInput={handleInputChange}
              defaultChecked={formData.name}
              value={formData.name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">
              Celular
            </label>
            <input
              type="namber"
              className="form-control"
              id="mobile"
              name="mobile"
              onInput={handleInputChange}
              defaultChecked={formData.mobile}
              value={formData.mobile}
            />
          </div>
          <button hidden={deshabilitarSubmit} type="submit" className="btn btn-primary">
            Guardar
          </button>
          {saveSuccessMessage && (
            <div className="alert alert-success" role="alert">
              {saveSuccessMessage}
            </div>
          )}
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}
