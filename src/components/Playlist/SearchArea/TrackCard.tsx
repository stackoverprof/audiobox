import React from 'react';

interface Props {
	data: any;
	selected: boolean;
}

const TrackCard = ({ data }: Props) => {
	if (!data) return <></>;

	return (
		<div className="flex-ss col overflow-hidden p-4 m-4 bg-white bg-opacity-10 rounded-lg backdrop-blur">
			<div className="flex-cs col mb-4">
				{data.album?.images?.length > 0 && (
					<img
						src={data.album?.images[0].url}
						alt=""
						className="object-cover mb-4 w-40 h-40 rounded-md -sm:w-32 -sm:h-32"
					/>
				)}
				<div className="flex-ss col w-40 -sm:w-32">
					<h3 className="overflow-hidden mb-3 w-full font-semibold text-left line-clamp-1">
						{data.name}
					</h3>
					<p className="mb-1 w-full text-sm line-clamp-1">
						{data.artists?.map((artist, i, arr) => (
							<span key={i}>
								{artist.name}
								{i + 1 < arr.length && ', '}
							</span>
						))}
					</p>
					<p className="w-full text-xs opacity-40 line-clamp-1 -sm:y-32">
						{data.album?.name}
					</p>
				</div>
			</div>
		</div>
	);
};

export default TrackCard;
