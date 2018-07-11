const assert = require('assert');
const BoiBot = require('./boibot');

describe("BoiBot", function() {
    it("Boots up and dies", function (done) {
        const newBoi = new BoiBot();
        setTimeout(_ => {
            if (newBoi.ready) {
                newBoi.destructor();
            }
        }, 1500);
        done();
    })
});