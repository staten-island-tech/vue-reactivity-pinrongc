<template> 
 <header>Grocery Store</header>

    <CartPage/>
    <div class="home">
      <CardVue
        v-for="product in store.products"
        :key="product.name"
        :name="product.name"
        :price="product.price"
        :image="product.img"
      />
    </div>

</template>

<script>
import CardVue from "../components/CardVue.vue";
import { store } from "../store";
import CartPage from "../components/CartPage.vue";


export default {
  name: "HomeMain",
  components: {
    CardVue,
    CartPage,

  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style>

header{
  font-size: 50px;
  text-align: center
}
.page {
  text-align: center;
  font-family: "Khand", sans-serif;
}

body{
  background-image: url("https://wallpaperaccess.com/full/1624848.jpg");
}


</style>
