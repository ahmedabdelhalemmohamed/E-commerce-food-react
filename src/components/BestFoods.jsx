import React, { useState } from "react";
import { Link } from "react-router-dom";

const BestFoods = () => {
  const [famousFood, setFamousFood] = useState([
    {
      name: "Pizza Italian",
      img: "./foods/pizza.jpg",
      des: "The best Italian pizza",
      price: "5$"
    },
    {
      name: "Pizza Italian",
      img: "./foods/pizza.jpg",
      des: "The best Italian pizza",
      price: "5$"
    },
    {
      name: "Pizza Italian",
      img: "./foods/pizza.jpg",
      des: "The best Italian pizza",
      price: "5$"
    },
  ]);

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
              className={`w-75 h-auto border-2 border-green-500  p-5 space-y-2 hover:scale-110 transition-all animate-card `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full h-50">
                <img
                  src={food.img}
                  alt=""
                  className="w-full h-full rounded-2xl"
                />
              </div>
              <div className="text-center">
                <div>
                  <h1 className="text-xl font-bold text-green-500">
                    {food.name}
                  </h1>
                  <p className="font-medium">{food.des}</p>
                </div>
                <div className="bg-green-500 rounded-full w-10 mx-auto mt-2 text-white">
                  {food.price}
                </div>
              </div>
              <button className="mt-5 py-3 px-6 bg-gradient-to-r from-green-500 to-green-300 hover:bg-gradient-to-l hover:from-green-500 hover:to-green-300 rounded-full text-white font-bold border-2 border-green-500 hover:bg-white hover:text-black transition cursor-pointer w-fit ">
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>

      <button className="mx-auto mt-5 py-3 px-6 bg-white text-green-500 rounded-full hover:text-white font-bold border-2 border-green-500 hover:bg-green-500 hover:text-black transition cursor-pointer w-fit ">
        <Link to="/foods">Discover More Foods</Link>
      </button>
    </div>
  );
};

export default BestFoods;
