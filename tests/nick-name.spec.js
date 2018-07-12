var assert = require("assert");
const nickName = require("../commands/nick-name");
const dummyMessage = require("./dummy-message");

const testNickname = "Testing 3234$$@#$";
const testCommand = ["@someUserName", "Testing", "3234$$@#$"];

describe("Change User's Name", function() {
  it("Sets the username correctly", function(done) {
    assert.equal(nickName.change(dummyMessage, testCommand), testNickname);
    done();
  });
});
