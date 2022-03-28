import "./styles.css";
import tracks_data from "./data/tracks";
import TrackCard from "./components/TrackCard";

export default function App() {
  return (
    <div className="App">
      <div className="table">
        {tracks_data.map((data, i) => (
          <TrackCard
            img={data.album.images[0].url}
            name={data.name}
            artists={data.artists}
            album_name={data.album.name}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
