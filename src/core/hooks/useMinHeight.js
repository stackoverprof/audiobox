import { useEffect, useRef, useState } from 'react';

const useMinHeight = () => {
	const [clearance, setClearance] = useState('calc(100vh - 0px)');

	const upper = useRef(null);
	const lower = useRef(null);

	useEffect(() => {
		const offset = upper.current.offsetHeight + lower.current.offsetHeight;
		setClearance(`calc(100vh - ${offset}px)`);
	}, [upper, lower]);

	return [clearance, upper, lower];
};

export default useMinHeight;

