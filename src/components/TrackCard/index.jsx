import React from "react";

const TrackCard = ({
  img,
  name,
  artists,
  album_name,
  selected,
  handleSelect,
  handleUnSelect,
}) => {
  return (
    <div className="music">
      <div className="card-music">
        <div className="upper">
          <img src={img} alt="" />
          <h3 className="title">{name}</h3>
          <p className="artist">
            {artists.map((artist, i, arr) => (
              <span key={i}>
                {artist.name}
                {i + 1 < arr.length && ", "}
              </span>
            ))}
          </p>
          <p className="album">{album_name}</p>
        </div>
        <button
          className={`play ${selected && "selected"}`}
          onClick={selected ? handleUnSelect : handleSelect}
        >
          {selected ? "Selected" : "Select"}
        </button>
      </div>
    </div>
  );
};

export default TrackCard;
