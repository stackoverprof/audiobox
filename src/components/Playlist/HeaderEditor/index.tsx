import React from 'react';
import * as editPlaylistRedux from '@core/redux/reducer/editPlaylist';
import * as fetchers from '@core/api/fetchers';
import BadgesInfo from './BadgesInfo';
import DescriptionInput from './DescriptionInput';
import EditButton from './EditButton';
import SubmitPlaylist from './SubmitPlaylist';
import TitleInput from './TitleInput';
import usePlaylist from '@core/swr/usePlaylist';
import useUserPlaylist from '@core/swr/userPlaylists';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
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
		if (title.length < 10) return toast.error('Title is too short!');

		const uris = selectedTracks.map((track) => track.uri);

		await fetchers.editPlaylist({
			playlist_id: id,
			title,
			description,
			uris,
		});

		await swrPlaylist.mutate();
		await swrUserPlaylists.mutate();

		dispatch(editPlaylistRedux.reset());
		dispatch(setEditMode(false));
		toast.success('Playlist updated!');
	};

	return (
		<div
			className="flex-bs col w-full h-[200px]"
			style={{ background: 'linear-gradient(0deg, #fff1, #fff0)' }}
		>
			<form onSubmit={handleSubmit} className="flex-bc w-full">
				<div className="flex-cs col flex-1 mr-8 w-full">
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
				<div className="flex-ss col w-[300px] h-20">
					{editMode ? <SubmitPlaylist /> : <EditButton />}
					<BadgesInfo />
				</div>
			</form>
		</div>
	);
};

export default HeaderEditor;
