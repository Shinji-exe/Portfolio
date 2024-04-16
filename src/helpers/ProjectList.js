import examp1 from "../assets/examp1.jpg"
import store from "../assets/store.png"
import splitland from "../assets/split.png"
import splitland1 from "../assets/split2.png"
import splitland2 from "../assets/split3.png"
import storehead from "../assets/storehead.png"
import one from "../assets/SM5.png"
import two from "../assets/SM4.png"
import three from "../assets/SM2.png"
import four from "../assets/SM1.png"
import check1 from "../assets/Checkout1.png"
import check2 from "../assets/Checkout2.png"
import check3 from "../assets/Checkout3.png"
import check4 from "../assets/Checkout4.png"
import prodDetail from "../assets/productDetail.png"

export const ProjectList = [
    {
    name: "Social Media Application",
    image: [one,two,three,four],
    
    skill: 'ReactJS, CSS, JavaScript, MongoDB, ExpressJS, NodeJS'
    },

    {
     name: "Split Landing Page",
      
    //  image2: splitland1,
    //  image3: splitland2,
    //  image4: ,
    image: [splitland,splitland1,splitland2],
     skill: "HTML, CSS, JavaScript"
    },

    {
    name: "Ecommerce Store",
    image: [storehead,store,prodDetail,check1,check2,check3,check4],
    skill: "ReactJS, CSS, JavaScript, Commerce.JS, Stripe"
    }
]