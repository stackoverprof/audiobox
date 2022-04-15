import { useEffect, useRef, useState } from 'react';

type ReturnTuple = [
	string,
	React.MutableRefObject<HTMLElement | null>,
	React.MutableRefObject<HTMLElement | null>
];

const useMinHeight = (): ReturnTuple => {
	const [clearance, setClearance] = useState<string>('calc(100vh - 0px)');

	const upper = useRef<HTMLElement>(null);
	const lower = useRef<HTMLElement>(null);

	useEffect(() => {
		if (upper.current && lower.current) {
			const offset = upper.current.offsetHeight + lower.current.offsetHeight;
			setClearance(`calc(100vh - ${offset}px)`);
		}
	}, [upper, lower]);

	return [clearance, upper, lower];
};

export default useMinHeight;
