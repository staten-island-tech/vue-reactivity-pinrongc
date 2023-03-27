<template>
  <div class="CartPage"></div>
  <h2>{{ title }}, {{ price }}</h2>
</template>

<script>
import { store } from "../store";
export default {
  name: "CartPage",
  props: {
    title: String,
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
