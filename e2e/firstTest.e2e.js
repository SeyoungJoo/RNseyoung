describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should show flatlist', async () => {
    await expect(element(by.id('flatlist'))).toBeVisible();
  });

  it('should show detail screen after tap', async () => {
    await element(by.id('listItem-1-2006-03-24T22:30:00.000Z')).tap();
    await expect(element(by.id('detailPage'))).toBeVisible();
  });

  // it('should have welcome screen', async () => {
  //   await expect(element(by.id('welcome'))).toBeVisible();
  // });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });
});
