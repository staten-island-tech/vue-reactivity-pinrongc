<template> 
 <header>Grocery Store</header>

 <img id="move" src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="">

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

#move {
    width: 80px;
    animation: LtoR 9s linear infinite;
    transition: all 5s;
    position: relative;
    height: 60px;
}


@keyframes LtoR {
    0% {
        left: 0%;
    }

    100% {
        left: calc(100% - 100px)
    }
}


</style>
