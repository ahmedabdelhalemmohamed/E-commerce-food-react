import React, { useState } from 'react'
import products from '../js/Products'
import { IoIosClose } from "react-icons/io";
import { useContext } from 'react';
import { storeContext } from '../context/StoreContext';


const Products = ({category, price}) => {

    const {setSelectedProducts} = useContext(storeContext);

    const [Products, setProducts] = useState(products);  

    const [product, setProduct] = useState(null);
    const [amount, setAmount] = useState(1);

  return (
    <div className='grid justify-between grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 px-5 md:px-8'>
        {
            Products.map((item, index) => {
                return category === "All" && price === "All" ? (
                    <div key={index} className="flex flex-col items-center gap-2  p-5 rounded-lg bg-gradient-to-r from-green-500/50 to-green-700">
                        <img src={item.image} alt={item.name} className="w-40 h-40 object-cover rounded-lg" />
                        <div className='flex flex-col sm:flex-row text-center justify-between items-center sm:space-x-5'>
                            <h2 className="text-sm font-bold">{item.name}</h2>
                            <p className="text-white font-bold">{item.price}</p>
                        </div>
                        <button className='bg-white py-2 px-2 rounded-full border-2 border-green-500 hover:bg-green-400 hover:text-white transition' onClick={() => setProduct(item)}>Add to cart</button>
                    </div>
                ) : 
                category === "All" && price === item.price ? (
                    <div key={index} className="flex flex-col items-center gap-2  p-5 rounded-lg bg-gradient-to-r from-green-500/50 to-green-700">
                        <img src={item.image} alt={item.name} className="w-40 h-40 object-cover rounded-lg" />
                        <div className='flex flex-col sm:flex-row text-center justify-between items-center sm:space-x-5'>
                            <h2 className="text-sm font-bold">{item.name}</h2>
                            <p className="text-white font-bold">{item.price}</p>
                        </div>
                        <button className='bg-white py-2 px-2 rounded-full border-2 border-green-500 hover:bg-green-400 hover:text-white transition' onClick={() => setProduct(!product)}>Add to cart</button>
                    </div>)
                :
                category === item.category && price === "All" ? (
                    <div key={index} className="flex flex-col items-center gap-2  p-5 rounded-lg bg-gradient-to-r from-green-500/50 to-green-700">
                        <img src={item.image} alt={item.name} className="w-40 h-40 object-cover rounded-lg" />
                        <div className='flex flex-col sm:flex-row text-center justify-between items-center sm:space-x-5'>
                            <h2 className="text-sm font-bold">{item.name}</h2>
                            <p className="text-white font-bold">{item.price}</p>
                        </div>
                        <button className='bg-white py-2 px-2 rounded-full border-2 border-green-500 hover:bg-green-400 hover:text-white transition' onClick={() => setProduct(!product)}>Add to cart</button>
                    </div>
                ) : category === item.category && price === item.price ? (
                    <div key={index} className="flex flex-col items-center gap-2  p-5 rounded-lg bg-gradient-to-r from-green-500/50 to-green-700">
                        <img src={item.image} alt={item.name} className="w-40 h-40 object-cover rounded-lg" />
                        <div className='flex flex-col sm:flex-row text-center justify-between items-center sm:space-x-5'>
                            <h2 className="text-sm font-bold">{item.name}</h2>
                            <p className="text-white font-bold">${item.price}</p>
                        </div>
                        <button className='bg-white py-2 px-2 rounded-full border-2 border-green-500 hover:bg-green-400 hover:text-white transition' onClick={() => setProduct(!product)}>Add to cart</button>
                    </div> ) : null
            })
        }

        {product && (
            <div className="z-100 fixed top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 w-fit  bg-green-300 flex items-center rounded-2xl text-center">
              <div
                className={`w-75 h-auto border-r-2 border-green-500  p-5 space-y-2  transition-all`}
              >
                <div className="w-full h-50">
                  <img
                    src={product.image}
                    alt=""
                    className="w-full h-full rounded-2xl"
                  />
                </div>
                <div className="text-center">
                  <div>
                    <h1 className="text-xl font-bold text-green-500">
                      {product.name}
                    </h1>
                  </div>
                  <div className="bg-green-500 rounded-full w-10 mx-auto mt-2 text-white">
                    ${product.price}    
                  </div>
                </div>
                <button
                  onClick={() => {
                    setProduct(!product);
                    setSelectedProducts((prev) => [...prev, product]);
                }}
                  className="mt-5  py-3 px-6 bg-gradient-to-r from-green-500 to-green-300 hover:bg-gradient-to-l hover:from-green-500 hover:to-green-300 rounded-full text-white font-bold border-2 border-green-500 hover:bg-white hover:text-black transition cursor-pointer w-fit "
                >
                  Add to Cart
                </button>
              </div>
              <div className="p-2">
                <div className="absolute top-3 right-3 cursor-pointer">
                  <IoIosClose size={30} onClick={() => setProduct((prev) => !prev)}/>
                </div>
                
                <div>
                  <p className="font-bold mb-2">Amount:</p>
                  <input type="number" value={amount} onChange={((e) => setAmount(e.target.value))} min={1} className="text-center border-2 border-white p-2 w-15 outline-none text-red-500 font-bold"/>
                </div>
              </div>
            </div>)}

    </div>
  )
}

export default Products