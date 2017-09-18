import {
	getRelatedVideos
} from "../data/data-api";

import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
} from "graphql";

export const VideoType = new GraphQLObjectType({
	name: "Video",
	description: "Example videos",
	fields: () => ({
		id: {
			type: GraphQLString,
			description: "The id of the video"
		},
		title: {
			type: GraphQLString,
			description: "The title of the video"
		},
		posterPath: {
			type: GraphQLString,
			description: "The poster image for the video"
		},
		backdropPath: {
			type: GraphQLString,
			description: "The background image for the video"
		},
		ratio: {
			type: GraphQLString,
			description: "The aspect ratio of the video"
		},
		synopsis: {
			type: GraphQLString,
			description: "A brief decscription of the video content"
		},
		releaseDate: {
			type: GraphQLString,
			description: "The release date of the video"
		},
		relatedVideos: {
			type: new GraphQLList(VideoType),
			description: "Related videos",
			// video here is the current graph node i.e. the 'record' being dealt with
			resolve: (video) => getRelatedVideos(video)
		}
	})
});
