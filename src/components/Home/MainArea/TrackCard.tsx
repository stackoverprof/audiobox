import React from 'react';
interface Props {
	data: any;
}

const TrackCard = ({ data }: Props) => {
	return (
		<div className="flex-bc p-4 bg-white bg-opacity-10 rounded-lg border">
			<div className="flex-bc col h-full">
				<div className="flex-cs col mb-4">
					<img
						src={data.images[0].url}
						alt=""
						className="object-cover mb-4 w-40 h-40 rounded-md"
					/>
					<div className="flex-ss col w-40">
						<h3 className="mb-2 font-semibold">{data.name}</h3>
						<p className="text-sm">
							{data.artists.map((artist, i, arr) => (
								<span key={i}>
									{artist.name}
									{i + 1 < arr.length && ', '}
								</span>
							))}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TrackCard;

