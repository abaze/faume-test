<template>
  <div class="container">
    <section class="section section--promote">
      <BannerLarge>
        <h1>FEMME</h1>
        <router-link to="/" class="btn btn--white">Découvrir</router-link>
        <img src="@/assets/images/femme.jpeg" alt="Section Femme" />
      </BannerLarge>
    </section>
    <section class="section section--discover min-h-50">
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
        asperiores inventore! Dolores omnis saepe, deleniti, accusantium odit
        magni ratione ipsam ducimus iste tempore atque rem cumque natus, nam
        eaque at.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Incidunt, asperiores inventore! Dolores omnis saepe, deleniti.
      </p>
      <router-link to="/" class="btn">Découvrir</router-link>
    </section>
    <section class="section section--collection">
      <div class="collection collection--femme">
        <router-link to="/">
          <h2>Collection Femme</h2>
        </router-link>
      </div>
      <div class="collection collection--homme">
        <router-link to="/">
          <h2>Collection Homme</h2>
        </router-link>
      </div>
    </section>
    <section class="section section--selection">
      <h1>Notre Selection</h1>
      <OurSelection />
    </section>
    <section class="section--discover-2">
      <div class="discover-2 discover-2--left_zone">
        <img src="@/assets/images/store.jpeg" alt="Our Store" />
      </div>
      <div class="discover-2 discover-2--right_zone">
        <router-link to="/" class="btn">Découvrir</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import BannerLarge from "@/components/BannerLarge";
import OurSelection from "@/components/OurSelection.vue";

import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { productService } from "@/services/index";
/* eslint-disable */
export default {
  name: "HomePage",
  components: { BannerLarge, OurSelection },
  setup() {
    const store = useStore();

    const products = computed(() => store.state.products.products);

    onMounted(() => {
      if (!products.value.length) {
        productService.getProducts().then((res) => {
          const products = res.data;
          products.forEach((product) => {
            const { id, title, price, image } = product;
            store.dispatch("products/addProduct", {
              id,
              title,
              price,
              image,
            });
          });
        });
      }
    });
  },
};
</script>

<style lang="scss" scoped>
section {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100vh;
  text-align: center;

  &:not(:first-of-type) {
    p {
      margin-inline: auto;
      font-size: clamp(0.9rem, 2vw, 1.25rem);
      width: clamp(300px, 100%, 900px);
    }
  }

  &.section--discover {
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    min-height: 70vh;
  }

  &.section--collection {
    flex-direction: row;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;

    .collection {
      position: relative;
      flex: 1;
      display: flex;
      background-size: cover;
      background-position: top;
      background-repeat: no-repeat;

      &.collection--femme {
        background-image: url(@/assets/images/robe.jpeg);
        margin-bottom: 1rem;
      }
      &.collection--homme {
        background-image: url(@/assets/images/homme.jpeg);
      }

      a {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        inset: 0;

        h2 {
          color: #fff;
          text-transform: uppercase;
        }
        &:hover {
          h2 {
            transform: scale(1.1);
          }
        }
      }
    }
  }

  &.section--selection {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    padding: 2rem;
    h1 {
      margin-bottom: 2rem;
    }
  }

  &.section--discover-2 {
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: flex-start;
    .discover-2 {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      &.discover-2--left_zone {
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
      &.discover-2--right_zone {
        background-color: #ccc;
      }
    }
  }

  @include media-min("680px") {
    &.section--collection {
      flex-direction: row;

      .collection {
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        filter: grayscale(1);
        transition: filter 0.5s ease-in-out;

        &.collection--femme {
          margin-bottom: 0;
          margin-right: 3px;
        }
        &:hover {
          filter: grayscale(0);
        }

        a {
          align-items: flex-end;
          justify-content: flex-start;

          h2 {
            transition: transform 0.3s linear;
          }
          &:hover {
            h2 {
              transform: scale(1.1);
            }
          }
        }
      }
    }

    &.section--discover-2 {
      flex-wrap: nowrap;
      .discover-2 {
        width: 100%;
      }
    }
  }
}
</style>
