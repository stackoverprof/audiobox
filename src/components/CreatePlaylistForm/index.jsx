import { PropTypes } from 'prop-types';
import React, { useState } from 'react';
import useForm from '../../core/hooks/useForm';
import useUser from '../..//core/swr/user';
import axiosSpotify from '../..//core/utils/axios-spotify';
import SuccessCard from './SuccessCard';

const CreatePlaylistForm = ({ selectedTracks, resetTracks }) => {
	const [status, setStatus] = useState('initial');

	const { user } = useUser();

	const { form, mutateForm, resetForm } = useForm({
		title: '',
		description: '',
	});

	const handleCreatePlaylist = async (e) => {
		e.preventDefault();
		if (!user.id) return;
		if (!selectedTracks.length) return;
		if (form.title.length < 10) return alert('Title is too short, Required 10 characters!');

		setStatus('loading');

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
		if (result) {
			resetForm();
			resetTracks();
			setStatus('success');
		}
	};

	return (
		<>
			{status === 'success' && <SuccessCard handleClose={() => setStatus('initial')} />}
			<div className="flex-sc col w-full">
				<div className="flex-bc px-4 py-3 mb-4 w-full bg-white rounded-md">
					<p className="text-base text-lg font-semibold">New Playlist</p>
					<p className="text-base text-lg">{selectedTracks.length} Tracks</p>
				</div>
				<form onSubmit={handleCreatePlaylist} className="flex-sc col w-full">
					<input
						value={form.title}
						name="title"
						onChange={mutateForm}
						type="text"
						className="px-4 py-3 mb-4 w-full bg-white bg-opacity-10 rounded-md"
						placeholder="Title"
						minLength={10}
					/>
					<textarea
						className="px-4 py-3 mb-4 w-full h-32 bg-white bg-opacity-10 rounded-md"
						value={form.description}
						name="description"
						placeholder="Description"
						onChange={mutateForm}
					></textarea>
					<button
						type="submit"
						disabled={!selectedTracks.length}
						className={[
							'flex-bc px-4 py-3 w-full text-base font-semibold bg-green-300 rounded-md',
							selectedTracks.length ? 'opacity-100' : 'opacity-30 cursor-not-allowed',
						].join(' ')}
					>
						<p className="text-lg">Create Playlist </p>
						<p className="pb-1 text-3xl">+</p>
					</button>
				</form>
			</div>
		</>
	);
};

CreatePlaylistForm.propTypes = {
	selectedTracks: PropTypes.any,
	resetTracks: PropTypes.func.isRequired,
};

export default CreatePlaylistForm;

