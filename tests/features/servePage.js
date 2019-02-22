describe('Serving a page', function () {
  before(function (browser, done) {
    done();
  });

  after(function (browser, done) {
    browser.end(function () {
      done();
    });
  });

  afterEach(function (browser, done) {
    done();
  });

  beforeEach(function (browser, done) {
    done();
  });

  it('shows a page', function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body', 1000)
      .assert.title('Mileage Logger');
  });
});