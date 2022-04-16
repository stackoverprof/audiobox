import { useEffect, useState } from 'react';

const debounce = (callback, waitTime) => {
	let timeNow = Date.now();
	return () => {
		if (timeNow - Date.now() + waitTime < 0) {
			callback();
			timeNow = Date.now();
		}
	};
};

const useResize = () => {
	const [size, setSize] = useState({
		width: 0,
		height: 0,
	});

	const handleSetWidth = () =>
		setSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});

	useEffect(() => {
		handleSetWidth();
		const handler = debounce(handleSetWidth, 200);

		window.addEventListener('resize', handler);
		return () => window.removeEventListener('resize', handler);
	}, []);

	const breakpoint = {
		xxl: size.width >= 1535,
		xl: size.width >= 1279,
		lg: size.width >= 1023,
		md: size.width >= 767,
		sm: size.width >= 639,
	};

	return {
		...size,
		...breakpoint,
	};
};

export default useResize;
