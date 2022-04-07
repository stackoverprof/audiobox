import React, { useState } from "react";
import CreatePlaylistForm from "../../components/CreatePlaylistForm";
import SearchBox from "../../components/SearchBox";
import TracksGrid from "../../components/TracksGrid";

const CreatePlaylist = () => {
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  return (
    <>
      <SearchBox setSearchResult={setSearchResult} />
      <CreatePlaylistForm selectedTracks={selectedTracks} />
      <TracksGrid
        selectedTracks={selectedTracks}
        searchResult={searchResult}
        setSelectedTracks={setSelectedTracks}
      />
    </>
  );
};

export default CreatePlaylist;
