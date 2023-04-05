<template>
<h2>{{ name }} ${{ price }}</h2>

  </template>
  
  <script>
  import { store } from "../store";
  
  export default {
    name: "CartProducts",

    data() {
      return {
        store,
      };
    },
    props: {
      name: String,
      price: Number,
      image: String,
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>




  </style>