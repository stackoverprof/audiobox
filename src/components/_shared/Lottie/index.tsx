import React, { lazy } from 'react';
import { useTest } from '@core/redux/reducer/test';

const _Lottie = lazy(() => import('./index.original'));

const Lottie = (props) => {
	const { testMode } = useTest();
	console.log('testMode', testMode);

	if (testMode) return <></>;
	else {
		return <_Lottie {...props} />;
	}
};

export default Lottie;

