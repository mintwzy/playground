import API from './api';

const getImageDownloads = () => {
	return API.get('/photo-downloads', {
		params: {
			sort: 'enable,DESC'
		}
	});
};

const getDownloadData = (link) => {
	return API.get('/photo-downloads/generate', {
		params: { link }
	});
};

const downloadImages = () => {
	return API.post('/photo-downloads/exec');
};

const toggleEnable = (id, enable) => {
	return API.patch(`/photo-downloads/${id}`, {
		enable
	});
};

const createPhotoDownload = (baseLink, endIndex, saveFolder) => {
	return API.post('/photo-downloads', {
		base_link: baseLink, end_index: endIndex, save_folder: saveFolder, enable: true
	});
};

const downloadPhotos = () => {
	return API.post('/photo-downloads/exec');
};

export {
	createPhotoDownload,
	downloadPhotos,
	getImageDownloads,
	downloadImages,
	toggleEnable,
	getDownloadData
};
