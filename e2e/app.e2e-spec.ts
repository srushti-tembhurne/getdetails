import { GetDetailsPage } from './app.po';

describe('get-details App', () => {
  let page: GetDetailsPage;

  beforeEach(() => {
    page = new GetDetailsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
