import React, { useEffect, useState } from 'react';
import * as createPlaylistRedux from '@core/redux/reducer/createPlaylist';
import * as fetchers from '@core/api/fetchers';
import BadgesInfo from './BadgesInfo';
import DescriptionInput from './DescriptionInput';
import PopupSuccess from './PopupSuccess';
import SubmissionButtons from './SubmissionButtons';
import TitleInput from './TitleInput';
import TracksSelected from './TracksSelected';
import useUserData from '@core/swr/userData';
import useUserPlaylist from '@core/swr/userPlaylists';
import { setDescription, setTitle, useCreatePlaylist } from '@core/redux/reducer/createPlaylist';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

const HeaderEditor = () => {
	const [showPopup, setShowPopup] = useState(false);
	const [playlistID, setPlaylistID] = useState('');

	const { title, description, selectedTracks } = useCreatePlaylist();
	const { user } = useUserData();
	const swrUserPlaylists = useUserPlaylist();

	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!selectedTracks.length) return toast.error('Select tracks first!');
		if (!title) return toast.error('Please provide a title!');
		if (title.length < 10) return toast.error('Title is too short!');
		if (!description) return toast.error('Please provide a description!');

		const uris = selectedTracks.map((track) => track.uri);

		const { success, playlist_id } = await fetchers.createPlaylist({
			user_id: user.id,
			title,
			description,
			uris,
		});

		if (!success) return toast.error('Failed to create playlist, please try again');

		swrUserPlaylists.mutate();
		setPlaylistID(playlist_id);
		setShowPopup(true);
	};

	const resetPage = () => {
		setShowPopup(false);
		setPlaylistID('');
		dispatch(createPlaylistRedux.reset());
	};

	useEffect(() => {
		return () => {
			if (showPopup) resetPage();
		};
	}, [showPopup]);

	return (
		<>
			<div
				className="flex-ss col pt-0 pr-8 pb-4 pl-10 w-full -sm:px-4"
				style={{ background: 'linear-gradient(0deg, #fff1, #fff0)' }}
			>
				<form onSubmit={handleSubmit} className="flex-sc w-full -xl:flex-ss -xl:col">
					<div className="flex-cs col w-full max-w-[780px] pr-8 -lg:pr-4">
						<TitleInput value={title} onChange={(val) => dispatch(setTitle(val))} />
						<DescriptionInput
							value={description}
							onChange={(val) => dispatch(setDescription(val))}
						/>
					</div>
					<div className="flex-ss col mt-8 w-72 -lg:flex-cs -lg:col -xl:mt-4 -xl:pl-2 -xl:mb-2 -xl:w-auto -xl:flex-row -xl:flex-cc">
						<SubmissionButtons />
						<BadgesInfo />
					</div>
				</form>

				<TracksSelected />
			</div>
			{showPopup && <PopupSuccess playlistID={playlistID} handleClose={resetPage} />}
		</>
	);
};

export default HeaderEditor;
