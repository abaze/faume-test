export default {
  namespaced: true,
  state() {
    return {
      openCart: false,
      products: [],
    };
  },
  mutations: {
    SET_OPEN_CART(state, bool) {
      state.openCart = bool;
    },
    ADD_PRODUCT(state, product) {
      state.products.push(product);
    },
  },
  actions: {
    // function to open/close Cart Popin
    openCart({ commit }, bool) {
      commit("SET_OPEN_CART", bool);
    },
    // function to set 4 random product in store
    addProduct({ commit }, product) {
      commit("ADD_PRODUCT", product);
    },
  },
};
