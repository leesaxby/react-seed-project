import React from 'react';
import { mount } from 'enzyme';

import { mountWithIntl } from 'Test/intl-enzyme-test-util';
import { renderedInWrapper } from 'Test/utils';

import { Filter } from './Filter';

const props = {
    onUpdateFilter: jest.fn(),
    intl: {
      formatMessage: jest.fn()
    }
};

describe('A Filter', () => {
    it('should render without throwing an error');
    it('should render a group of two buttons');
    it('should have the \'ACTIVE\' button selected by default');
    it('should trigger a callback when the selected button is changed');
});
