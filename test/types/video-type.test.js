import { VideoType } from "../../src/types/video-type";
import { getRelatedVideos } from "../../src/data/data-api";

jest.mock("../../src/data/data-api", () => ({
	getRelatedVideos: jest.fn(),
}));

describe("GraphQL Types: VideoType", () => {
	test("VideoType returns has the correct structure", () => {
		expect (VideoType).toMatchSnapshot();
	});
	test("getRelatedVideos returns expected videos", async () => {
		const fields = VideoType._typeConfig.fields();
		fields.relatedVideos.resolve(undefined);
		expect(getRelatedVideos).toHaveBeenCalled();
	});
});
