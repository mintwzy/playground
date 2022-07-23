import API from './api';

const getVideoTypes = () => {
	return API.get('/videoTypes');
};

export {
	getVideoTypes
};
