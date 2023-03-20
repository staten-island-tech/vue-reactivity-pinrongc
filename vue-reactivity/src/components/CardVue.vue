<template>
<div class="CardVue">
    <h2>{{ title }}</h2>
    <img :src="image" alt=""/>
    <h3>{{ price }}</h3>

</div>    
   
</template>;
     
     <script>
  
     export default {
            name: "CardVue",
            props: {
                title: String,
                price: Number,
                image: String,
            },
     }; 

   
     </script>
    
   
     <style>
     .home-page{
       background-color: aquamarine;
     }
     </style>
     