import API from './api';

const video = (limit, page) => {
	return API.get('/videos', {
		params: {
			fields: 'id,path,video_type_id',
			join: ['idol', 'videoType'],
			limit,
			page
		}
	});
};

const updateVideoType = (id, videoType) => {
	return API.patch(`videos/${id}`, { videoType });
};

export {
	video,
	updateVideoType
};
