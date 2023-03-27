<template>
  <HomePage msg="App" />
  <HomeMain msg="Products" />
  <CartPage msg="Products" />
  <store msg="Products" />
</template>

<script>
import HomePage from "../components/main.vue";
import HomeMain from "../views/Home.vue";
import CartPage from "../components/CartPage.vue";
import { store } from "../store";

export default {
  name: "App",
  components: {
    HomePage,
    HomeMain,
    CartPage,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style></style>
