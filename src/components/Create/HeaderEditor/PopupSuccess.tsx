import React from 'react';
import usePlaylist from '@core/swr/usePlaylist';
import { Link } from 'react-router-dom';

interface Props {
	playlistID: string;
	handleClose(): void;
}

const PopupSuccess = ({ playlistID, handleClose }: Props) => {
	const { playlist } = usePlaylist(playlistID);
	if (!playlist) return <></>;

	return (
		<div className="fixed flex-cc top-0 left-0 z-40 pl-72 bg-black bg-opacity-80 pointer-events-none full">
			<div className="w-[600px] flex-sc rounded-md bg-white bg-opacity-10 backdrop-blur-sm p-4 pointer-events-auto">
				<div className="overflow-hidden mr-8 w-48 h-48 bg-white bg-opacity-10 rounded-md">
					{playlist.images?.length > 0 && (
						<img src={playlist.images[0].url} alt="" className="" />
					)}
				</div>
				<div className="flex-cs col">
					<p className="mb-4 text-3xl font-semibold">Playlist Created!</p>
					<div className="flex-cc">
						<Link
							to={`/library/${playlistID}`}
							className="px-4 py-2 mr-3 rounded-md border hover:bg-white hover:bg-opacity-20"
						>
							See result
						</Link>
						<button
							onClick={handleClose}
							className="px-4 py-2 rounded-md border hover:bg-white hover:bg-opacity-20"
						>
							Create new one
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PopupSuccess;
