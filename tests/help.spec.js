var assert = require('assert');
const help = require('../commands/help');
const nickName = require('../commands/nick-name');
const dummyMessage = require('./dummy-message');

const commandProperties = [help.properties, nickName.properties];
describe("Send Help", function () {
    it("Responds to help request with real argument", function () {
        dummyArguments = ["n"]
        assert.deepEqual(help.get(dummyMessage, commandProperties, dummyArguments), nickName.properties);
    });
    it("Responds to help request with many arguments", function () {
        dummyArguments = ["1234", "asdfas", "asdfjj"]
        assert.equal(help.get(dummyMessage, commandProperties, dummyArguments), undefined);
    });
    it("Responds to help request with no arguments", function () {
        assert.equal(help.get(dummyMessage, commandProperties, dummyArguments), undefined);
    });
});