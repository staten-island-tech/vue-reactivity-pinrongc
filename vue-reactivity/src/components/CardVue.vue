<template>
  <div class="CardVue">
    <h2>{{ name }}</h2>
    <img :src="image" alt="" />
    <h3>{{ price }}</h3>
    <h4>{{ total }}</h4>
    <button @click="AddToCart()">Add to cart</button>
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
      /*   store.cart.push(index);
      this.carttotal += index.price;
      this.cartTotal = this.carttotal.toFixed(2);
      this.numerItems += 1; */

      store.cart.push({
        name: this.name,
        price: this.price,
        image: this.image,
      });
    },
    /*     displaycart: function () {
      this.active = !this.active;
    }, */
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
