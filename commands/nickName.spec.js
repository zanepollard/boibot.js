var assert = require('assert');
const nickName = require('./nickName');

const testMessage = {
    channel: {
        send: ()=>{}
    },
    guild: {
        members: {
            get: (id)=>{ return { setNickname: (value) => {}}}
        }
    },
    mentions: {
        users: {
            size: 1,
            first: ()=>{ return {username: 'dipshit'}}
        },
    }
}

const testNickname = "Testing 3234$$@#$";
const testCommand = ["@someUserName", "Testing", "3234$$@#$"];

describe("Change User's Name", function() {
    it("Sets the username correctly", function (done) {
        assert.equal(nickName.change(testMessage, testCommand), testNickname);
        done();
    });
});