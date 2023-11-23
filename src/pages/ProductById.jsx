import { useEffect, useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import getPorductsById from "../utils/getPorductsById";

const initialState = {
  name: "",
  description: "",
  type: "",
  price: 0,
};
function ProductById() {
  const { id } = useParams();
  const [product, setProduct] = useState(initialState);
  const navigate = useNavigate();
  const volver = () => {
    navigate("/products/");
  };

  const editar = () => {
    navigate(`/products/edit/${id}`);
  };

  const obtenerProducto = () => {
    getPorductsById(id).then((producto) => {
      setProduct(producto);
    });
  };

  useEffect(() => {
    obtenerProducto();
  }, []);

  return (
    <>
      <div>
        <Card.Header className="text-center">
          <h5>Detalle del producto: {product.name}</h5>
        </Card.Header>
        <Card.Body>
          <ListGroup>
            <ListGroup.Item>Nombre: {product.name}</ListGroup.Item>
            <ListGroup.Item>Precio: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Descripción: {product.description}</ListGroup.Item>
            <ListGroup.Item>Tipo: {product.type}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button className="mx-3" variant="primary" onClick={volver}>
            volver
          </Button>
          <Button className="mx-3" variant="success" onClick={editar}>
            Editar
          </Button>
          <Button className="mx-3" variant="danger">
            Eliminar
          </Button>
        </Card.Footer>
      </div>
    </>
  );
}
export default ProductById;
