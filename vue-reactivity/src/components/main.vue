<template>
 <div class="home-page">
<h1 v-if="buy">{{title}}</h1>
<h1 v-else>"Did not buy"</h1> 
<ul>
  <li  v-for="product in products" :key="product">
    {{ product }}
  </li>
</ul> 

<button v-if="loggedIn">Log Out</button>
<button v-else>Log In</button>
 </div>


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
    loggedIn:false,
        };
    }, 
    methods:{
authState: function (){
      if(this.loggedIn===false){
        this.loggedIn=true;
      }else{
      this.loggedIn=false;
      }
    }
    }
    
  } 


  </script>
 

  <style>
  .home-page{
    background-color: aquamarine;
  }
  </style>
  