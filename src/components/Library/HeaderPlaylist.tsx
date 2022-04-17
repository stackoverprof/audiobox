import React from 'react';

interface Props {
	data: any;
}
// [TODO] : edit dan details jadiin satu codebase
const HeaderPlaylist = ({ data }: Props) => {
	return (
		<div className="flex-bs pr-12 w-full">
			<div className="flex-ss col w-full max-w-[500px]">
				<p className="mb-1 text-3xl font-medium line-clamp-1">
					{data.name || <span className="opacity-20">Untitled Playlist</span>}
				</p>
				<p className="text-[#fff7] line-clamp-1">
					<span className="opacity-60 text-theme-blue">
						{data.tracks.total} Track{data.tracks.total > 1 && 's'}
					</span>
					{data.description && <>&ensp;-&ensp;{data.description}</>}
				</p>
			</div>
			<div className="flex-cs">
				<button className="px-4 py-2 rounded-md border border-opacity-40 transition hover:text-white hover:bg-opacity-30 hover:bg-theme-pink border-theme-pink text-theme-pink ml-2.5">
					Edit
				</button>
				<button className="px-4 py-2 rounded-md border border-opacity-40 transition hover:text-white hover:bg-opacity-30 hover:bg-theme-blue border-theme-blue text-theme-blue ml-2.5">
					Details
				</button>
			</div>
		</div>
	);
};

// [TODO] : parse symbol to html

export default HeaderPlaylist;
