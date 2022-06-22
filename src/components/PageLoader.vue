<template>
  <div class="loader"></div>
</template>

<script>
export default {
  name: "PageLoader",
};
</script>

<style lang="scss" scoped>
.loader {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #ccc;
  border-top: none;
  animation: rotate 0.4s linear infinite;
  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
