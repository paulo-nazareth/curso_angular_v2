import { NgcontentPage } from './app.po';

describe('ngcontent App', () => {
  let page: NgcontentPage;

  beforeEach(() => {
    page = new NgcontentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
