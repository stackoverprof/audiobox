// [README] : parsing hash parameter returned after login with spotify

const getParams = (url): any => {
	const queries = url.substring(1).split('&');
	const params = {};
	queries.forEach((query) => {
		const data = query.split('=');
		if (data.length > 1) params[data[0]] = data[1];
	});
	return params;
};

export default getParams;
