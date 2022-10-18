import React, { useState } from "react";
import "./Style.css"
function Rating() {
    const [rate, setRate] = useState("1");
 const onRateChange = (e)=>{setRate(e.target.value)}
  return  (
    <div className="rate-container ">
    <div className="rate">    

    <input type="radio" id="star5" name="rate" value="5" onClick={onRateChange}/>
    <label htmlFor="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" onClick={onRateChange}/>
    <label htmlFor="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" onClick={onRateChange}/>
    <label htmlFor="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" onClick={onRateChange}/>
    <label htmlFor="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" onClick={(e)=>{console.log(e.target.value)}}/>
    <label htmlFor="star1" title="text">1 star</label>
  </div>
  <span className="grey"> {rate} (200)</span>
  </div>
  ) 
}
export default Rating;
