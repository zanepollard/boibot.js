const assert = require("assert");
const BoiBot = require("../boibot");
const dummyMessage = require("./dummy-message");
let boiBot;

describe("BoiBot", function() {
  before(function() {
    boiBot = new BoiBot();
  });

  describe("onReady", function() {
    it("sets ready property to true", function() {
      boiBot.onReady();
      assert.equal(boiBot.ready, true);
    });
  });

  describe("onMessage", function() {
    it("ignores message when there's no prefix", function() {
      dummyMessage.content = "n someUser New Nickname";
      assert.equal(boiBot.onMessage(dummyMessage), null);
    });

    it("extracts the command from the message content", function() {
      dummyMessage.content = "!n someUser New Nickname";
      boiBot.setUserCommand(dummyMessage.content);
      assert.equal(boiBot.userCommand, "n");
    });

    it("consumes user's arguments as array", function() {
      dummyMessage.content = "!name someUser New Nickname";
      boiBot.setUserArguments(dummyMessage.content);
      assert.deepEqual(boiBot.userArguments, ["someUser", "New", "Nickname"]);
    });
  });
});
