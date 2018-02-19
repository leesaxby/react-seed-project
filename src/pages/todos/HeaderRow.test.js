import React from 'react';
import renderer from 'react-test-renderer';
import HeaderRow from './HeaderRow';

describe('A HeaderRow', () => {

	it('renders component', () => {
		const tree = renderer.create(
			<HeaderRow />
		).toJSON();

		expect(tree).toMatchSnapshot();
	});

});