import React from 'react';
import { shallow } from 'enzyme';
import createComponentWithIntl from 'Test/createComponentWithIntl';
// TODO: Add webpack alias for translations.
import de from '../../../../i18n/translations/de';
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
		const tree = createComponentWithIntl(<Filter { ...props } />).toJSON();

		expect(tree).toMatchSnapshot();
	  });


    it('selects a button based on the value of its \'filter\' prop', () => {
		const { props } = setup();
		const updatedProps = Object.assign({}, props, { filter: 'DONE' });
		const tree = createComponentWithIntl(<Filter { ...updatedProps } />).toJSON();

		expect(tree).toMatchSnapshot();
    });

    it('triggers a callback when the selected button is changed', () => {
    	const { wrapper } = setup();

    	expect(wrapper.instance().props.onUpdateFilter).not.toHaveBeenCalled();

    	wrapper.simulate('change', 'DONE');

    	expect(wrapper.instance().props.onUpdateFilter).toHaveBeenCalledWith('DONE');
    });

    it('displays correct translations', () => {
		const { props } = setup();
		const tree = createComponentWithIntl(
			<Filter { ...props } />,
			{
				locale: 'de',
				messages: de,
			}
		).toJSON();

		expect(tree).toMatchSnapshot();
    });


});
