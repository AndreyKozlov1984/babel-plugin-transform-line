const describe = require('mocha').describe;
const it = require('mocha').it;

const expect = require('chai').expect;
describe('__line', () => {
    it('should represent the current line number', () => {
        expect(__line).to.equal(7); // we are on 7th line now!
    });

    it('should be undefined when it doesn\'t exist in the original source', () => {
        /* global __someOtherDynamicCode */
        expect(__someOtherDynamicCode).to.be.undefined;
    });
});
