import { Card } from "react-bootstrap";
import ProductsFormEdit from "../components/products/ProductsFormEdit";
import { useNavigate, useParams } from "react-router";

function ProductEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const volver = () => {
    navigate(`/products/${id}`);
  };
  return (
    <>
      <Card.Header className="text-center">
        <h5>Editar producto</h5>
      </Card.Header>
      <Card.Body>
        <ProductsFormEdit productId={id} />
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
export default ProductEdit;
