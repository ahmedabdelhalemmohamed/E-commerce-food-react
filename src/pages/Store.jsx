import React, { useContext } from "react";
import { storeContext } from "../context/StoreContext";

const Store = () => {

    const {selectedProducts} = useContext(storeContext);
    console.log(selectedProducts);
  return (
    <div className="text-center mt-10 font-bold text-2xl text-green-500/60">
        <div>
            <h1>Your Products</h1>
        </div>
        {
            selectedProducts.length > 0 ? 
            (
                selectedProducts.map((item, index) => {

                   return  <div key={index} className="flex flex-col items-center gap-2  p-5 rounded-lg bg-gradient-to-r from-green-500/50 to-green-700">
                            <img src={item.image} alt={item.name} className="w-40 h-40 object-cover rounded-lg" />
                            <div className='flex flex-col sm:flex-row text-center justify-between items-center sm:space-x-5'>
                                <h2 className="text-sm font-bold">{item.name}</h2>
                                <p className="text-white font-bold">{item.price}</p>
                            </div>
                            <button className='bg-white py-2 px-2 rounded-full border-2 border-green-500 hover:bg-green-400 hover:text-white transition' onClick={() => setProduct(item)}>remove from cart</button>
                        </div>
                })
            ) : null
        }
    </div>
  );
};

export default Store;
