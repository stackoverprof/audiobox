import React, { useEffect, useRef } from 'react';
import * as playerRedux from '@core/redux/reducer/player';
import { useDispatch } from 'react-redux';
import { usePlayer } from '@core/redux/reducer/player';

const AudioPlayer = () => {
	const audio = useRef<any>(null);

	const { currentTrack, paused } = usePlayer();

	useEffect(() => {
		if (audio.current) {
			if (paused) {
				audio.current.pause();
			} else {
				audio.current.play();
			}
		}
	}, [paused, audio]);

	const dispatch = useDispatch();
	const handleEnded = () => {
		console.log('onended trigerred');

		dispatch(playerRedux.reset());
	};

	if (!currentTrack.preview_url || !currentTrack.id) return <></>;
	return (
		<audio
			ref={audio}
			controls
			autoPlay
			key={currentTrack.id}
			className="hidden pointer-events-none"
			onEnded={handleEnded}
		>
			<source src={currentTrack.preview_url} type="audio/mpeg" />
		</audio>
	);
};

export default AudioPlayer;

