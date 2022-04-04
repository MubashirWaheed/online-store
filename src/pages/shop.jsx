import React from 'react'
import Products from '../components/Products'
import Sidebar from '../components/Sidebar'
import { useContext } from 'react'
import { boughtContext } from '../context/boughtContext'

const Shop = () => {
  const {toggle, toggleSidebar} = useContext(boughtContext)

  return (
    <div  >
      <Products toggle={toggle} />
      <Sidebar toggleSidebar={toggleSidebar} toggle={toggle} />
    </div>
  )
}

export default Shop
