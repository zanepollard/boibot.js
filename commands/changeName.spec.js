var assert = require('assert');
const changeName = require('./changeName');

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

const testNickname = "Testing 3234$$@#$"

describe("Change User's Name", function() {
    it("Sets the username correctly", function (done) {
        changeName(testMessage, testNickname)
        done();
    });
});