import axios from "axios";
import React, { useState } from "react";
import SearchBox from "../../components/SearchBox";
import TrackCard from "../../components/TrackCard";

const Home = ({ token }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const onChange = (e) => {
    setSearchQuery(e.target.value);
  };

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
      <div className="app-control">
        <SearchBox
          value={searchQuery}
          onChange={onChange}
          onSubmit={handleSearch}
        />
      </div>
      <div className="table">
        {searchResult.map((data, i) => (
          <TrackCard
            img={data.album.images[0].url}
            name={data.name}
            artists={data.artists}
            album_name={data.album.name}
            key={i}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
