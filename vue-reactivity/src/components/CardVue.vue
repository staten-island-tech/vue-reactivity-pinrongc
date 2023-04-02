<template>
  <div class="CardVue">
    <h2>{{ name }}</h2>
    <img :src="image" alt="" />
    <h3>{{ price }}</h3>
    <button @click="AddToCart()">Add to cart</button>
    <button @click="RemoveItem()">Remove Item</button>
 
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
  background-color: rgb(242, 183, 242);
  flex-wrap: wrap;

  justify-content: center;
  margin: 10px 10px 50px 15px;
}

img {
  height: 200px;
  width: auto;
  max-width: 100%;
  margin: 1%;
}

.home {
  display: flex;
  justify-content: center;
}
</style>
