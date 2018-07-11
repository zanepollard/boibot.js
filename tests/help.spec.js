var assert = require('assert');
const help = require('../commands/help');
const nickName = require('../commands/nick-name');
const dummyMessage = require('./dummy-message');

const commandProperties = [help.properties, nickName.properties];
describe("Send Help", function () {
    it("Responds to help request with arguments", function () {
        dummyArguments = ["1234"]
        assert.notEqual(help.get(dummyMessage, commandProperties, dummyArguments), undefined);
    })
    it("Responds to help request with no arguments", function () {
        assert.notEqual(help.get(dummyMessage, commandProperties, dummyArguments), undefined);
    })
});