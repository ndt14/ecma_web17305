import { render } from "../lib";
import homePage from "./pages/home";
import productPage from "./pages/product";
import navigo from 'navigo';
import './style/main.css'
import productDeatil from "./pages/product_Deatil";
// import bootstrap from 'bootstrap';
var app = document.querySelector('#app');
// render(homePage(),app);
const router = new navigo();
router.on('/',function(){
render(homePage(),app);
    
});
router.on('/product',function(){
render(productPage(),app);       
    });
    router.on('/productDeatil/:id',function({data}){
        render(productDeatil(data.id),app);       
            });
    router.resolve();
