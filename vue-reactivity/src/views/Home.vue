<template>

   <div class="home">
    
    
    <CardVue

v-for="destination in destinations"
:key="destination.name"
:title="destination.name"
:price="destination.price"
:image="destination.img"
/> 
   </div>
    
</template>


<script>
import CardVue from "../components/CardVue.vue";

export default {
    name: "Home",
    components: {
        CardVue, 
    },
        
        data() {

                return {
                    selected: "",
                    destinations: [
                        {
                            name: "apple",
                            price: 5,
                            img: "https://www.collinsdictionary.com/images/full/apple_158989157.jpg",
                        },
                        {
                            name: "milk",
                            price: 10,
                            img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg",

                        },

                        {
                            name: "cookie",
                            price: 2,
                            img: "https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1.jpg",
                        }
                    ]
                }
            }
    }





</script>