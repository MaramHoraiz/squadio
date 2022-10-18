import React from "react";
import GroupButton from "components/common/GroupButton/GroupButton";
import RadioButton from "components/common/RadioButton/RadioButton";
import Black from "assets/PNG/black.png";
import Green from "assets/PNG/green.png";
import Red from "assets/PNG/red.png";
function StorageCapacity() {
  return (
    <div>
      <GroupButton title={"Available Color"}>
        <RadioButton label={"Red"} value={"Red"}>
          <img src={Red} /><p className="medium-text">Red</p> 
        </RadioButton>
        <RadioButton label={"Black"} value={"Black"}>
           <img src={Black} /><p className="medium-text">Black</p>
        </RadioButton>
        <RadioButton label={"Green"} value={"Green"}>
          {" "}
          <img src={Green} />
          <p className="medium-text">Green</p>
        </RadioButton>
      </GroupButton>
    </div>
  );
}
export default StorageCapacity;
