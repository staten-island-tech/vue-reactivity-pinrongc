<template>
  <div class="page">
 <div class="CardVue">

    <div class="products">
<h2>{{ name }}</h2>
    <img :src="image" alt="" />
    <h3>${{ price }}</h3>
    <button @click="AddToCart()">Add to cart</button>
    <button @click="RemoveItem()">Remove Item</button>
    </div>
    
 
  </div>   
  </div>
 

</template>
;

<script>
import { store } from "../store";
export default {
  name: "CardVue",
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
  methods: {
    AddToCart() {
      store.cart.push({
        name: this.name,
        price: this.price,
        image: this.image,
      });
      store.total += this.price;
      store.numberItems += 1;
    },

    RemoveItem() {
      /*     store.cart.push(product);
      this.carttotal += product.price;
      this.numberItems += 1; */

      store.cart.push({
        name: this.name,
        price: this.price,
        image: this.image,
      });
      store.total -= this.price;
      store.numberItems -= 1;
    },
  },
};
</script>

<style>
.CardVue {
  background-color: rgb(214, 242, 183);
  position: relative;
  margin: 10px;
  padding: 15px;
  min-width: 15%;

}

img {
  height: 200px;
  width: auto;
  max-width: 100%;
}

.home {
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow-y: hidden;
  flex-wrap: wrap;
}

</style>
