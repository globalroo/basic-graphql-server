import {
	getVideoById,
	getVideoByTitle,
	getVideosByAspect,
	getVideos
} from "../data/data-api";

import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLList,
	GraphQLNonNull
} from "graphql";

import { VideoType } from "./video-type";

export const getVideoQuery = () => ({
	type: VideoType,
	args: {
		id: {
			type: GraphQLInt,
			description: "The ID"
		},
		title: {
			type: GraphQLString,
			description: "The Title"
		}
	},
	resolve: (video, { id, title }) => {
		if (id) {
			return getVideoById(id);
		} else if (title) {
			return getVideoByTitle(title);
		}
	}
});

export const getAspectQuery = () => ({
	type: new GraphQLList(VideoType),
	args: {
		aspect: {
			type: new GraphQLNonNull(GraphQLString),
			description: "The Aspect required"
		}
	},
	resolve: (_, args) => getVideosByAspect(args.aspect)
});

export const getVideosQuery = () => ({
	type: new GraphQLList(VideoType),
	resolve: (_, args) => getVideos(args),
	args: {
		aspect: {
			type: GraphQLString,
			description: "Optional Aspect"
		}
	}
});

export const RootQueryType = new GraphQLObjectType({
	name: "RootQueryType",
	description: "Root query to access data",
	fields: {
		video: getVideoQuery(),
		aspect: getAspectQuery(),
		videos: getVideosQuery()
	}
});
