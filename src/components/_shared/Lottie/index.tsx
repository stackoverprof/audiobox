import React, { Suspense } from 'react';

const _Lottie = React.lazy(() => import('./index.original'));

const Lottie = (props) => {
	return (
		<Suspense fallback={<></>}>
			<_Lottie {...props} />
		</Suspense>
	);
};

export default Lottie;
