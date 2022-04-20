import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
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
		<div className="fixed flex-cc top-0 left-0 z-40 pl-72 bg-black bg-opacity-80 -md:pb-20 -md:pl-0 full">
			<OutsideClickHandler onOutsideClick={handleClose}>
				<div className="w-[600px] -md:w-auto flex-s -md:p-8 -md:col -md:flex-cc rounded-md bg-white bg-opacity-10 backdrop-blur-sm p-4">
					<div className="overflow-hidden mr-8 w-48 h-48 bg-white bg-opacity-10 rounded-md -md:mr-0 -md:mb-8">
						{playlist.images?.length > 0 && (
							<img src={playlist.images[0].url} alt="" className="" />
						)}
					</div>
					<div className="flex-cs col -md:flex-cc">
						<p className="mb-4 text-3xl font-semibold">Playlist Created!</p>
						<div className="flex-cc">
							<Link
								to={`/playlist/${playlistID}`}
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
			</OutsideClickHandler>
		</div>
	);
};

export default PopupSuccess;
