<template> 
<header>
<div class="CartPage">
  <h2> Product: {{ name }}</h2>
  <h3> Total: ${{ store.total }}</h3>
  <h4> Number of Items:{{ store.numberItems }}</h4>

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
