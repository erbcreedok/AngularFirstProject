import { AngularFirstProjectPage } from './app.po';

describe('angular-first-project App', () => {
  let page: AngularFirstProjectPage;

  beforeEach(() => {
    page = new AngularFirstProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
