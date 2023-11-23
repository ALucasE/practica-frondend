import axios from "axios";

const getPorductsById = async (productId) => {
  const url = "http://localhost:5000/api/products/" + productId;
  try {
    const res = await axios.get(url);
    const product = res.data;
    return product;
  } catch (error) {
    console.error(error);
    return error.data.msg;
  }
};
export default getPorductsById;
