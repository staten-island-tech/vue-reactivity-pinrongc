import { reactive } from "vue";

export const store = reactive({
  destinations: [
    {
      name: "apple",
      price: 5,
      img: "https://www.collinsdictionary.com/images/full/apple_158989157.jpg",
    },
   
    {
      name: "orange",
      price: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEftk1FJm9bXeHw0pF_e8lh7H0-TJwQyZjA&usqp=CAU",
    },
{
      name: "banana",
      price: 5,
      img: "https://images.heb.com/is/image/HEBGrocery/000377497",
    },
    {
      name: "broccoli",
      price: 6,
      img: "https://www.hopkinsmedicine.org/sebin/t/y/broccoli-content.jpg",
    },



    {name: "milk",
      price: 10,
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg",
    },

    {
      name: "cookie",
      price: 2,
      img: "https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1.jpg",
    },

    {
      name: "cake",
      price: 30,
      img: "https://stylesweet.com/wp-content/uploads/2022/06/ChocolateCakeForTwo_Featured.jpg",
    },
   
    
    
  ],
  cart: [],
  total: 0,
  numberItems: 0,
  active: false,
});
