import { PropTypes } from 'prop-types';
import React from 'react';
import useForm from 'src/core/hooks/useForm';
import useUser from 'src/core/swr/user';
import axiosSpotify from 'src/core/utils/axios-spotify';

const CreatePlaylistForm = ({ selectedTracks }) => {
	const { user } = useUser();

	const { form, mutateForm } = useForm({
		title: '',
		description: '',
	});

	const handleCreatePlaylist = async (e) => {
		e.preventDefault();
		if (!user.id) return;
		if (!selectedTracks.length) return;
		if (form.title.length < 10) return alert('Title is too short, Required 10 characters!');

		const uris = selectedTracks;

		// create a new playlist
		const playlist_id = await axiosSpotify
			.post(`/users/${user.id}/playlists`, {
				name: form.title,
				description: form.description,
				public: false,
				collaborative: false,
			})
			.then((res) => res.data.id)
			.catch((err) => err.response.data);

		// add the selected tracks to the playlist
		const result = await axiosSpotify
			.post(`/playlists/${playlist_id}/tracks`, {
				uris,
			})
			.then((res) => res.data.snapshot_id)
			.catch((err) => console.error(err.response.data));

		// confirm success
		alert('playlist created: ' + result);
	};

	return (
		<form
			onSubmit={handleCreatePlaylist}
			className="cp-form"
			style={{
				opacity: selectedTracks.length ? 1 : 0.5,
				pointerEvents: selectedTracks.length ? 'auto' : 'none',
			}}
		>
			<input
				value={form.title}
				name="title"
				onChange={mutateForm}
				type="text"
				className="cp-title-input"
				placeholder="Title"
			/>
			<textarea
				className="cp-description-input"
				value={form.description}
				name="description"
				placeholder="Description"
				onChange={mutateForm}
			></textarea>
			<button type="submit" className="cp-btn">
				Create Playlist ({selectedTracks.length})
			</button>
		</form>
	);
};

CreatePlaylistForm.propTypes = {
	selectedTracks: PropTypes.any,
};

export default CreatePlaylistForm;

