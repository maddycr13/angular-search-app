import { AngularSearchAppPage } from './app.po';

describe('angular-search-app App', function() {
  let page: AngularSearchAppPage;

  beforeEach(() => {
    page = new AngularSearchAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
