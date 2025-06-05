import { MetodoElvisPage } from './app.po';

describe('metodo-elvis App', () => {
  let page: MetodoElvisPage;

  beforeEach(() => {
    page = new MetodoElvisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
