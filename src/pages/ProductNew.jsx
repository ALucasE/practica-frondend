import { Card } from "react-bootstrap";
import ProductsFormCreate from "../components/products/ProductsFormCreate";
import { useNavigate } from "react-router";

function ProductNew() {
  const navigate = useNavigate();
  const volver = () => {
    navigate(`/products`);
  };
  return (
    <>
      <Card.Header className="text-center">
        <h5>Agregar un producto</h5>
      </Card.Header>
      <Card.Body>
        <ProductsFormCreate />
      </Card.Body>
      <Card.Footer>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-secondary" onClick={volver}>
            Volver
          </button>
        </div>
      </Card.Footer>
    </>
  );
}
export default ProductNew;
