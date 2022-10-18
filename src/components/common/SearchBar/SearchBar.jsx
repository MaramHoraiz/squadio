import React from "react";
import "./Style.css"
import { ReactComponent as SearchIcon } from "assets/SVG/filter_icon.svg";

function SearchBar() {
  return (
    <div className="actionBar flex" onSubmit={(e)=> e.preventDefault()} >
      <button className="search-button" type="submit">
        <SearchIcon height={20} width={20} style={{cursor:"pointer"}}  />
      </button>
      <input
        className="searchApp"
        type={"search"}
        name="search"
        placeholder="Search by product name or seller"
      ></input></div>
  );
}
export default SearchBar;
