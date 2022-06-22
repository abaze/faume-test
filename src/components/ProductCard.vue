<template>
  <article v-if="product">
    <img :src="product.image" :alt="product.title" />
    <footer>
      <div class="article__title">{{ product.title }}</div>
      <div class="article__price">{{ product.price }} €</div>
    </footer>
  </article>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
article {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  font-size: 1rem;

  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
    margin-bottom: 1rem;
  }

  .article__title {
    font-weight: bold;
  }
}
</style>
