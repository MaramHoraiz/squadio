import React from "react";

import GroupButton from "components/common/GroupButton/GroupButton";
import RadioButton from "components/common/RadioButton/RadioButton";

import "./Style.css"

function OrderShipping() {
  return (
    <div>
      <GroupButton title={("Shipping")}>
        <div className="shipping-container">

        <RadioButton label={"128"} value={"128"}>
          {" "}
          <p className="medium-text">
            Free <small>Estimated 15 - 30 days</small>
          </p>
        </RadioButton>
        <RadioButton label={"256"} value={"256"}>
          {" "}
          <p className="medium-text">
            Fast <small>Estimated 5 - 7 days</small>
          </p>
        </RadioButton>
        <RadioButton label={"512"} value={"512"}>
          {" "}
          <p className="medium-text">
            Rocket <small>Estimated 2 - 5 days</small>
          </p>
        </RadioButton>
    </div>
      </GroupButton>
    </div>  

  );
}
export default OrderShipping;
