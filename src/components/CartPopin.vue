<template>
  <div class="overlay">
    <div class="cart">
      <div class="cart__header">
        <p>Votre panier</p>
        <button class="cart__close-btn" @click="openCart(false)">✖</button>
      </div>
      <div class="cart__body">
        <p>Vous n'avez aucun produit dans votre panier...</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CartPopin",
  methods: {
    ...mapActions({
      openCart: "products/openCart",
    }),
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  inset: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.6);
  animation: fadeIn 0.3s linear forwards;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}

.cart {
  position: absolute;
  display: grid;
  grid-template-rows: auto 1fr;
  left: 50%;
  top: 50%;
  width: 80vw;
  height: 80vh;
  z-index: 2;
  background-color: #fff;
  color: #000;
  opacity: 0;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.5);
  transform: translate(-50%, -50%);

  animation: slideIn 0.3s linear forwards 0.3s;
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translate(-100%, -50%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
  .cart__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f3f3f3;
    padding: 0 2rem;
    p {
      font-size: 2rem;
      font-weight: 700;
      text-transform: uppercase;
    }
    .cart__close-btn {
      font-size: 3rem;
      cursor: pointer;
    }
  }
  .cart__body {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 1rem;
      font-weight: 500;
    }
  }
}
</style>
