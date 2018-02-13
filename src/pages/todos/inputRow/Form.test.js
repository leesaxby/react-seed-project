import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { FormControl } from 'react-bootstrap';
import { Form } from './Form';

describe('A Form', () => {

	function setup(mountFunc = shallow) {
		const props = {
		    onAddItem: jest.fn(),
		    intl: {
		      formatMessage: jest.fn(),
		    },
		};
		const wrapper = mountFunc(<Form { ...props } />);

		return {
			props,
			wrapper,
		};
	}

	it('renders component', () => {
		const { props } = setup();
		const tree = renderer.create(
			<Form { ...props } />
		).toJSON();

		expect(tree).toMatchSnapshot();
	});

   it('keeps track of what is being entered in the input box', () => {
    	const { wrapper } = setup();

    	expect(wrapper.state('newItem')).toBe('');

    	const formControl = wrapper.find(FormControl).first();
    	formControl.simulate('change', { target: { value: 'changed' } } );
    	expect(wrapper.state('newItem')).toBe('changed');
    });

    it('triggers a callback when the input box is submitted', () => {
    	const { wrapper } = setup(mount);

    	expect(wrapper.instance().props.onAddItem).not.toHaveBeenCalled();

    	const formControl = wrapper.find(FormControl).first();
    	formControl.simulate('change', { target: { value: 'a value' } } );
    	wrapper.simulate('submit', 'something');
    	expect(wrapper.instance().props.onAddItem).toHaveBeenCalledWith('a value');
    });

    it('empties the input box when it is submitted', () => {
    	const { wrapper } = setup(mount);

    	const formControl = wrapper.find(FormControl).first();
    	formControl.simulate('change', { target: { value: 'not empty' } } );
		wrapper.simulate('submit');
		expect(formControl.prop('value')).toBe('');
    });

});
