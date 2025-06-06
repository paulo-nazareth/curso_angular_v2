import { DiretivaAtributoPage } from './app.po';

describe('diretiva-atributo App', () => {
  let page: DiretivaAtributoPage;

  beforeEach(() => {
    page = new DiretivaAtributoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
