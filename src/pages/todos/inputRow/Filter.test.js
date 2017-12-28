import React from 'react';
import { shallow } from 'enzyme';

import { ToggleButtonGroup } from 'react-bootstrap';
import { Filter } from './Filter';

describe('A Filter', () => {

	function setup() {
		const props = {
		    onUpdateFilter: jest.fn(),
		    intl: {
		      formatMessage: jest.fn()
		    }
		};
		const wrapper = shallow(<Filter { ...props } />);

		return {
			props,
			wrapper
		};
	}

    it('renders a group of two buttons', () => {
    	const { wrapper } = setup();

    	expect(wrapper.exists()).toBe(true);
    	const buttonGroup = wrapper.find(ToggleButtonGroup).first();
    	expect(buttonGroup.exists()).toBe(true);
    	expect(buttonGroup.children()).toHaveLength(2);
    });

    it('has the \'ACTIVE\' button selected by default', () => {
    	const { wrapper } = setup();

    	expect(wrapper.find(ToggleButtonGroup).first().prop('value')).toBe('ACTIVE');
    });

    it('selects a button based on the value of its \'filter\' prop', () => {
    	const { props, wrapper } = setup();

    	wrapper.setProps(Object.assign({}, props, { filter: 'DONE' }));

    	expect(wrapper.find(ToggleButtonGroup).first().prop('value')).toBe('DONE');
    });

    it('triggers a callback when the selected button is changed', () => {
    	const { wrapper } = setup();

    	expect(wrapper.instance().props.onUpdateFilter).not.toHaveBeenCalled();
    	
    	wrapper.simulate('change', 'DONE');

    	expect(wrapper.instance().props.onUpdateFilter).toHaveBeenCalledWith('DONE');
    });

});
