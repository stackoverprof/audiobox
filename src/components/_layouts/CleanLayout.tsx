import React from 'react';
import SEOTags from '@components/_shared/SEOTags';

interface Props {
	children: React.ReactNode;
	title?: string;
	className?: string;
	style?: React.CSSProperties;
}

const CleanLayout = ({ children, style, className, title }: Props) => {
	return (
		<>
			<SEOTags title={title} />
			<main style={style} className={className}>
				{children}
			</main>
		</>
	);
};

export default CleanLayout;
