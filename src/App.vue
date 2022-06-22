<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "./layouts/DefaultLayout";

export default {
  name: "App",
  components: {
    DefaultLayout,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
input,
button,
select,
textarea,
a {
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  font-family: inherit;
  line-height: inherit;
}
a {
  text-decoration: none;
  cursor: pointer;
}
ul {
  list-style-type: none;
}
button,
input,
textarea,
select {
  background-color: inherit;
  border: 0;
  outline: 0;
}
body {
  font-family: "Open Sans", sans-serif;
  position: relative;
  font-size: 13px;
  line-height: 1.8;
}

/* TITLE */
h1,
h2 {
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.25;
}

h1 {
  font-size: clamp(1.5rem, 5vw, 2.5rem);
}

h2 {
  font-size: clamp(1rem, 5vw, 1.5rem);
}

/* UTILS */
.btn {
  position: relative;
  color: #000;
  border: 1px solid #000;
  text-transform: uppercase;
  font-size: clamp(0.8rem, 2vw, 1.25rem);
  padding: 1.05rem clamp(3rem, 10vw, 6rem);
  overflow: hidden;
  z-index: 0;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.2);
    transform: translateX(-100%);
    transition: transform 0.2s linear;
    z-index: -1;
  }

  &:hover {
    &:before {
      transform: translateX(0);
    }
  }

  &.btn--white {
    color: #fff;
    border-color: #fff;

    &:before {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
}
</style>
