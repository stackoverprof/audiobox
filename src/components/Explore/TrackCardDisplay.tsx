import React from 'react';

interface Props {
	data: any;
}

const TrackCardDisplay = ({ data }: Props) => {
	return <div className="h-full backdrop-blur-sm w-full bg-white bg-opacity-10 rounded-md"></div>;
};

export default TrackCardDisplay;

