import React from 'react';
import CoverPlaylistMini from './CoverPlaylistMini';
import { convert } from 'html-to-text';
import { Link } from 'react-router-dom';

interface Props {
	data: any;
	tracks: any[];
	hover: boolean;
	badges?: string[];
}

const HeaderPlaylist = ({ data, tracks, hover, badges = [] }: Props) => {
	return (
		<div className="flex-sc w-full -xl:mb-4">
			<CoverPlaylistMini tracks={tracks} images={data.images} />
			<Link to={`/playlist/${data.id}`} className="flex-bs pr-12 w-full -md:pr-4 group">
				<div className="flex-ss col w-full max-w-[500px]">
					<div
						className={[
							'mb-1 -xl:text-2xl -md:text-xl text-3xl flex-cc font-medium  transition group-hover:text-theme-blue',
							hover && '',
						].join(' ')}
					>
						<p className="line-clamp-1">
							{data.name || <span className="opacity-20">Untitled Playlist</span>}
						</p>
						{badges.length > 0 && (
							<div className="flex-cc ml-4">
								{badges.map((item, i) => (
									<div
										className="px-2 py-1 text-xs text-white rounded-full border opacity-30"
										key={i}
									>
										{item}
									</div>
								))}
							</div>
						)}
					</div>
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
						'flex-cs -xl:hidden transition',
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
