<template>
  <div>
    <header :class="{ sticky: sticky }">
      <MenuNav :sticky="sticky" />
    </header>
    <main>
      <slot />
      <CartPopin v-if="openCart" />
    </main>

    <footer class="footer">
      <nav>
        <ul>
          <li><router-link to="/">FAQ</router-link></li>
          <li><router-link to="/">Mentions légales</router-link></li>
          <li><router-link to="/">CGV</router-link></li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script>
import MenuNav from "@/components/layout/MenuNav.vue";
import CartPopin from "@/components/CartPopin.vue";

import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "DefaultLayout",
  components: { MenuNav, CartPopin },

  setup() {
    /* STICKY HEADER LOGIC */
    const sticky = ref(null);

    // function which return a boolean when we scroll the page
    const isSticky = () => {
      window.scrollY > 0 ? (sticky.value = true) : (sticky.value = false);
    };
    isSticky();

    window.addEventListener("scroll", () => {
      isSticky();
    });

    /* CART POPIN LOGIC */
    const store = useStore();
    // we show the cart popin with the opentCart in the store
    const openCart = computed(() => store.state.products.openCart);

    return {
      sticky,
      openCart,
    };
  },
};
</script>

<style lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  transition: background-color 0.3s linear;
  padding: 0.5rem 1.5rem;

  &.sticky {
    background-color: #fff;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
  }
}

footer.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 20vh;
  background-color: #000;
  color: #fff;
  ul {
    display: flex;
    align-items: center;
    gap: 3rem;
    justify-content: center;
    font-size: 1.5rem;
  }
}
</style>
