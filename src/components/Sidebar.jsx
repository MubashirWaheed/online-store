import React, { useContext } from 'react'
import { boughtContext } from '../context/boughtContext'

const Sidebar = ({toggleSidebar, toggle}) => {
  const { items }  = useContext(boughtContext);
  console.log(items)
  return (
    <div className="h-full">
      {/* overlay  */}
      <div
        onClick={toggle} 
        className={` fixed inset-0 z-20   block bg-black opacity-50 transition-opacity  ${toggleSidebar ? 'block' : 'hidden'} `} 
      / >
      {/* Sidebar transition  */}
      <div className={`fixed inset-y-0  right-0 z-30 w-1/2 md:w-1/3 bg-white transition duration-300 ease-out  translate-x-full  
          ${toggleSidebar ? "ease-out -translate-x-0" : "ease-in translate-x-full"}
        `}>
          {items.map((x,i)=>{
            return(
              <div key={i} className="flex ">
                <img className='w-24' src={x.image} alt="item" />
                <div>
                  <h5>{x.title}</h5>
                  <p>{x.price}</p>
                  <button className='px-10 bg-red-300'>+</button>
                </div>
            </div>
            )}
          )}

        <h1>Hello</h1>
        <h1>Hello</h1>
        <div>hello</div>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
      </div>
    </div>
  )
}

export default Sidebar
