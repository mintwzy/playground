import API from './api';

const syncPhotos = () => {
	return API.post('/photos/sync');
};

const getRandomPhotos = (count) => {
	return API.get('/photos/random', {
		params: {
			count
		}
	});
};

export {
	syncPhotos,
	getRandomPhotos
};
