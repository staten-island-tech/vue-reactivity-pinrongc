<template> 
<header>
<div class="CartPage">
  <label for="product name"> Product: {{ name }}</label>
  <br>
  <label for="Total"> Total: ${{ store.total }}</label>
  <br>
  <label for="Number of Items"> Number of Items: {{ store.numberItems }}</label>

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
background-color: rgb(249, 203, 203);
margin-left: 30%;
margin-right: 30%;
margin-bottom: 10px;
padding-top: 10px;
padding-bottom: 10px;
border-radius: 50px;
text-align: center;
font-weight: bold;
font-size: 20px;
}

</style>
