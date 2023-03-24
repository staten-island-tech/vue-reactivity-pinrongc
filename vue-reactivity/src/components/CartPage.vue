<template>
  <div class="cartpage"></div>
</template>

<script>
import { store } from "../store";
export default {
  name: "HelloWorldd",
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
