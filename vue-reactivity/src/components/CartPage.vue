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
<style scoped>
.CartPage {
background-color: rgb(243, 180, 180);
margin-left: 30%;
margin-right: 30%;
margin-bottom: 10px;
padding-top: 10px;
padding-bottom: 10px;
border-radius: 50px;
text-align: center;
}

</style>
