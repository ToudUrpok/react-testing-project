
const Page = require('./page');

class HelloPage extends Page {

    get inputMessage () {
        return $('#message');
    }

    get btnSend () {
        return $('#send-btn');
    }

    get headerAnswer () {
        return $('#answer');
    }

    async processMessage (message) {
        await this.inputMessage.setValue(message);
        await this.btnSend.click();
    }

    open () {
        return super.open('hello');
    }
}

module.exports = new HelloPage();