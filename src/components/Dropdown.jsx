import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({isOpen, toggle}) => {
  return (
    <div className={isOpen ? "grid grid-rows-3 bg-slate-100 transition-all ease-in-out h-40 z-10 ": "transition-all h-0 overflow-hidden"} onClick={toggle}>
        <Link to="/" className="p-4 font-medium ">Home</Link>
        <Link to="about" className=" p-4 font-medium">About</Link>
        <Link to="contact" className="p-4 font-medium" >Contact</Link>
    </div>
  )
}

export default Dropdown
