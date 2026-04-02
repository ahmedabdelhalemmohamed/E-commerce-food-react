import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { storeContext } from "../context/StoreContext";

const BestFoods = () => {
  const {setSelectedProducts} = useContext(storeContext);
  
  const famousFood = [
    {
        name: "Burger",
        price: 3,
        image: "./foods/fastFood/burger/burger1.jpg",
        category: "Fast Food"
    },
    {
        name: "Spaghetti",
        price: 3,
        image: "./foods/italian/spaghetti/spaghetti1.jpg",
        category: "Italian"  
    },
    {
        name: "Kebab",
        price: 7,
        image: "./foods/arabic/kebab/kebab1.jpg",
        category: "Arabic", 
        discount: 20  
    },
  ];

  const [product, setProduct] = useState(null);
  const [amount, setAmount] = useState(1);


  return (
    <div className="mx-auto text-center overflow-hidden lg:px-50 px-10 mb-20">
      <div className="text-center mt-10 max-w-full mx-auto">
        <h1 className="text-4xl font-bold text-green-500">Best Foods</h1>
        <p className=" text-xl sm:text-2xl text-green-300">
          The most famous and best-selling foods
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:items-start flex-wrap sm:flex-nowrap lg:justify-around sm:justify-between gap-5 mt-20  ">
        {famousFood.map((food, index) => {
          return (
            <div
              className={`w-75 h-auto border-2 border-green-500  p-5 space-y-2 hover:scale-110 transition-all animate-card relative ${food.discount ? "before:absolute before:content-['discount'] before:-left-[-10px] before:-top-[10px] before:bg-slate-500 before:p-3 before:rounded-full before:text-white before:animate-pulse" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full h-50">
                <img
                  src={food.image}
                  alt=""
                  className="w-full h-full rounded-2xl"
                />
              </div>
              <div className="text-center">
                <div>
                  <h1 className="text-xl font-bold text-green-500">
                    {food.name}
                  </h1>
                </div>
                <div className="bg-green-500 rounded-full w-10 mx-auto mt-2 text-white">
                  {food.price}$
                </div>
              </div>
              <button
                onClick={() => {
                  setProduct(food)
                  
                }}
                className="mt-5 py-3 px-6 bg-gradient-to-r from-green-500 to-green-300 hover:bg-gradient-to-l hover:from-green-500 hover:to-green-300 rounded-full text-white font-bold border-2 border-green-500 hover:bg-white hover:text-black transition cursor-pointer w-fit "
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>

      <button className="mx-auto mt-5 py-3 px-6 bg-white text-green-500 rounded-full hover:text-white font-bold border-2 border-green-500 hover:bg-green-500 hover:text-black transition cursor-pointer w-fit ">
        <Link to="/shopping">Discover More Foods</Link>
      </button>

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
                    <div className="bg-green-500 rounded-full w-15 mx-auto mt-2 text-white text-xl">
                      {product.discount ? (
                        <div className="space-x-2">
                          <span className="line-through">{product.price}</span>
                          <span>
                            {(product.price -
                              ((product.price * product.discount) / 100).toFixed(0)) *
                              amount}
                            $
                          </span>
                        </div>
                      ) : (
                        <div>{product.price}$</div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setProduct(!product);
                      setSelectedProducts((prev) => [
                        ...prev,
                        {
                          ...product,
                          price: product.discount
                            ? (product.price -
                                ((product.price * product.discount) / 100).toFixed(
                                  0,
                                )) *
                              amount
                            : product.price,
                          amount: amount,
                        },
                      ]);
                      setAmount(1);
                    }}
                    className="mt-5  py-3 px-6 bg-gradient-to-r from-green-500 to-green-300 hover:bg-gradient-to-l hover:from-green-500 hover:to-green-300 rounded-full text-white font-bold border-2 border-green-500 hover:bg-white hover:text-black transition cursor-pointer w-fit "
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="p-2">
                  <div className="absolute top-3 right-3 cursor-pointer">
                    <IoIosClose
                      size={30}
                      onClick={() => {
                        setProduct((prev) => !prev);
                        setAmount(1);
                      }}
                    />
                  </div>
      
                  <div>
                    <p className="font-bold mb-2">Amount:</p>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      min={1}
                      className="text-center border-2 border-white p-2 w-15 outline-none text-red-500 font-bold"
                    />
                  </div>
                </div>
              </div>
            )}
    </div>
  );
};

export default BestFoods;
