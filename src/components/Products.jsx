import React, { useEffect, useState , useContext} from 'react'
import { boughtContext } from '../context/boughtContext';

const Products = ({toggle}) => {
  const [products, setProducts] = useState([]);
  const { numberOfItems, setNumberOfItems, items, setItems } = useContext(boughtContext);

  

  const getItems = async ()=>{
    try{
      const response = await fetch("https://fakestoreapi.com/products/category/men's%20clothing");
      const products = await response.json();
      setProducts([...products]);
    }catch(error){
      console.log(error)
    }
  }
  const incrementProductCount = ()=>{
    setNumberOfItems( numberOfItems + 1 )
  }
  const itemsBought = (image,title,price)=>{
    // Check if item already present in the array 
    console.log(items)
    for(let x=0; x < items.length; x++){
      if(items[x].title === title) return 
    }

    setItems((content)=>{
      return [
        ...content,
        {image,title, price}
      ]
    })
  }

  useEffect(()=>{
    getItems();

  },[])

  return (
    <div className='flex flex-wrap justify-center pt-12 '>
      {products.map((item,i)=>{
        return(
          <div key={i} className="w-60 mt-auto flex flex-col items-center p-4 drop-shadow-xl bg-zinc-50 m-6 rounded-xl">
            <img className='h-52' src={item.image} alt="product" />
            <h1 className='font-bold pt-3'>{item.title}</h1>
            <p>${item.price}</p>
            <button 
              onClick={()=>{
                incrementProductCount();
                itemsBought(item.image, item.title,item.price)
              }}
              className='bg-red-300 hover:bg-red-400 transition-colors duration-300 text-white font-medium py-1 px-4 drop-shadow-xl rounded-md'
              > Add to Cart  
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Products
