import React from "react";
import "./TodoSearch.css";
const TodoSearch = ({ search, setSearch }) => {
  const onSearchValueChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <input
        className="TodoSearch"
        type="text"
        placeholder="Cebolla"
        value={search}
        onChange={onSearchValueChange}
      />

    
    </div>
  );
};

export default TodoSearch;
