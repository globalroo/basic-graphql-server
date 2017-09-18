import * as API from "../../src/data/data-api";

describe("Exercise data fetching API: getVideos", () => {
	test("getVideos returns all videos with no filter", async () => {
		const videos = await API.getVideos({});
		expect(videos.length).toBe(20);
	});
	test("getVideos returns only 16x9 videos when aspect set", async () => {
		const videos = await API.getVideos({ aspect: "16x9"});
		expect(videos.length).toBe(5);
	});
});

describe("Exercise data fetching API: getVideoById", () => {
	test("getVideoById returns the Minions movie when id set to 1", async () => {
		const video = await API.getVideoById(1);
		expect(video.title).toBe("Minions");
	});
	test("getVideoById returns nothing when bad id is set", async () => {
		const video = await API.getVideoById(1000);
		expect(video).toBeUndefined;
	});
});

describe("Exercise data fetching API: getVideoByTitle", () => {
	test("getVideoByTitle returns DeadPool when title set to DeadPool", async () => {
		const video = await API.getVideoByTitle("DeadPool");
		expect(video.title).toBe("Deadpool");
	});
	test("getVideoByTitle returns nothing when unknow title is set", async () => {
		const video = await API.getVideoByTitle("The Last Dragon");
		expect(video).toBeUndefined;
	});
});

describe("Exercise data fetching API: getRelatedVideos", () => {
	test("getRelatedVideos returns expected data set", async () => {
		const expected = ["It", "Beauty and the Beast", "Minions", "Wonder Woman", "Pirates of the Caribbean: Dead Men Tell No Tales"];
		const video = await API.getVideoByTitle("Guardians of the Galaxy");
		const relatedVideos = API.getRelatedVideos(video);
		const titles = await relatedVideos.map((related) => related.title);

		expect(titles).toEqual(expected);
	});
	test("getRelatedVideos returns nothing when unknow title is set", async () => {
		const video = await API.getVideoByTitle("The Last Dragon");
		expect(video).toBeUndefined;
	});
});
