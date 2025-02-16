import { LoginForm } from "../page-object/LoginForm";
import assert from "assert";
import dotenv from "dotenv";
import { UserProfile } from "../page-object/UserProfile";

describe("LoginForm UI TestCases", () => {
	let loginForm: LoginForm;
	let userProfile: UserProfile;

	before(async () => {
		loginForm = new LoginForm();
		userProfile = new UserProfile();
		dotenv.config();
	});

	beforeEach(async () => {
		await browser.navigateTo("https://github.com/login");
	});

	it(`TC.0001 Поля Username or email address, 
		Password - пустые, по нажатию кнопке "Sign in"`, async () => {
		try {
			await $(loginForm.btnSignInName).click();
			await browser.pause(3000);
		} catch (error) {
			console.error("Test failed:", error);
			throw error;
		}
	});

	it(`TC.0002 Поля Username or email address - валидная эл.почта, 
	"Password - валидный, по нажатию кнопке 'Sign in'`, async () => {
		try {
			await $(loginForm.inputEmailLoginFieldId).setValue(
				process.env.GITHUB_MAIL
			);
			await browser.pause(3000);
			await $(loginForm.inputPasswordFieldId).setValue(
				process.env.GITHUB_PASS
			);
			await browser.pause(3000);
			await $(loginForm.btnSignInName).click();
			await browser.pause(5000);
			(await $(userProfile.linkDashboardClass))
			.isDisplayed()
			.then((value: boolean) => {
				assert(value);
			});
		} catch (error) {
			console.error("Test failed:", error);
			throw error;
		}
	});

	afterEach(async () => {
		await browser.reloadSession();
	});

	after(async () => {
		await browser.deleteSession();
	});
});
