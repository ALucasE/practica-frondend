import { useEffect, useState } from "react";
import initialStateProduct from "../../utils/initialStateProduct";
import getPorductsById from "../../utils/getPorductsById";
import axios from "axios";
import { Form } from "react-bootstrap";

function ProductsFormEdit(props) {
  const { productId } = props;
  const { type } = initialStateProduct;
  const url = `http://localhost:5000/api/products/${productId}`;
  const [formData, setFormData] = useState(initialStateProduct);
  const [deshabilitarSubmit, setDeshabilitarSubmit] = useState(false);
  const [saveSuccessMessage, setSaveSuccessMessage] = useState(null);

  // Obtener datos del backend
  const obtenerProducto = () => {
    getPorductsById(productId).then((producto) => {
      setFormData(producto);
    });
  };

  useEffect(() => {
    obtenerProducto();
  }, []);

  //Maneja los input
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  //Actualiza los datos con el back
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Hacer una solicitud al backend para enviar los datos modificados
      await axios.put(url, formData);
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
        <label htmlFor="price" className="form-label">
          Precio
        </label>
        <input
          type="number"
          className="form-control"
          id="price"
          name="price"
          onInput={handleInputChange}
          defaultChecked={formData.price}
          value={formData.price}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Descripcion
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          onInput={handleInputChange}
          defaultChecked={formData.description}
          value={formData.description}
        />
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

export default ProductsFormEdit;
