const initialStateProduct = {
  name: "",
  description: "",
  type: [
    {
      value: "Service",
      name: "Service",
    },
    {
      value: "Hardware",
      name: "Hardware",
    },
    {
      value: "Software",
      name: "Software",
    },
  ],
  price: null,
};
export default initialStateProduct;
