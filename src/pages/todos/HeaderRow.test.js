import React from 'react';
import { shallow } from 'enzyme';

import HeaderRow from './HeaderRow';
import { Row, Col, Image } from 'react-bootstrap';

describe('A HeaderRow', () => {

	it('renders without throwing an error', () => {
		expect(shallow(<HeaderRow />).exists()).toBe(true);
	});

	it('renders a row that contains an image within a column', () => {
		const wrapper = shallow(<HeaderRow />);

		expect(wrapper.is(Row)).toBe(true);
		expect(wrapper.childAt(0).is(Col)).toBe(true);
		expect(wrapper.childAt(0).childAt(0).is(Image)).toBe(true);
	});
	
});