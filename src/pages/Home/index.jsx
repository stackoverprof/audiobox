import React, { useState } from "react";
import CreatePlaylist from "../../components/CreatePlaylist";
import SearchBox from "../../components/SearchBox";
import TracksGrid from "../../components/TracksGrid";

const Home = ({ token, user }) => {
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  console.log(selectedTracks);

  return (
    <>
      <SearchBox setSearchResult={setSearchResult} token={token} />
      <CreatePlaylist selectedTracks={selectedTracks} user={user} />
      <TracksGrid
        selectedTracks={selectedTracks}
        searchResult={searchResult}
        setSelectedTracks={setSelectedTracks}
      />
    </>
  );
};

export default Home;
