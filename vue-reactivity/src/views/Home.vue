<template>
  <div class="home">
    <CardVue
      v-for="destination in store.destinations"
      :key="destination.name"
      :title="destination.name"
      :price="destination.price"
      :image="destination.img"
    />
  </div>
</template>

<script>
import CardVue from "../components/CardVue.vue";
import { store } from "../store";

export default {
  name: "HomeMain",
  components: {
    CardVue,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
