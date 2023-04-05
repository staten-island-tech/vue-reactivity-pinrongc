import { reactive } from "vue";

export const store = reactive({
  products: [
    {
      name: "Apple",
      price: 5,
      img: "https://www.collinsdictionary.com/images/full/apple_158989157.jpg",
    },

    {
      name: "Orange",
      price: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEftk1FJm9bXeHw0pF_e8lh7H0-TJwQyZjA&usqp=CAU",
    },
    {
      name: "Banana",
      price: 5,
      img: "https://images.heb.com/is/image/HEBGrocery/000377497",
    },

    {
      name: "Grapes",
      price: 3,
      img: "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/produce_grapes_red/dd131994003a7a06d97ae2370507c10d_large.png&width=512&type=webp&quality=90",
    },
    {
      name: "Green Grapes",
      price: 3,
      img: "https://target.scene7.com/is/image/Target/GUEST_27ecaa50-cac2-49f8-9a9b-e59800e28d8a?wid=488&hei=488&fmt=pjpeg",
    },
    {
      name: "Strawberry",
      price: 3,
      img: "https://www.yogurt-land.com/assets/593.png",
    },

    {
      name: "Broccoli",
      price: 6,
      img: "https://www.hopkinsmedicine.org/sebin/t/y/broccoli-content.jpg",
    },

    {
      name: "Red Chili Pepper",
      price: 7,
      img: "https://cdn.shopify.com/s/files/1/0336/7167/5948/products/1-pound-image-of-red-fresno-peppers-vegetables-33420304941100_600x600.jpg?v=1677888833",
    },
{
  name: "Jalapeño Pepper",
  price: 8,
img: "https://cdn.shopify.com/s/files/1/0271/6634/3237/products/522485-01_jpeg.jpg?v=1602839728"
},
    {
      name: "Tomato",
      price: 6,
      img: "https://jugais.com/wp-content/uploads/2020/07/tomate-1.jpg",
    },

    {
      name: "Potato",
      price: 8,
      img: "https://images.heb.com/is/image/HEBGrocery/000318982-1",
    },

    {
      name: "Milk",
      price: 10,
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg",
    },
    {
      name: "Sugar",
      price: 10,
      img: "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00049200045503/5c36aa3186a5ea577826c85840632031_0x8DA25901E9019FF_large.png&width=512&type=webp&quality=90",
    },

    {
      name: "Cookie",
      price: 2,
      img: "https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1.jpg",
    },

    {
      name: "Cake",
      price: 30,
      img: "https://stylesweet.com/wp-content/uploads/2022/06/ChocolateCakeForTwo_Featured.jpg",
    },
  ],
  cart: [],
  total: 0,
  numberItems: 0,
});
