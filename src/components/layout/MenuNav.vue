<template>
  <nav class="menu">
    <div class="menu__nav">
      <ul>
        <li><a>Homme</a></li>
        <li><router-link to="/">Femme</router-link></li>
        <li><a>Concept</a></li>
        <li><router-link to="/faq">FAQ</router-link></li>
      </ul>
    </div>
    <div class="menu__logo">
      <router-link to="/">
        <TheKooples :color="text_color" />
      </router-link>
    </div>
    <div class="menu__cart">
      <a @click="openCart(true)">
        <span class="cart__logo" data-count="cart_count">
          <img src="@/assets/images/icon-cart.png" alt="Cart" width="30" />
          <span class="badge_count">{{ cart_count }}</span>
        </span>
      </a>
    </div>
    <div class="menu__burger">
      <a @click="open_menu = true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          :stroke="text_color"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </a>
    </div>

    <div class="menu__mobile" v-if="open_menu">
      <button class="mobile__close-btn" @click="open_menu = false">✖</button>
      <ul>
        <li><a>Homme</a></li>
        <li><router-link to="/">Femme</router-link></li>
        <li><a>Concept</a></li>
        <li><router-link to="/faq">FAQ</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import TheKooples from "../logos/TheKooples.vue";

import { mapActions } from "vuex";

export default {
  name: "MenuNav",
  components: { TheKooples },
  props: {
    sticky: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      cart_count: 2,
      open_menu: false,
    };
  },
  watch: {
    $route(to) {
      if (to) {
        this.open_menu = false;
      }
    },
  },
  computed: {
    // to colored the svg logo
    text_color() {
      return this.sticky === true ? "#000" : "#fff";
    },
  },
  methods: {
    ...mapActions({
      openCart: "products/openCart",
    }),
  },
};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  align-items: center;

  .menu__mobile {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color: #000;
    animation: slideIn 0.3s linear forwards;
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-100%);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .mobile__close-btn {
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 3rem;
      line-height: 1;
      cursor: pointer;
    }

    ul {
      font-size: 2rem;
      font-weight: 600;
      text-align: center;
      width: 100%;

      li {
        a.router-link-active {
          color: #ccc;
        }
      }

      li:not(:last-of-type) {
        border-bottom: 1px solid #f3f3f3;
      }
    }
  }

  .menu__nav {
    display: none;
  }

  .menu__logo {
    flex: 1;
    svg {
      display: block;
      width: 100%;
      max-width: 300px;
      min-width: 125px;
      margin-inline: auto;
    }
  }

  .menu__cart {
    flex: 1;
    color: v-bind(text_color);
    .cart__logo {
      display: flex;
      align-items: center;
      img {
        display: block;
        margin-left: auto;
      }
    }
  }
  .menu__burger {
    margin-left: 1rem;
    width: 40px;

    a {
      display: flex;
    }
  }

  @include media-min("1000px") {
    .menu__burger {
      display: none;
    }
    .menu__nav {
      display: initial;
      flex: 1;
      color: v-bind(text_color);
      ul {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 1px;

        li:not(:last-child) {
          margin-right: 1rem;
        }

        li {
          position: relative;
          a {
            &:after {
              content: "";
              position: absolute;
              left: 50%;
              bottom: -0.35rem;
              width: 0;
              height: 3px;
              background-color: v-bind(text_color);
              transform: translateX(-50%);
              transition: width 0.2s linear;
            }

            &:hover,
            &.router-link-active {
              &:after {
                width: 100%;
              }
            }

            &.router-link-active {
              &::after {
                background-color: orange;
              }
            }
          }
        }
      }
    }
  }
}
</style>
