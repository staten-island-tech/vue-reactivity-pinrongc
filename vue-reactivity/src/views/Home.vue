<template>

<div class="page">
<div class="products">
    <CartPage
      v-for="destination in store.cart"
      :key="destination.name"
      :name="destination.name"
      :price="destination.price"
      :image="destination.img"
    />
  </div>

 <div class="home">
    <CardVue
      v-for="destination in store.destinations"
      :key="destination.name"
      :name="destination.name"
      :price="destination.price"
      :image="destination.img"
    />
  </div>




</div>


</template>

<script>
import CardVue from "../components/CardVue.vue";
import { store } from "../store";
import CartPage from "../components/CartPage.vue";

export default {
  name: "HomeMain",
  components: {
    CardVue,
    CartPage,
  },
  data() {
    return {
      store,

    };
  },
};
</script>

<style>


</style>

