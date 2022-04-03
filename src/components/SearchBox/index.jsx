import React, { useState } from "react";
import axios from "axios";

const SearchBox = ({ setSearchResult, token }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = async (e) => {
    e.preventDefault();

    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
      params: {
        type: "track",
        q: searchQuery,
      },
    };

    const result = await axios
      .get("https://api.spotify.com/v1/search", config)
      .then((res) => res.data.tracks.items);

    setSearchResult(result);
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
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
