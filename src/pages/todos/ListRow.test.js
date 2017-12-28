import React from 'react';
import { shallow } from 'enzyme';

import ListRow from './ListRow';
import List from './listRow/List';
import { Col, Row } from 'react-bootstrap';

describe('A ListRow', () => {

	it('renders without throwing an error', () => {
		expect(shallow(<ListRow />).exists()).toBe(true);
	});

	it('renders a List within a Row', () => {
		const wrapper = shallow(<ListRow />);

		expect(wrapper.is(Row)).toBe(true);
		expect(wrapper.childAt(0).is(Col)).toBe(true);
		expect(wrapper.childAt(0).childAt(0).is(List)).toBe(true);
	});
	
});