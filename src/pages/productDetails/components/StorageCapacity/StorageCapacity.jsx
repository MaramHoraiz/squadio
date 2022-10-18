import React from "react";
import GroupButton from "components/common/GroupButton/GroupButton";
import RadioButton from "components/common/RadioButton/RadioButton";

import { ReactComponent as SearchIcon } from "assets/SVG/filter_icon.svg";

function StorageCapacity() {
  return (
    <div>
      <GroupButton title={"Storage capacity"}  >
      <RadioButton label={"128"} value={"128"}> <p>
      128<sub>GB</sub>
    </p></RadioButton>
      <RadioButton label={"256"} value={"256"}> <p>
      256<sub>GB</sub>
    </p></RadioButton>
      <RadioButton label={"512"} value={"512"}> <p>
      512<sub>GB</sub>
    </p></RadioButton>
      </GroupButton>
    </div>
  );
}
export default StorageCapacity;
