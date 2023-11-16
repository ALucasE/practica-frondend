import { Route, Routes } from "react-router-dom";
// import HomePage from "../pages/HomePage";
import ClientsPage from "../pages/ClientsPage"
import ProductsPage from "../pages/ProductsPage";
import OrdersPage from "../pages/OrdersPage";
import ShowCientPage from "../pages/ShowCientPage"

const NavRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ClientsPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/show/:id" element={<ShowCientPage />} />
    </Routes>
  );
};

export default NavRouter;