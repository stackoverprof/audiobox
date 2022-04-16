import React from 'react';
import DescriptionInput from './DescriptionInput';
import TitleInput from './TitleInput';
import TracksSelected from './TracksSelected';
import { setDescription, setTitle, useCreatePlaylist } from '@core/redux/reducer/createPlaylist';
import { useDispatch } from 'react-redux';

const HeaderEditor = () => {
	const { title, description } = useCreatePlaylist();

	const dispatch = useDispatch();

	return (
		<div
			className="flex-bs col w-full h-[260px]"
			style={{ background: 'linear-gradient(0deg, #fff1, #fff0)' }}
		>
			<div className="flex-bc w-full">
				<div className="flex-cs col flex-1 w-full">
					<TitleInput value={title} onChange={(val) => dispatch(setTitle(val))} />
					<DescriptionInput
						value={description}
						onChange={(val) => dispatch(setDescription(val))}
					/>
				</div>
				<div className="w-72 h-20"></div>
			</div>
			<TracksSelected />
		</div>
	);
};

export default HeaderEditor;

