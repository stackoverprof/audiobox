import React, { useState } from "react";
import CreatePlaylist from "../../components/CreatePlaylist";
import SearchBox from "../../components/SearchBox";
import TracksGrid from "../../components/TracksGrid";

const Home = ({ token }) => {
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  return (
    <>
      <SearchBox setSearchResult={setSearchResult} token={token} />
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
