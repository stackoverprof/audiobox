import React from 'react';
import * as editPlaylistRedux from '@core/redux/reducer/editPlaylist';
import * as fetchers from '@core/api/fetchers';
import BadgesInfo from './BadgesInfo';
import DescriptionInput from './DescriptionInput';
import EditingButtons from './EditingButtons';
import SubmissionButtons from './SubmissionButtons';
import TitleInput from './TitleInput';
import usePlaylist from '@core/swr/usePlaylist';
import useUserPlaylist from '@core/swr/userPlaylists';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
	setDescription,
	setEditMode,
	setTitle,
	useEditPlaylist,
} from '@core/redux/reducer/editPlaylist';

const HeaderEditor = () => {
	const { id, title, description, selectedTracks, editMode } = useEditPlaylist();
	const swrPlaylist = usePlaylist(id);
	const swrUserPlaylists = useUserPlaylist();

	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!selectedTracks.length) return toast.error('Select tracks first!');
		if (!title) return toast.error('Please provide a title!');
		if (title.length < 10) return toast.error('Title is too short!');
		if (!description) return toast.error('Please provide a description!');

		const uris = selectedTracks.map((track) => track.uri);

		const { success } = await fetchers.editPlaylist({
			playlist_id: id,
			title,
			description,
			uris,
		});

		if (!success) return toast.error('Failed to edit playlist, try again');

		await swrPlaylist.mutate();
		await swrUserPlaylists.mutate();

		dispatch(editPlaylistRedux.reset());
		dispatch(setEditMode(false));
		toast.success('Playlist updated!');
	};

	const navigate = useNavigate();
	const handleDelete = async () => {
		const { success } = await fetchers
			.unfollowPlaylist({ playlist_id: id })
			.then(() => ({ success: true }))
			.catch(() => ({ success: false }));

		if (!success) return toast.error('Failed to remove playlist!');
		await swrPlaylist.mutate();
		await swrUserPlaylists.mutate();
		navigate('/library');
		toast.success('Playlist removed!');
	};

	const handleFollow = async () => {
		const { success } = await fetchers
			.followPlaylist({ playlist_id: id })
			.then(() => ({ success: true }))
			.catch(() => ({ success: false }));

		if (!success) return toast.error('Failed to follow playlist!');
		await swrPlaylist.mutate();
		await swrUserPlaylists.mutate();
		toast.success('Added to library!');
	};

	return (
		<div
			className="flex-ss col w-full h-[200px]"
			style={{ background: 'linear-gradient(0deg, #fff1, #fff0)' }}
		>
			<form onSubmit={handleSubmit} className="flex-sc w-full">
				<div className="flex-cs col pr-8 w-3/4 max-w-[820px]">
					<TitleInput
						disabled={!editMode}
						value={title}
						onChange={(val) => dispatch(setTitle(val))}
					/>
					<DescriptionInput
						disabled={!editMode}
						value={description}
						onChange={(val) => dispatch(setDescription(val))}
					/>
				</div>
				<div className="flex-ss col w-1/4 h-20">
					{editMode ? (
						<SubmissionButtons />
					) : (
						<EditingButtons handleFollow={handleFollow} handleDelete={handleDelete} />
					)}
					<BadgesInfo />
				</div>
			</form>
		</div>
	);
};

export default HeaderEditor;
