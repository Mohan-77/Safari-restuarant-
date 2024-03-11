import React from 'react'
import Product from './Product';

const products = [
  {
    id: 1,
    name: "Chicken",
    urlImage:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 0.01,
  },
  {
    id: 2,
    name: "Pizza",
    urlImage:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=3362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 0.01,
  },
  {
    id: 3,
    name: "Mediterranean",
    urlImage:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 0.01,
  },
  {
    id: 4,
    name: "Pancake Stack",
    urlImage:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=3360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 0.01,
  },
  {
    id: 5,
    name: " arugula, berries",
    urlImage:
      "https://images.unsplash.com/photo-1483918793747-5adbf82956c4?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 0.01,
  },
  {
    id: 6,
    name: "Avocado and Egg ",
    urlImage:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=3410&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 0.01,
  },
];


const ProductList = () => {
  return (
  <div className='grid'>
        {products.map(product => (
        <Product key={product.id} product={product} />

         ))}
      </div>
   
   
  ) 
 
}

export default ProductList