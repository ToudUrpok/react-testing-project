const HelloPage = require('../pages/hello.page')

describe('Hello page testing', () => {
    it('should display header with answer for hello message', async () => {
        await HelloPage.open();
        await HelloPage.processMessage('hello');
        await expect(HelloPage.headerAnswer).toBeExisting();
        await HelloPage.btnSend.click();
        await expect(HelloPage.headerAnswer).not.toBeExisting();
    })
})
