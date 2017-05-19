import { ScalaFunFrontendPage } from './app.po';

describe('scala-fun-frontend App', () => {
  let page: ScalaFunFrontendPage;

  beforeEach(() => {
    page = new ScalaFunFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
