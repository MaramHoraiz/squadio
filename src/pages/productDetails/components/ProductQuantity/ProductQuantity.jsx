import React from "react";
import Counter from "components/common/Counter/Counter";
import "./Style.css"
function ProductQuantity() {
  return (
    <div className="quantity-container">
     <div className="title-container"><h3 className="currency-title">Quantity </h3> <p className="currency red"> $100</p> </div> 
      <Counter itemName={"Pieces"}/>
    </div>
  
  );
}
export default ProductQuantity;
