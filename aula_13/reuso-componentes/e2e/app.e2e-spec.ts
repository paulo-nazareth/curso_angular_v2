import { ReusoComponentesPage } from './app.po';

describe('reuso-componentes App', () => {
  let page: ReusoComponentesPage;

  beforeEach(() => {
    page = new ReusoComponentesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
