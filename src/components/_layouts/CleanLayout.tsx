import React from 'react';
import SEOTags from '@components/_shared/SEOTags';
import useMinHeight from '@core/hooks/useMinHeight';

interface Props {
	children: React.ReactNode;
	title?: string;
	className?: string;
	style?: React.CSSProperties;
}

const CleanLayout = ({ children, style, className, title }: Props) => {
	const [minHeight, upper, lower] = useMinHeight();

	return (
		<>
			<SEOTags title={title} />
			<nav className="flex-cc w-full" ref={upper}></nav>
			<main style={{ minHeight, ...style }} className={className}>
				{children}
			</main>
			<footer className="flex-cc w-full" ref={lower}></footer>
		</>
	);
};

export default CleanLayout;
