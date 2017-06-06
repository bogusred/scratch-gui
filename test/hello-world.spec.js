/**
 * A simple hello world test.
 * TODO(bogusred): Remove this test once we have real tests.
 */
import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

describe('A hello world suite', function() {
  it('should run a simple assertion', function() {
    expect(true).to.equal(true);
  });
});