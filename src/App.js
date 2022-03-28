import "./styles.css";
import data from "./data/song";
import TrackCard from "./components/TrackCard";

export default function App() {
  return (
    <div className="App">
      <TrackCard
        img={data.album.images[0].url}
        name={data.name}
        artists={data.artists}
        album_name={data.album.name}
      />
    </div>
  );
}
