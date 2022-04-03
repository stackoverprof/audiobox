import React, { useState } from "react";

const CreatePlaylist = ({ selectedTracks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreatePlaylist = () => {};

  return (
    <form
      onSubmit={handleCreatePlaylist}
      className="cp-form"
      style={{
        opacity: selectedTracks.length ? 1 : 0.5,
        pointerEvents: selectedTracks.length ? "auto" : "none",
      }}
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="cp-title-input"
        placeholder="Title"
      />
      <textarea
        className="cp-description-input"
        value={description}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit" className="cp-btn">
        Create Playlist ({selectedTracks.length})
      </button>
    </form>
  );
};

export default CreatePlaylist;
