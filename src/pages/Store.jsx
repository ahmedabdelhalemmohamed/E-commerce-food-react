import React, { useContext } from "react";
import { storeContext } from "../context/StoreContext";

const Store = () => {

    const {selectedProducts} = useContext(storeContext);
    console.log(selectedProducts);
  return (
    <>
    
    </>
  );
};

export default Store;
