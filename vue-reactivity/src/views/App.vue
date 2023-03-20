<template>

 
  <HomePage msg="Welcome to Your Vue.js App"/>
  <HomePage msg="App"/>
  <HomePage msg="2"/>
  <CardVue msg = "hello"/>

</template>

<script>

import HomePage from '../components/main.vue'
import CardVue from "../components/CardVue.vue";
import Home from "../views/Home.vue"


export default {
  name: 'App',
  components: {
    HomePage,
    CardVue,
    Home
  }
}
</script>

<style>

</style>

