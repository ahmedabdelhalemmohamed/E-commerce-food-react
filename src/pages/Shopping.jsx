import React, { useState } from "react";
import Products from "../components/Products";

const Shopping = () => {

  const [checked, setChecked] = useState(false);

  const filtered = [
    {
      "name": "All",
      "state": false
    }, 
    {
      "name": "Fast Food",
      "state": false
    }
    , {
      "name": "Italian",
      "state": false
    }, {
      "name": "Arabic",
      "state": false
    }, {
      "name": "Healthy",
      "state": false
    }, {
      "name": "Sweets",
      "state": false
    }, {
      "name": "Drinks",
      "state": false
    }
  ];

  const [colorChecked, setColorChecked] = useState(filtered);
  const [category, setCategory] = useState("All");

  const handleClickFiltered = (i) => {
    const newFilteredColor = filtered.map((item, index) => {
      if (index === i) {
        return { ...item, state: !item.state };
      } else {
        return item;
      }
    })

    setColorChecked(newFilteredColor);
    setCategory(newFilteredColor[i].name);
  };


  return (
    <div className="mt-5">
      <div className="text-center text-4xl font-bold text-green-500/60 mb-5">
        <h1>Products</h1>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-between px-5 gap-5 md:px-10 border-1 border-green-500 py-5 m-5 mb-10">

        {colorChecked.map((item, index) => {
          return (
          
            <div className="flex gap-2 items-center cursor-pointer mx-auto" onClick={() => handleClickFiltered(index)}>
              <div className={`w-5 h-5 rounded-full border ${item.state? "bg-green-500 border-green-700" : ""}`} />
              <p>{item.name}</p> 
            </div>
          )
          }
      )}
      <form action="" className="mx-auto">
        <select name="" id="">
          <option value="2">2$</option>
        </select>
      </form>
      </div>
      

    {
      <Products category={category}/>
    }
      
    </div>
  );
};

export default Shopping;
