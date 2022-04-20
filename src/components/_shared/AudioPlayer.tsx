import React, { useEffect, useRef } from 'react';
import { setCurrentTrack, setSelectedTracks, usePlayer } from '@core/redux/reducer/player';
import { useDispatch } from 'react-redux';

// [TODO] : spinner loading song
const AudioPlayer = () => {
	const { currentTrack, selectedTracks, paused } = usePlayer();
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

	const handleEnded = () => {
		dispatch(setCurrentTrack({}));
	};

	const dispatch = useDispatch();

	useEffect(() => {
		if (!currentTrack.id && selectedTracks.length > 0) {
			dispatch(setCurrentTrack(selectedTracks[0]));
			dispatch(setSelectedTracks([...selectedTracks].slice(1, selectedTracks.length)));
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
