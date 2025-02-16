export class LoginForm{
    private readonly _inputEmailLoginFieldId: string = '//*[@id="login_field"]'
    private readonly _inputPasswordFieldId: string = '//*[@id="password"]'
    private readonly _btnSignInName: string = '//input[@name="commit"]'
    private readonly _msgCreditsAreNotCorrect: string = '//div[@id="js-flash-container"]'

    public get inputEmailLoginFieldId(): string {
        return this._inputEmailLoginFieldId;
    }

    public get inputPasswordFieldId(): string {
        return this._inputPasswordFieldId;
    }

    public get btnSignInName(): string {
        return this._btnSignInName;
    }

    public get msgCreditsAreNotCorrect(): string {
        return this._msgCreditsAreNotCorrect;
    }
}
