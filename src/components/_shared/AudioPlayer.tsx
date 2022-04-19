import React, { useEffect, useRef } from 'react';
import { usePlayer } from '@core/redux/reducer/player';

const AudioPlayer = () => {
	const { currentTrack, paused } = usePlayer();
	const audio = useRef<any>(null);

	useEffect(() => {
		if (audio.current) {
			if (paused) {
				audio.current.pause();
			} else {
				audio.current.play();
			}
		}
	}, [paused, audio]);

	if (!currentTrack.preview_url || !currentTrack.id) return <></>;
	return (
		<audio
			ref={audio}
			controls
			autoPlay
			key={currentTrack.id}
			className="hidden pointer-events-none"
		>
			<source src={currentTrack.preview_url} type="audio/mpeg" />
		</audio>
	);
};

export default AudioPlayer;

