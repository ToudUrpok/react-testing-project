
const Page = require('./page');

class UsersPage extends Page {

    get loader () {
        return $('#users-loader');
    }

    get usersList () {
        return $('#users-list');
    }

    get usersItems () {
        return browser.react$$('User'); 
    }

    async loadData () {
        try {
            await this.open();
            await this.loader.waitForDisplayed({timeout: 2000});
            await this.usersList.waitForDisplayed({timeout: 2000});
        } catch (e) {
            throw new Error('Users loading failure.');
        }
    }

    async deleteUser () {
        try {
            const usersCount = await this.usersItems.length;

            if (!usersCount) {
                throw new Error('Users list is empty.');
            }

            await this.usersItems[0].$('#delete-user').click();

            const usersCountAfterDelete = await this.usersItems.length;
            const deletedUsersCount = usersCount - usersCountAfterDelete;
            if (deletedUsersCount !== 1) {
                throw new Error(`Failure. Deleted users count: ${deletedUsersCount}`);
            }
        } catch (e) {
            throw new Error('Failed to delete user.' + e.message);
        }
    }

    open () {
        return super.open('users-test');
    }
}

module.exports = new UsersPage();