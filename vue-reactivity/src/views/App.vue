<template>

 
  <HomePage msg="Welcome to Your Vue.js App"/>
  <HomePage msg="App"/>
  <HomePage msg="2"/>
  <HomePage msg="2"/>
  <h1>{{ products }}</h1>
  <CardVue msg = "products"/>

</template>

<script>

import HomePage from '../components/main.vue'
import CardVue from "../components/CardVue.vue";

export default {
  name: 'App',
  components: {
    HomePage,
    CardVue
  }
}
</script>

<style>

</style>

