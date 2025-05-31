import { EmitindoEventosPage } from './app.po';

describe('emitindo-eventos App', () => {
  let page: EmitindoEventosPage;

  beforeEach(() => {
    page = new EmitindoEventosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
