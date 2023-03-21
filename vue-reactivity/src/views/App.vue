<template>
  <HomePage msg="App" />
  <HomeMain msg="Products" />
  <cartpage msg="Products" />
</template>

<script>
import HomePage from "../components/main.vue";
import HomeMain from "../views/Home.vue";
import cartpage from "../components/CartPage.vue";

export default {
  name: "App",
  components: {
    HomePage,
    HomeMain,
    cartpage,
  },
};
</script>

<style></style>
