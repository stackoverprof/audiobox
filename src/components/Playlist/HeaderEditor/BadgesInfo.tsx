import React from 'react';
import usePlaylist from '@core/swr/usePlaylist';
import { MdOutlineGroup, MdOutlineGroupOff, MdPublic } from 'react-icons/md';
import { RiShieldKeyholeLine } from 'react-icons/ri';
import { useEditPlaylist } from '@core/redux/reducer/editPlaylist';

const BadgesInfo = () => {
	const { id } = useEditPlaylist();
	const { playlist } = usePlaylist(id);

	return (
		<div className="flex-cs col pl-2">
			<div className="flex-cc my-1 opacity-60 hover:opacity-100">
				{playlist.public ? <MdPublic size={20} /> : <RiShieldKeyholeLine size={20} />}
				<p className="ml-2 text-sm">{playlist.public ? 'Public' : 'Private'}</p>
			</div>
			<div className="flex-cc my-1 opacity-60 hover:opacity-100">
				{playlist.collaborative ? (
					<MdOutlineGroup size={20} />
				) : (
					<MdOutlineGroupOff size={20} />
				)}
				<p className="ml-2 text-sm">
					{playlist.collaborative ? 'Collaborative' : 'Non-collaborative'}
				</p>
			</div>
		</div>
	);
};

export default BadgesInfo;
