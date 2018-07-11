var assert = require("assert");
const say = require("../commands/say")
const dummyMessage = require("./dummy-message")

let testArguments = ["This is a test", "___893098***&", "!Iamsaying"]

describe("Sends message set by user",function() {
    it("Sends message", function(done){
        assert.equal(say.sendMessage(dummyMessage,testArguments));
        done();
    });
    it("cancels command when no arguments or empty string passed", function() {
        testArguments = [[" "], [""], ["      "], []];
        testArguments.map(arg =>
            assert.equal(
                say.sendMessage(dummyMessage,arg),
            )
        );
    });
});