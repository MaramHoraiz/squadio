import React from "react";
import "./Style.css"
function ProductStock({ stock , pricing }) {
  
  return (
   <div>
    <p className="stock-label">{stock}</p>
    <p className="pricing-label">{pricing}</p>
   </div>
  ) 
}
export default ProductStock;
