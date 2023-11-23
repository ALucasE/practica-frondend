import { useState } from "react";
import initialStateProduct from "../../utils/initialStateProduct";
import axios from "axios";
import { Form } from "react-bootstrap";

const types = [
  {
    value: "Service",
    name: "Service",
  },
  {
    value: "Hardware",
    name: "Hardware",
  },
  {
    value: "Software",
    name: "Software",
  },
];

function ProductsFormCreate() {
  const url = `http://localhost:5000/api/products/`;
  const [deshabilitarSubmit, setDeshabilitarSubmit] = useState(false);
  const [saveSuccessMessage, setSaveSuccessMessage] = useState(null);
  const { type } = initialStateProduct;
  //Maneja los input
  const [formData, setFormData] = useState(initialStateProduct);
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  //Enviar los datos con el back
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Envia datos al backend
      console.log(url, formData);
      await axios.post(url, formData);
      setDeshabilitarSubmit(true);
      setSaveSuccessMessage("Los datos se guardaron correctamente!");
    } catch (error) {
      console.error("Error al enviar datos modificados al backend:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input type="text" className="form-control" id="name" name="name" onChange={handleInputChange} value={formData.name} />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Precio
        </label>
        <input type="number" className="form-control" id="price" name="price" onChange={handleInputChange} value={formData.price} />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Descripción
        </label>
        <input type="text" className="form-control" id="description" name="description" onChange={handleInputChange} value={formData.description} />
      </div>
      <div className="mb-3">
        <Form.Select aria-label="Default select example" name="type" onChange={handleInputChange}>
          {type.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </Form.Select>
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
  );
}
export default ProductsFormCreate;
