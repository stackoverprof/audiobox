import React, { useState } from "react";
import axiosSpotify from "../../utils/axios-spotify";

const SearchBox = ({ setSearchResult, token }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = async (e) => {
    e.preventDefault();

    let config = {
      params: {
        type: "track",
        q: searchQuery,
      },
    };

    const result = await axiosSpotify
      .get("/search", config)
      .then((res) => res.data.tracks.items);

    setSearchResult(result);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="search-form"
      style={{
        opacity: token ? 1 : 0.5,
        pointerEvents: token ? "auto" : "none",
      }}
    >
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
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
