import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import HeaderRow from './HeaderRow';
import { Row, Col, Image } from 'react-bootstrap';

describe('A HeaderRow', () => {

	it('renders component', () => {
		const tree = renderer.create(
			<HeaderRow />
		).toJSON();

		expect(tree).toMatchSnapshot();
	});

});