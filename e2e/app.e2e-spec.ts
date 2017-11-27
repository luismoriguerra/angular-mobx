import { TestonpushPage } from './app.po';

describe('testonpush App', function() {
  let page: TestonpushPage;

  beforeEach(() => {
    page = new TestonpushPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
