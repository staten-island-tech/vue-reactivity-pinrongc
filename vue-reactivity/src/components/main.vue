<template>
 
<h1 v-if="buy">{{title}}</h1>
<h1 v-else>"Did not buy"</h1>
<!-- <ul>
  <li  v-for="product in products" :key="product">
    {{ product }}

  </li> -->
<!-- </ul> -->


</template>
  
  <script>
  
  export default {
    name: 'home-page',
    components: {},
    data() {
        return{
   title: "product",
/*    products: ["apple", "banana", "orange"], */
buy: false, 
        };
     
    }
  }
  </script>
  
  <style>
  
  </style>
  