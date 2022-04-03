import axios from "axios";
import React, { useState } from "react";
import CreatePlaylist from "../../components/CreatePlaylist";
import SearchBox from "../../components/SearchBox";
import TracksGrid from "../../components/TracksGrid";

const Home = ({ token }) => {
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

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
    <>
      <SearchBox
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onSubmit={handleSearch}
      />
      <CreatePlaylist selectedTracks={selectedTracks} />
      <TracksGrid
        selectedTracks={selectedTracks}
        searchResult={searchResult}
        setSelectedTracks={setSelectedTracks}
      />
    </>
  );
};

export default Home;
