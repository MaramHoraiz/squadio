import React from "react";
import SearchBar from "components/common/SearchBar/SearchBar";
import Dropdown from "components/common/Dropdown/Dropdown";
const options = [
  { value: "All", name: "All" },
  { value: "Product Details", name: "Product Details" },
  { value: "Order", name: "Order" },
  { value: "Service", name: "Service" },
];
function HeaderSearch({}) {
  return (
    <form className="flex">
      <Dropdown options={options} value={options[0].name} />
      <SearchBar />
    </form>
  );
}
export default HeaderSearch;
