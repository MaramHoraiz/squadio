import "./Style.css";
import React, { useState } from "react";

export default function Counter({itemName = "pieces", minCount = 1, maxCount=50}) {
  let [count, setCount] = useState(minCount);

  function incrementCount() {
    if(count < maxCount){
      count = count + 1;
      setCount(count);
    }
  }
  function decrementCount() {
    if(count !== minCount){
      count = count - 1;
      setCount(count);
    }
  }
  return (
    <div className="counter">
      <div className="counter-container">
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
      </div>
      <p className="counter-label"> {count} {itemName}</p>
    </div>
  );
}
