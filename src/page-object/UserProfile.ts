export class UserProfile {
  private readonly _linkDashboardClass: string =
    '//span[@class="AppHeader-context-item-label  "]';

  public get linkDashboardClass(): string {
    return this._linkDashboardClass;
  }
}
