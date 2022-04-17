import React from 'react';

interface Props {
	data: any;
}

const HeaderPlaylist = ({ data }: Props) => {
	return (
		<div className="flex-bs w-full">
			<div className="flex-ss col w-full max-w-[500px]">
				<p className="mb-1 text-3xl font-medium line-clamp-1">
					{data.name || <span className="opacity-20">Untitled Playlist</span>}
				</p>
				<p className="text-white opacity-50 line-clamp-1">{data.description}</p>
			</div>
			<div className="flex-cs">
				<button className="px-4 py-2 rounded-md border border-opacity-40 transition hover:text-white hover:bg-opacity-30 hover:bg-theme-pink border-theme-pink text-theme-pink">
					EDIT
				</button>
			</div>
		</div>
	);
};

// [TODO] : parse symbol to html

export default HeaderPlaylist;

