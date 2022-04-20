import React from 'react';
import CoverPlaylistMini from './CoverPlaylistMini';
import { convert } from 'html-to-text';
import { Link } from 'react-router-dom';

interface Props {
	data: any;
	tracks: any[];
	hover: boolean;
}

const HeaderPlaylist = ({ data, tracks, hover }: Props) => {
	return (
		<div className="flex-sc w-full -xl:mb-4">
			<CoverPlaylistMini tracks={tracks} images={data.images} />
			<Link to={`/playlist/${data.id}`} className="flex-bs pr-12 w-full -md:pr-4 group">
				<div className="flex-ss col w-full max-w-[500px]">
					<p
						className={[
							'mb-1 -xl:text-2xl -md:text-xl text-3xl font-medium line-clamp-1 transition group-hover:text-theme-blue',
							hover && '',
						].join(' ')}
					>
						{data.name || <span className="opacity-20">Untitled Playlist</span>}
					</p>
					<p className="text-[#fff7] text-left line-clamp-1">
						<span className="opacity-60 text-theme-blue">
							{data.tracks.total} Track
							{data.tracks.total > 1 && 's'}
						</span>
						{data.description && <>&ensp;-&ensp;{convert(data.description)}</>}
					</p>
				</div>
				<div
					className={[
						'flex-cs -md:hidden transition',
						hover ? 'opacity-100' : 'opacity-0',
					].join(' ')}
				>
					<button className="px-4 py-2 rounded-md border border-opacity-40 transition hover:text-white hover:bg-opacity-30 hover:bg-theme-blue border-theme-blue text-theme-blue ml-2.5">
						Open
					</button>
				</div>
			</Link>
		</div>
	);
};

export default HeaderPlaylist;
