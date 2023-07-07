const HelloPage = require('../pages/hello.page')

describe('Hello page testing', () => {
    it('should display header with answer for hello message', async () => {
        await HelloPage.open();
        await HelloPage.processMessage('hello');
        await expect(HelloPage.headerAnswer).toBeExisting();
        await HelloPage.btnSend.click();
        await expect(HelloPage.headerAnswer).not.toBeExisting();
    });

    it('should not display header with answer for not recognized message', async () => {
        await HelloPage.open();
        await HelloPage.processMessage('asdfhadfh');
        await expect(HelloPage.headerAnswer).not.toBeExisting();
    });
})
