import React, { useState } from 'react'
import products from '../js/Products'

const Products = ({category, price}) => {

    const [Products, setProducts] = useState(products);  

    console.log(category);
    console.log(price);


  return (
    <div className='grid justify-between grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 px-5 md:px-8'>
        {
            Products.map((item, index) => {
                return category === "All" && price === "All" ? (
                    <div key={index} className="flex flex-col items-center gap-2  p-5 rounded-lg bg-gradient-to-r from-green-500/50 to-green-700">
                        <img src={item.image} alt={item.name} className="w-40 h-40 object-cover rounded-lg" />
                        <div className='flex flex-col sm:flex-row text-center justify-between items-center sm:space-x-5'>
                            <h2 className="text-sm font-bold">{item.name}</h2>
                            <p className="text-white font-bold">${item.price}</p>
                        </div>
                        <button className='bg-white py-2 px-2 rounded-full border-2 border-green-500 hover:bg-green-400 hover:text-white transition'>Add to cart</button>
                    </div>
                ) : 
                category === "All" && price === item.price ? (
                    <div key={index} className="flex flex-col items-center gap-2  p-5 rounded-lg bg-gradient-to-r from-green-500/50 to-green-700">
                        <img src={item.image} alt={item.name} className="w-40 h-40 object-cover rounded-lg" />
                        <div className='flex flex-col sm:flex-row text-center justify-between items-center sm:space-x-5'>
                            <h2 className="text-sm font-bold">{item.name}</h2>
                            <p className="text-white font-bold">${item.price}</p>
                        </div>
                        <button className='bg-white py-2 px-2 rounded-full border-2 border-green-500 hover:bg-green-400 hover:text-white transition'>Add to cart</button>
                    </div>)
                :
                category === item.category && price === "All" ? (
                    <div key={index} className="flex flex-col items-center gap-2  p-5 rounded-lg bg-gradient-to-r from-green-500/50 to-green-700">
                        <img src={item.image} alt={item.name} className="w-40 h-40 object-cover rounded-lg" />
                        <div className='flex flex-col sm:flex-row text-center justify-between items-center sm:space-x-5'>
                            <h2 className="text-sm font-bold">{item.name}</h2>
                            <p className="text-white font-bold">${item.price}</p>
                        </div>
                        <button className='bg-white py-2 px-2 rounded-full border-2 border-green-500 hover:bg-green-400 hover:text-white transition'>Add to cart</button>
                    </div>
                ) : category === item.category && price === item.price ? (
                    <div key={index} className="flex flex-col items-center gap-2  p-5 rounded-lg bg-gradient-to-r from-green-500/50 to-green-700">
                        <img src={item.image} alt={item.name} className="w-40 h-40 object-cover rounded-lg" />
                        <div className='flex flex-col sm:flex-row text-center justify-between items-center sm:space-x-5'>
                            <h2 className="text-sm font-bold">{item.name}</h2>
                            <p className="text-white font-bold">${item.price}</p>
                        </div>
                        <button className='bg-white py-2 px-2 rounded-full border-2 border-green-500 hover:bg-green-400 hover:text-white transition'>Add to cart</button>
                    </div> ) : null
            })
        }
    </div>
  )
}

export default Products