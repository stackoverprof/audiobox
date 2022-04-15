import React from 'react';
interface Props {
	data: any;
	index: number;
}

const TrackCard = ({ data, index }: Props) => {
	return (
		<div className="flex-bc p-4 bg-white bg-opacity-10 rounded-lg border">
			<div className="flex-bc col h-full">
				<div className="flex-cs col mb-4">
					<img
						src={data.album.images[0].url}
						alt=""
						className="object-cover mb-4 w-40 h-40 rounded-md"
					/>
					<div className="flex-ss col w-40">
						<h3 className="overflow-hidden mb-3 w-full font-semibold text-left line-clamp-2 text-ellipsis">
							<span className="text-theme-pink">#{index + 1}</span>&ensp;{data.name}
						</h3>
						<p className="mb-1 w-full text-sm truncate text-ellipsis">
							{data.artists.map((artist, i, arr) => (
								<span key={i}>
									{artist.name}
									{i + 1 < arr.length && ', '}
								</span>
							))}
						</p>
						<p className="w-full text-sm truncate opacity-40 text-ellipsis">
							{data.album.name}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TrackCard;

