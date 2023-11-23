import { Route, Routes } from "react-router-dom";
// import HomePage from "../pages/HomePage";
import ClientsPage from "./ClientsPage";
import ProductsPage from "./ProductsPage";
import OrdersPage from "./OrdersPage";
import ShowCientPage from "./ShowCientPage";
import ProductById from "./ProductById";
import ProductEdit from "./ProductEdit";
import ProductNew from "./ProductNew";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ClientsPage />} />
      <Route path="/show/:id" element={<ShowCientPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductById />} />
      <Route path="/products/edit/:id" element={<ProductEdit />} />
      <Route path="/products/new" element={<ProductNew />} />
      <Route path="/orders" element={<OrdersPage />} />
    </Routes>
  );
};

export default MainRouter;
