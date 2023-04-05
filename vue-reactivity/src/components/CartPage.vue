<template>
    <div class="CartTotal">
      <label for="Total"> Total: ${{ store.total }}</label>
      <br />
      <label for="Number of Items">
        Number of Items: {{ store.numberItems }}</label
      >
    </div>

    <div class="cart">
<h1>Cart:</h1>
      <CartProducts
      v-for="product in store.cart"
      :key="product.name"
      :name = "product.name" 
      :price="product.price"
/>
<button id="reset" @click="resetcart">Reset Cart</button>
    </div>

</template>

<script>
import { store } from "../store";
import CartProducts from "./CartProducts.vue";

export default {
  name: "CartPage",
  props: {
    name: String,
    price: Number,
  },
  data() {
    return {
      store,

    };
  },
  components:{
    CartProducts
  },

  methods:{

resetcart: function (){
  store.total = 0;
  store.numberItems = 0
  store.cart = []
}

}
  } 


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.CartTotal {
  background-color: #f9cbcbbb;
  margin-left: 30%;
  margin-right: 30%;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 30px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}


.cart{
  position: absolute;
  top: 160px;
  background-color: #ffffff95;
  border-radius: 10px;
  padding: 25px;
  font-size: 13px;
  max-width: 150px;
}

#reset{
  width: 6rem;
  height: 3rem;
  font-weight: bold;
  font-size: 15px;
  border-radius: 10rem;
}

</style>
