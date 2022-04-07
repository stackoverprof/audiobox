import React, { useState } from "react";
import CreatePlaylistForm from "src/components/CreatePlaylistForm";
import MainLayout from "src/components/Layouts/MainLayout";
import SearchBox from "src/components/SearchBox";
import TracksGrid from "src/components/TracksGrid";

const CreatePlaylist = () => {
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  return (
    <MainLayout>
      <SearchBox setSearchResult={setSearchResult} />
      <CreatePlaylistForm selectedTracks={selectedTracks} />
      <TracksGrid
        selectedTracks={selectedTracks}
        searchResult={searchResult}
        setSelectedTracks={setSelectedTracks}
      />
    </MainLayout>
  );
};

export default CreatePlaylist;
