import { Axios } from "./axios.service";

// get 4 random products
const getProducts = () => {
  return Axios.get(`/products?limit=4`);
};

export const productService = {
  getProducts,
};
