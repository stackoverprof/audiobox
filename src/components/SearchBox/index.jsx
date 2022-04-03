import React from "react";

const SearchBox = ({ onSubmit, value, onChange }) => {
  return (
    <form onSubmit={onSubmit} className="search-form">
      <input
        value={value}
        onChange={onChange}
        type="text"
        className="search-input"
        placeholder="Search something..."
      />
      <button type="submit" className="search-btn">
        SEARCH!
      </button>
    </form>
  );
};
export default SearchBox;
