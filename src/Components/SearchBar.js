import React from "react";
const SearchBar = (props) => {
  return (
    <div class="d-flex">
      <input
        onChange={(event) =>
          props.setQuery(event.target.value.toLocaleLowerCase())
        }
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </div>
  );
};
export default SearchBar;
