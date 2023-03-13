<template>
 
<h1 v-if="buy">{{title}}</h1>
<h1 v-else>"Did not buy"</h1> 
<ul>
  <li  v-for="product in products" :key="product">
    {{ product }}

  </li>
</ul> 

</template>
  
  <script>

 
  export default {
    name: 'home-page',
    props: {
      product: String,
      student: String,
    },
    data() {
        return{
    title: "product",
    products: ["apple", "banana", "orange"],
    buy: true, 
        };
    }
  } 


  </script>
  

  <style>
  
  </style>
  