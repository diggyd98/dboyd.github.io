import { UserProfileAppPage } from './app.po';

describe('user-profile-app App', () => {
  let page: UserProfileAppPage;

  beforeEach(() => {
    page = new UserProfileAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
