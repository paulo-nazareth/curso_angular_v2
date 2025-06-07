import { CicloVidaPage } from './app.po';

describe('ciclo-vida App', () => {
  let page: CicloVidaPage;

  beforeEach(() => {
    page = new CicloVidaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
