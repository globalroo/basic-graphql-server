import {
	GraphQLList,
} from "graphql";

jest.mock("../../src/data/data-api", () => ({
	getVideoById: jest.fn(),
	getVideoByTitle: jest.fn(),
	getVideosByAspect: jest.fn(),
	getVideos: jest.fn()
}));

import * as rootQuery from "../../src/types/root-query";
import { VideoType } from "../../src/types/video-type";

import {
	getVideoById,
	getVideoByTitle,
	getVideosByAspect,
	getVideos
} from "../../src/data/data-api";

describe("GraphQL Resolvers: getVideoQuery", () => {
	afterEach(() => {
		getVideoById.mockClear();
		getVideoByTitle.mockClear();
	});
	test("getVideoQuery returns correct type", () => {
		const queryObj = rootQuery.getVideoQuery();
		expect (queryObj.type).toEqual(VideoType);
	});
	test("getVideoQuery expects correct args", () => {
		const queryObj = rootQuery.getVideoQuery();
		expect (queryObj.args).toMatchSnapshot();
	});
	test("getVideoQuery resolver calls correct functions: getVideoById", () => {
		const queryObj = rootQuery.getVideoQuery();
		queryObj.resolve(undefined, { id: 1 });
		expect(getVideoById).toHaveBeenCalled();
	});
	test("getVideoQuery resolver calls correct functions: getVideoByTitle", () => {
		const queryObj = rootQuery.getVideoQuery();
		queryObj.resolve(undefined, { title: "Minions" });
		expect(getVideoByTitle).toHaveBeenCalled();
	});
	test("getVideoQuery resolver calls correct functions: getVideoByTitle", () => {
		const queryObj = rootQuery.getVideoQuery();
		queryObj.resolve(undefined, { });
		expect(getVideoByTitle).not.toHaveBeenCalled();
	});
});

describe("GraphQL Resolvers: getAspectQuery", () => {
	afterEach(() => {
		getVideosByAspect.mockClear();
	});
	test("getAspectQuery returns correct type", () => {
		const queryObj = rootQuery.getAspectQuery();
		expect (queryObj.type).toEqual(new GraphQLList(VideoType));
	});
	test("getAspectQuery expects correct args", () => {
		const queryObj = rootQuery.getAspectQuery();
		expect (queryObj.args).toMatchSnapshot();
	});
	test("getAspectQuery resolver calls correct functions: getVideosByAspect", () => {
		const queryObj = rootQuery.getAspectQuery();
		queryObj.resolve(undefined, { aspect: "16x9" });
		expect(getVideosByAspect).toHaveBeenCalled();
	});
});

describe("GraphQL Resolvers: getVideosQuery", () => {
	afterEach(() => {
		getVideos.mockClear();
	});
	test("getVideosQuery returns correct type", () => {
		const queryObj = rootQuery.getVideosQuery();
		expect (queryObj.type).toEqual(new GraphQLList(VideoType));
	});
	test("getVideosQuery expects correct args", () => {
		const queryObj = rootQuery.getVideosQuery();
		expect (queryObj.args).toMatchSnapshot();
	});
	test("getVideosQuery resolver calls correct functions: getVideosByAspect", () => {
		const queryObj = rootQuery.getVideosQuery();
		queryObj.resolve(undefined, {});
		expect(getVideos).toHaveBeenCalled();
	});
});
