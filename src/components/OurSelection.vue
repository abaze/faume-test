<template>
  <div class="ourSelection" v-if="!loader">
    <productCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
  <div v-else class="page-loader">
    <PageLoader />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed, nextTick } from "vue";

import ProductCard from "./ProductCard.vue";
import PageLoader from "./PageLoader.vue";

export default {
  name: "OurSelection",
  components: { ProductCard, PageLoader },
  setup() {
    // get the products from the store
    const store = useStore();
    const products = computed(() => store.state.products.products);
    const loader = ref(true);

    nextTick(() => {
      if (products.value) {
        setTimeout(() => {
          loader.value = false;
        }, 1000);
      }
    });

    return {
      products,
      loader,
    };
  },
};
</script>

<style lang="scss" scoped>
.ourSelection {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 1rem 0;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  &::-webkit-scrollbar-track {
    background-color: #f3f3f3;
  }

  &::-webkit-scrollbar {
    height: 6px;
    background-color: #f3f3f3;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(139, 136, 136);
    border-radius: 3px;
  }

  article {
    flex: 1 0 250px;
    scroll-snap-align: start;

    &:not(:last-of-type) {
      padding-right: 3%;
      margin-right: 3%;
      border-right: 1px solid #f3f3f3;
    }
  }
}

.page-loader {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
