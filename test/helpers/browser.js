/**
 * @fileoverview Setup that will ensure we can test our components in a
 * realistic browser environment using jsdom.
 * https://github.com/tmpvar/jsdom
 *
 * Copied from:
 * https://github.com/markthethomas/react-testing-components-enzyme/blob/master/test/helpers/browser.js
 * https://semaphoreci.com/community/tutorials/testing-react-components-with-enzyme-and-mocha
 */

require('babel-register')();
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = new JSDOM('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;