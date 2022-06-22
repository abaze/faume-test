<template>
  <div class="ourSelection">
    <productCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

import ProductCard from "./ProductCard.vue";

export default {
  name: "OurSelection",
  components: { ProductCard },
  setup() {
    // get the products from the store
    const store = useStore();
    const products = computed(() => store.state.products.products);

    return {
      products,
    };
  },
};
</script>

<style lang="scss" scoped>
.ourSelection {
  display: flex;
  align-items: strech;
  gap: 1%;
}
</style>
