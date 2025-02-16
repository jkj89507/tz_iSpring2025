import axios, { AxiosRequestConfig } from "axios";
import assert from "assert";
import dotenv from "dotenv";

dotenv.config();

let issueAxiosConfig: AxiosRequestConfig = {
	method: "POST",
	url: `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/issues`,
	headers: {
		Accept: "application/vnd.github+json",
		Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
		"X-GitHub-Api-Version": "2022-11-28",
	},
	data: {
		title: "This issue was created by API!",
		body: "I'm not having a problem with this.",
	},
};

describe("New Issue API TestCases", () => {
	before(async () => {});

	beforeEach(async () => {});

	it(`TC.0001 Корректный запрос`, async () => {
		try {
			const response = await axios(issueAxiosConfig);
			assert(201 === response.status);
		} catch (error) {
			console.error("Test failed:", error);
			throw error;
		}
	});

	it(`TC.0002 Искаженный запрос - неверное поле в data`, async () => {
		try {
			const response = await axios({
				...issueAxiosConfig,
				data: { invalid_field: "invalid_value" }, // Неверное поле
			});
			assert(false);
		} catch (error) {
			assert(422 === error?.response?.status); 
		}
	});

	it(`TC.0003 Искаженный запрос - пустой data`, async () => {
		try {
			const response = await axios({
				...issueAxiosConfig,
				data: {},
			});
			assert(false);
		} catch (error) {
			assert(422 === error?.response?.status);
		}
	});

	it(`TC.0004 Искаженный запрос #3 - неверный токен`, async () => {
		try {
			const response = await axios({
				...issueAxiosConfig,
				headers: {
					...issueAxiosConfig.headers,
					Authorization: "Bearer invalid_token",
				},
			});
			assert(false);
		} catch (error) {
			assert(401 === error?.response?.status); 
		}
	});

	it(`TC.0005 Искаженный запрос #4 - некорректный URL`, async () => {
		try {
			const response = await axios({
				...issueAxiosConfig,
				url: `https://api.github.com/repos/invalid_user/invalid_repo/issues`,
			});
			assert(false);
		} catch (error) {
			assert(404 === error?.response?.status); 
		}
	});

	it(`TC.0006 Искаженный запрос #5 - неверный Content-Type`, async () => {
		try {
			const response = await axios({
				...issueAxiosConfig,
				headers: {
					...issueAxiosConfig.headers,
					'Content-Type': 'text/plain',
				},
			});
			assert(201 === response.status);
		} catch (error) {
			console.error("Test failed:", error);
			throw error;
		}
	});

	afterEach(async () => {});

	after(async () => {});
});
