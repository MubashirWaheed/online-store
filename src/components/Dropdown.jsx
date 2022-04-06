import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Dropdown = ({isOpen, toggle}) => {
  return (
    <div onClick={toggle}
      className={isOpen ? "grid grid-rows-3 bg-slate-100 transition-all ease-in-out h-40 z-10 ": "transition-all h-0 overflow-hidden"} 
      >
        <Link to="/" className="p-4 font-medium ">Home</Link>
        <Link to="shop" className=" p-4 font-medium">Shop</Link>
        <Link to="contact" className="p-4 font-medium" >Contact</Link>
    </div>
  )
}

Dropdown.propTypes = {
  isOpen : PropTypes.bool.isRequired,
  toggle : PropTypes.func.isRequired 
}

export default Dropdown
