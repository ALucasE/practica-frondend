import { Card } from "react-bootstrap";
import ProductsTabla from "../components/products/ProductsTabla";
import { useNavigate } from "react-router";

const ProductsPage = () => {
  const navigate = useNavigate();
  const AgregarProducto = () => {
    navigate("/products/new/");
  };
  return (
    <>
      <Card.Header>
        <h1>Productos</h1>
      </Card.Header>
      <Card.Title>
        <button type="button" className="btn btn-primary mt-3 ms-3" onClick={AgregarProducto}>
          Agregar un producto
        </button>
      </Card.Title>
      <Card.Body>
        <ProductsTabla />
      </Card.Body>
    </>
  );
};

export default ProductsPage;
