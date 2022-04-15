import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

interface SEODataType {
	title?: string;
	sitename?: string;
	domain?: string;
	description?: string;
	image?: string;
}

const DEFAULT: SEODataType = {
	sitename: 'Audiobox',
	domain: 'http://my-site.com/',
	description: 'Find Tracks and create the Playlist you love.',
	image: 'https://images.unsplash.com/photo-1629058622223-93665bf5d046?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
};

const SEOTags = (props: SEODataType) => {
	const data = { ...DEFAULT, ...props };
	const { pathname } = useLocation();
	const url = window.location.origin + pathname;

	return (
		<Helmet>
			<title>{data.title}</title>

			<meta name="robots" content="follow, index" />
			<meta name="description" content={data.description} />
			<meta property="og:url" content={url} />
			<link rel="canonical" href={url} />

			<meta property="og:type" content="website" />
			<meta property="og:title" content={data.title} />
			<meta property="og:site_name" content={data.title} />
			<meta property="og:description" content={data.description} />
			<meta property="og:image" name="image" content={data.image} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content={data.title} />
			<meta name="twitter:title" content={data.title} />
			<meta name="twitter:description" content={data.description} />
			<meta name="twitter:image" content={data.image} />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, shrink-to-fit=no"
			></meta>
		</Helmet>
	);
};

export default SEOTags;

