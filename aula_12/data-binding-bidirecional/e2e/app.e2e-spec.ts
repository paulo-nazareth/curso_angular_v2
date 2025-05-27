import { DataBindingBidirecionalPage } from './app.po';

describe('data-binding-bidirecional App', () => {
  let page: DataBindingBidirecionalPage;

  beforeEach(() => {
    page = new DataBindingBidirecionalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
