import React, { useState } from 'react'
import products from '../js/Products'

const Products = () => {

    const [Products, setProducts] = useState(products);  

  return (
    <div>
        {
            Products.map((item, index) => {
                return (
                    <div key={index} className="flex flex-col items-center gap-2">
                        <img src={item.image} alt={item.name} className="w-40 h-40 object-cover rounded-lg" />
                        <h2 className="text-lg font-bold">{item.name}</h2>
                        <p className="text-gray-500">${item.price}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Products