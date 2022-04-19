// [README] : convert duration of a tracks to human readable

const msToTime = (s) => {
	var pad = (n, z = 2) => ('00' + n).slice(-z);
	return pad(((s % 3.6e6) / 6e4) | 0) + ':' + pad(((s % 6e4) / 1000) | 0);
};

export default msToTime;
