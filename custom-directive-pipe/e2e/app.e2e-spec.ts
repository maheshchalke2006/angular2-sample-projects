import { AppPage } from './app.po';

describe('sample-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

  it('result should be 11 + 22 = 33', () => {
    page.navigateTo();
    page.EnterNumber1();
    page.EnterNumber2();
    page.ClickonAdd();
    const result = page.GetResult();
    expect(result).toEqual('33');
  });
});
