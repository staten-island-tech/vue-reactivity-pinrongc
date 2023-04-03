<template>
  <header>
    <div class="CartPage">
      <label for="product name"> Product: {{ name }}</label>
      <br />
      <label for="Total"> Total: ${{ store.total }}</label>
      <br />
      <label for="Number of Items">
        Number of Items: {{ store.numberItems }}</label
      >
    </div>
  </header>
</template>

<script>
import { store } from "../store";
export default {
  name: "CartPage",
  props: {
    name: String,
    price: Number,
    image: String,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
