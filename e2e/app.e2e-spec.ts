import { TheTradeGamePage } from './app.po';

describe('the-trade-game App', () => {
  let page: TheTradeGamePage;

  beforeEach(() => {
    page = new TheTradeGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
