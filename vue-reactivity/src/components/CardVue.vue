<template>
  <div class="CardVue">
    <h2>{{ title }}</h2>
    <img :src="image" alt="" />
    <h3>{{ price }}</h3>
    <button @click="AddToCart()">Add to cart</button>
  </div>
</template>
;

<script>
import { store } from "../store";
export default {
  name: "CardVue",
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
  methods: {
    AddToCart(total) {
      this.cart.push(total);
      this.total += total.price;
      /*       store.cart.push({
        name: this.name,
        price: this.price,
        image: this.image,
      }); */
    },
  },
};
</script>

<style>
.CardVue {
  background-color: rgb(242, 183, 242);
  flex-wrap: wrap;
  display: flex;
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
