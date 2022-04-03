import React from "react";
import TrackCard from "../TrackCard";

const TracksGrid = ({ searchResult, selectedTracks, setSelectedTracks }) => {
  const handleSelect = (id) => {
    if (selectedTracks.find((x) => x === id)) return;
    setSelectedTracks([...selectedTracks, id]);
  };

  const handleUnSelect = (id) => {
    if (!selectedTracks.find((x) => x === id)) return;
    const deleted = [...selectedTracks].filter((x) => x !== id);
    setSelectedTracks(deleted);
  };
  return (
    <div className="table">
      {searchResult.map((data, i) => (
        <TrackCard
          img={data.album.images[0].url}
          name={data.name}
          artists={data.artists}
          album_name={data.album.name}
          selected={selectedTracks.includes(data.album.images[0].url)}
          handleSelect={() => handleSelect(data.album.images[0].url)}
          handleUnSelect={() => handleUnSelect(data.album.images[0].url)}
          key={i}
        />
      ))}
    </div>
  );
};

export default TracksGrid;
