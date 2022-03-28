import React from "react";

const TrackCard = ({ img, name, artists, album_name }) => {
  return (
    <section className="music">
      {/* <!-- section of custom div --> */}
      <div className="card-music">
        {/* <!-- image --> */}
        <img src={img} alt="" />
        {/* <!-- title --> */}
        <h3 className="title">{name}</h3>
        {/* <!-- artist --> */}
        <p className="artist">
          {artists.map((artist, i, arr) => (
            <span key={i}>
              {artist.name}
              {i + 1 < arr.length && ", "}
            </span>
          ))}
        </p>
        {/* <!-- album --> */}
        <p className="album">{album_name}</p>
        {/* <!-- button that does nothin' --> */}
        <button className="play">&#9658; Select</button>
      </div>
    </section>
  );
};

export default TrackCard;
