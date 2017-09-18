// Wrap resolvers in Promises to mimic data acquisition from remote endpoints

import { videos } from "./mock-data";
import { Promise } from "bluebird";

export const getVideos = ({ aspect }) => {
	if (aspect) {
		return getVideosByAspect(aspect);
	}
	return new Promise((resolve) => resolve(videos));
};

export const getVideoById = (id) => {
	return new Promise((resolve) => {
		const [video] = videos.filter((video) => {
			return video.id === id;
		});
		resolve(video);
	});
};

export const getVideoByTitle = (title) => {
	const lowercaseTitle = title.toLowerCase();
	return new Promise((resolve) => {
		const [video] = videos.filter((video) => {
			return video.title.toLowerCase() === lowercaseTitle;
		});
		resolve(video);
	});
};

export const getRelatedVideos = (video) => {
	return new Promise((resolve) => {
		const videos = video.relatedVideos.map((id) => getVideoById(id));
		resolve(videos);
	});
};

export const getVideosByAspect = (requiredAspect) => {
	return new Promise((resolve) => {
		const result = videos.filter((video) => {
			return video.ratio === requiredAspect;
		});
		resolve(result);
	});
};
