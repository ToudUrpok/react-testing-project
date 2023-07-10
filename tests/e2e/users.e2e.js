const UsersPage = require('../pages/users.page')

describe('Users page testing', () => {
    it('should load users', async () => {
        await UsersPage.loadData();
    });

    it('should delete 1 user', async () => {
        await UsersPage.loadData();
        await UsersPage.deleteUser();
    });
})