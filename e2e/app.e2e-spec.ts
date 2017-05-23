import { Untitled12Page } from './app.po';

describe('untitled12 App', () => {
  let page: Untitled12Page;

  beforeEach(() => {
    page = new Untitled12Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
