import React, { useEffect, useRef } from 'react';
import { pushHistory } from '@core/redux/actions/player';
import { useDispatch } from 'react-redux';
import {
	setBuffering,
	setCurrentTrack,
	setHistory,
	setSelectedTracks,
	usePlayer,
} from '@core/redux/reducer/player';

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
		dispatch(pushHistory(currentTrack));
	};

	const dispatch = useDispatch();

	useEffect(() => {
		if (!currentTrack.id && selectedTracks.length > 0) {
			dispatch(setCurrentTrack(selectedTracks[0]));
			dispatch(setSelectedTracks([...selectedTracks].slice(1, selectedTracks.length)));
		}
	}, [selectedTracks, currentTrack]);

	useEffect(() => {
		const savedHistory = JSON.parse(localStorage.getItem('player_history') || '[]');
		dispatch(setHistory(savedHistory));
	}, []);

	if (!currentTrack.preview_url || !currentTrack.id) return <></>;
	return (
		<audio
			ref={audio}
			controls
			autoPlay
			key={currentTrack.id}
			className="hidden pointer-events-none"
			onEnded={handleEnded}
			onWaiting={() => setBuffering(true)}
			onLoadedData={() => setBuffering(false)}
		>
			<source src={currentTrack.preview_url} type="audio/mpeg" />
		</audio>
	);
};

export default AudioPlayer;
