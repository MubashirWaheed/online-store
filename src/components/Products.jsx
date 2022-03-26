import React, { useEffect, useState } from 'react'

const Products = () => {
  const [products, setProducts] = useState([]);
  const getItems = async ()=>{
    const response = await fetch("https://fakestoreapi.com/products/category/men's%20clothing");
    const products = await response.json();
    setProducts([...products]);
    console.log(products);
  }

  useEffect(()=>{
    getItems();

  },[])

  return (
    <div className='flex flex-wrap justify-center mt-12 '>
      {/* <h1>Products</h1> */}
      {products.map((item,i)=>{
        return(
          <div key={i} className="w-60 flex flex-col items-center p-4 cursor-pointer">
            <img className='h-52 ' src={item.image} alt="product" />
            <h1>{item.title}</h1>
            <p>${item.price}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Products
