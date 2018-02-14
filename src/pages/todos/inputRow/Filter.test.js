import React from 'react';
import { shallow } from 'enzyme';
import createComponentWithIntl from 'Test/createComponentWithIntl';
import { getMessages } from '../../../../i18n/';
import { Filter } from './Filter';

describe('A Filter', () => {

	function setup() {
		const props = {
		    onUpdateFilter: jest.fn(),
		    intl: {
		      formatMessage: jest.fn(),
		    },
		};
		const wrapper = shallow(<Filter { ...props } />);

		return {
			props,
			wrapper,
		};
	}

	it('renders component', () => {
		const { props } = setup();
		const component = createComponentWithIntl(<Filter { ...props } />);

		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	  });


    it('selects a button based on the value of its \'filter\' prop', () => {
		const { props } = setup();
		const updatedProps = Object.assign({}, props, { filter: 'DONE' });
		const component = createComponentWithIntl(<Filter { ...updatedProps } />);
		let tree = component.toJSON();

		expect(tree).toMatchSnapshot();
    });

    it('triggers a callback when the selected button is changed', () => {
    	const { wrapper } = setup();

    	expect(wrapper.instance().props.onUpdateFilter).not.toHaveBeenCalled();

    	wrapper.simulate('change', 'DONE');

    	expect(wrapper.instance().props.onUpdateFilter).toHaveBeenCalledWith('DONE');
    });

    it('displays correct translations', () => {
		const userLocal = 'de';
		const { props } = setup();
		const component = createComponentWithIntl(
			<Filter { ...props } />,
			{
				locale: userLocal,
				messages: getMessages(userLocal),
			}
		);

		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
    });


});
