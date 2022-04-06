import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { boughtContext } from '../context/boughtContext'

const Sidebar = ({toggleSidebar, toggle}) => {

  const { items,setItems }  = useContext(boughtContext);

  const handleQuantityIncrease = (index)=>{    
    let newItems = [...items];
    newItems[index].quantity++
    setItems(newItems);    
  }

  return (
    <div >
      {/* overlay  */}
      <div
        onClick={toggle} 
        className={` fixed inset-0 z-20 block bg-black opacity-50 transition-opacity  ${toggleSidebar ? 'block' : 'hidden'} `} 
      / >

      {/* Sidebar transition  */}
      <div className={`fixed inset-y-0  right-0 z-30 w-1/2 md:w-1/3 bg-white transition duration-300 ease-out  translate-x-full  
          ${toggleSidebar ? "ease-out -translate-x-0" : "ease-in translate-x-full"}
        `}>
          <h1 className='font-bold '>Items in Cart</h1>
          <div className='md:flex flex-col justify-center items-center'>

            {items.map((x,index)=>{
              return(
                <div key={index} className="flex flex-col md:flex-row  p-2 bg-zinc-100 w-80 items-center  justify-center mt-3 ">
                  <img className='w-24 mr-5' src={x.image} alt="item" />
                  <div>
                    <h5>{x.title}</h5>
                    <p className='font-bold'>{`$${x.price}`}</p>
                    <p>{`quantity ${x.quantity}`}</p>
                    <button
                      onClick={()=>{
                        handleQuantityIncrease( index, x.id)
                      }} 
                      className='px-10 bg-red-300'
                      >+
                    </button>
                  </div>
              </div>
              )}
            )}
          </div>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  toggleSidebar : PropTypes.bool.isRequired,
  toggle : PropTypes.func.isRequired
}

export default Sidebar
