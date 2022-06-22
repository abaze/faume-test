<template>
  <section class="banner-large">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "BannerLarge",
};
</script>

<style lang="scss">
.banner-large {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: #fff;

  & > img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: -1;
  }

  h1 {
    font-size: clamp(4rem, 10vw, 8rem);
    text-shadow: 0 0 3px #000;
  }
}
</style>
