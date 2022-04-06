import React, {useContext} from 'react'
import Products from '../components/Products'
import { boughtContext } from '../context/boughtContext'

const Shop = () => {
  const {toggle} = useContext(boughtContext)

  return (
    <div  >
      <Products toggle={toggle} />
    </div>
  )
}

export default Shop
