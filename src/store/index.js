import { createStore } from "vuex";
import ProductsModule from "./modules/products";

const store = createStore({
  modules: {
    products: ProductsModule,
  },
});

export default store;
