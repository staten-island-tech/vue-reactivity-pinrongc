<template>

 
  <HomePage msg="Welcome to Your Vue.js App"/>
  <HomePage msg="App"/>
  <HomePage msg="2"/>
  <HomePage msg="2"/>

  <h1>{{ products }}</h1>

</template>

<script>

import HomePage from '../components/main.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>

</style>

