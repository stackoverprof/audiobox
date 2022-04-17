import React from 'react';
import * as fetchers from '@core/api/fetchers';
import BadgesInfo from './BadgesInfo';
import DescriptionInput from './DescriptionInput';
import SubmitPlaylist from './SubmitPlaylist';
import TitleInput from './TitleInput';
import TracksSelected from './TracksSelected';
import useUser from '@core/swr/user';
import useUserPlaylist from '@core/swr/userPlaylists';
import { setDescription, setTitle, useCreatePlaylist } from '@core/redux/reducer/createPlaylist';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

const HeaderEditor = () => {
	const { title, description, selectedTracks } = useCreatePlaylist();
	const { user } = useUser();
	const { mutate } = useUserPlaylist();

	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!selectedTracks.length) return toast.error('Select tracks first!');
		if (title.length < 10) return toast.error('Title is too short!');

		const uris = selectedTracks.map((track) => track.uri);

		await fetchers.createPlaylist({
			user_id: user.id,
			title,
			description,
			uris,
		});

		// [TODO] : popup see playlist or close

		mutate();
	};

	return (
		<div
			className="flex-bs col w-full h-[260px]"
			style={{ background: 'linear-gradient(0deg, #fff1, #fff0)' }}
		>
			<form onSubmit={handleSubmit} className="flex-bc w-full">
				<div className="flex-cs col flex-1 mr-8 w-full">
					<TitleInput value={title} onChange={(val) => dispatch(setTitle(val))} />
					<DescriptionInput
						value={description}
						onChange={(val) => dispatch(setDescription(val))}
					/>
				</div>
				<div className="flex-ss col w-64 h-20">
					<SubmitPlaylist />
					<BadgesInfo />
				</div>
			</form>
			<TracksSelected />
		</div>
	);
};

export default HeaderEditor;
