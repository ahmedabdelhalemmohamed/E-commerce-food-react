import React, { useState } from "react";

const Shopping = () => {

  const [checked, setChecked] = useState(false);

  const filtered = [
    {
      name: "All",
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

  const handleClickFiltered = (i) => {
    const newFilteredColor = filtered.map((item, index) => {
      if (index === i) {
        return { ...item, state: !item.state };
      } else {
        return item;
      }
    })

    setColorChecked(newFilteredColor);
  };


  return (
    <div className="mt-5">
      <div className="text-center text-4xl font-bold text-green-500/60">
        <h1>Products</h1>
      </div>

      <div className="flex  justify-between">

        {colorChecked.map((item, index) => {
          return (
          
            <div className="flex gap-2 items-center cursor-pointer"onClick={() => handleClickFiltered(index)}>
              <div className={`w-5 h-5 rounded-full border ${item.state? "bg-green-500 border-green-700" : ""}`} />
              <p>{item.name}</p> 
            </div>
          )
          }
      )}
      </div>
      

    {/* {
    checked && (
      <div>
        <div className="w-10 h-10 border-2 boder-green-500"/>
      </div>
    )
    } */}
      
    </div>
  );
};

export default Shopping;
