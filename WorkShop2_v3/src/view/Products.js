import { products } from "../utils/products_data"


export const ProductsPage = function(){
  products.forEach(product => {
  console.log(product.name, product.price);
});
}
