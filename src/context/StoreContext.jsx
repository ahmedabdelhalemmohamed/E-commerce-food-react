import React, { createContext, useState } from 'react'

export const storeContext = createContext();

const StoreProvider = ({children}) => {

    const [selectedProducts, setSelectedProducts] = useState([]);


  return (
    <storeContext.Provider value={{ selectedProducts, setSelectedProducts}}>
        {children}
    </storeContext.Provider>
  )
}

export default StoreProvider;
