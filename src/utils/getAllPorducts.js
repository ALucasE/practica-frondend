import axios from "axios";

const getAllPorducts = async () => {
  const url = "http://localhost:5000/api/products";
  try {
    const res = await axios.get(url);
    const products = res.data;
    return products;
  } catch (error) {
    console.error(error);
    return error;
  }
};
export default getAllPorducts;
