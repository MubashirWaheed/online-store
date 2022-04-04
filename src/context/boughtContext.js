import React from 'react'
import { createContext, useState } from "react";

const boughtContext = createContext();

function Bought({children}) {
    const [numberOfItems, setNumberOfItems] = useState(0);
    const [items, setItems] = useState([])
    const [toggleSidebar, setToggleSidebar] = useState(false);

    const toggle = ()=> setToggleSidebar(!toggleSidebar)
  return (
    <boughtContext.Provider value={{
        toggle,
        toggleSidebar,
        numberOfItems,
        setNumberOfItems,
        items,
        setItems
    }}>
        {children}
    </boughtContext.Provider>
  )
}

export { boughtContext }
export default Bought
