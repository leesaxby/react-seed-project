import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ListRow from './ListRow';
import List from './listRow/List';
import { Col, Row } from 'react-bootstrap';

// Mock the nested "connected" components to avoid error with missing store.
jest.mock('./listRow/List', () => 'List');

describe('A ListRow', () => {

	it('renders component', () => {
		const tree = renderer.create(
			<ListRow />
		).toJSON();

		expect(tree).toMatchSnapshot();
	});

});