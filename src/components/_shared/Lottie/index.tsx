import React, { lazy, Suspense } from 'react';
import { useTest } from '@core/redux/reducer/test';

const _Lottie = lazy(() => import('./index.original'));

const Lottie = (props) => {
	const { testMode } = useTest();

	if (testMode) return <></>;
	else
		return (
			<Suspense fallback={<></>}>
				<_Lottie {...props} />;
			</Suspense>
		);
};

export default Lottie;

