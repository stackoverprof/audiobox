import React from "react";
import TrackCard from "../TrackCard";

const TracksGrid = ({ searchResult, selectedTracks, setSelectedTracks }) => {
  return (
    <div className="table">
      {searchResult.map((data, i) => (
        <TrackCard
          data={data}
          selectedTracks={selectedTracks}
          setSelectedTracks={setSelectedTracks}
          key={i}
        />
      ))}
    </div>
  );
};

export default TracksGrid;
