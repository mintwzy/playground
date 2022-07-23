import API from './api';

const idols = () => {
	return API.get('/idols/stat', {
		params: {
			idolType: 0
		}
	});
};

const imageStat = () => {
	return API.get('/idols/stat', {
		params: {
			idolType: 1
		}
	});
};

export {
	idols,
	imageStat
};
