import React, { useEffect, useRef } from 'react';
import { setCurrentTrack, setSelectedTracks, usePlayer } from '@core/redux/reducer/player';
import { useDispatch } from 'react-redux';

const AudioPlayer = () => {
	const audio = useRef<any>(null);

	const { currentTrack, selectedTracks, paused } = usePlayer();

	useEffect(() => {
		if (audio.current) {
			if (paused) {
				audio.current.pause();
			} else {
				audio.current.play();
			}
		}
	}, [paused, audio]);

	const handleEnded = () => {
		dispatch(setCurrentTrack({}));
	};

	const dispatch = useDispatch();

	useEffect(() => {
		if (!currentTrack.id && selectedTracks.length > 0) {
			console.log('pushing');

			dispatch(setCurrentTrack(selectedTracks[0]));
			dispatch(setSelectedTracks([...selectedTracks].slice(1, -1)));
		}
	}, [selectedTracks, currentTrack]);

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

