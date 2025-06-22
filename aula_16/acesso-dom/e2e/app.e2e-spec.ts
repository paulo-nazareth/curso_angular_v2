import { AcessoDomPage } from './app.po';

describe('acesso-dom App', () => {
  let page: AcessoDomPage;

  beforeEach(() => {
    page = new AcessoDomPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
