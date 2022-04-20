import React, { lazy, Suspense } from 'react';

const _Lottie = lazy(() => import('./index.original'));

const Lottie = (props) => {
	return (
		<Suspense fallback={<></>}>
			<_Lottie {...props} />;
		</Suspense>
	);
};

export default Lottie;
