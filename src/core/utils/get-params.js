const getParams = (url) => {
	const queries = url.substring(1).split('&');
	const params = {};
	queries.forEach((query) => {
		const data = query.split('=');
		if (data.length > 1) params[data[0]] = data[1];
	});
	return params;
};

export default getParams;
