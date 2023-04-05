<template>

    <div class="CardVue">  
        <h2>{{ name }}</h2>
        <img :src="image" alt="" />
        <h3>${{ price }}</h3>

        <button id = "Add" @click="AddToCart()">Add to cart</button>
        <button id = "Remove" @click="RemoveItem()">Remove Item</button>
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
      });
      store.total += this.price;
      store.numberItems += 1;
    },

    RemoveItem() {
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
  background-color: #00000063;
  color: white;
  position: relative;
  margin: 15px;
  padding: 15px;
  min-width: 5%;
  border-radius: 5%;
}

img {
  height: 180px;
  max-width: 100%;
}

.home {
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow-y: hidden;
  flex-wrap: wrap;
  margin-left: 180px;

}

#Add{
  width: 5rem;
  height: 25px;
  font-weight: bold;
}

#Remove{
  width: 6rem;
    height: 25px;
    font-weight: bold;
}
</style>
