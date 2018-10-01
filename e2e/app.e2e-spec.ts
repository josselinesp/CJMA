import { CjmaPage } from './app.po';

describe('cjma App', () => {
  let page: CjmaPage;

  beforeEach(() => {
    page = new CjmaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
