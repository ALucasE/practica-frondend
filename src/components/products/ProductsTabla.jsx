import { Button, Table } from "react-bootstrap";
import getAllPorducts from "../../utils/getAllPorducts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const initialState = [
  {
    _id: "",
    name: "",
    description: "",
    type: "",
    price: null,
  },
];

function ProductsTabla() {
  const [products, setProducts] = useState(initialState);
  const obtenerProductos = () => {
    getAllPorducts().then((productos) => {
      setProducts(productos);
    });
  };
  useEffect(() => {
    obtenerProductos();
  }, []);

  const navigate = useNavigate();

  const ver = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <>
      <Table striped className="text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, key) => (
            <tr key={item._id}>
              <td>{key + 1}</td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td colSpan={3}>
                <Button className="mx-1" variant="info" onClick={() => ver(item._id)}>
                  Ver
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
export default ProductsTabla;
