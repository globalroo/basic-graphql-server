const request = require("supertest");

describe("Testing server", () => {
	let server;
	beforeEach(() => {
		server = require("../src/index");
	});
	afterEach(() => {
		server.close();
	});
	it("responds to /", (done) => {
		request(server)
			.get("/?query=%7B%0A%20%20video(title%3A%20%22Wonder%20Woman%22)%20%7B%0A%20%20%20%20title%0A%20%20%20%20id%0A%20%20%7D%0A%7D%0A")
			.expect(200, done);
	});
});
