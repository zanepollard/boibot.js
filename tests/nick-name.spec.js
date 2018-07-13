var assert = require("assert");
const nickName = require("../commands/nick-name");
const dummyMessage = require("./dummy-message");

const testNickname = "Testing 3234$$@#$";
let testArguments = ["@someUserName", "Testing", "3234$$@#$"];

describe("Change User's Name", function() {
  it("Sets the username correctly", function(done) {
    assert.equal(nickName.change(dummyMessage, testArguments), testNickname);
    done();
  });
  it("cancels command when no arguments or empty string is passed", function() {
    testArguments = [[" "], [""], ["      "], []];
    testArguments.map(arg =>
      assert.equal(
        nickName.change(dummyMessage, arg),
        dummyMessage.mentions.users.first().username
      )
    );
  });
});
