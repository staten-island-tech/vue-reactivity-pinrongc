<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <HomePage msg="Welcome to Your Vue.js App"/>
  <HomePage msg="App"/>
  <HomePage msg="Welcome to Your Vue.js App" product="apple"/>
  <h1>{{ products }}</h1>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import HomePage from './components/main.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HomePage
  }
}
</script>

<style>

</style>

