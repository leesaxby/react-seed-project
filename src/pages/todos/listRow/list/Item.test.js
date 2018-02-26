import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Item from './Item';

const setup = () => {
    const props = {
        item: {
            id: 1,
            text: 'Item one',
            done: false,
        },
        onClick: jest.fn(),
    };

    const wrapper = shallow(<Item {...props} />);

    return {
        props,
        wrapper,
    };
}

describe('An Item ', () => {
    it('renders component', () => {
        const { props } = setup();
        const tree = renderer.create(
            <Item {...props} />,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('triggers a callback when clicked', () => {
        const { wrapper, props } = setup();

        expect(props.onClick.mock.calls).toHaveLength(0);

        wrapper.simulate('click');

        expect(props.onClick.mock.calls).toHaveLength(1);
    });

    it('triggers a callback when the return key is pressed', () => {
        const { wrapper, props } = setup();

        expect(props.onClick.mock.calls).toHaveLength(0);

        const arbitraryKeyCode = 10;
        wrapper.simulate('keyDown', { keyCode: arbitraryKeyCode });
        expect(props.onClick.mock.calls).toHaveLength(0);

        const returnKeyCode = 13;
        wrapper.simulate('keyDown', { keyCode: returnKeyCode });
        expect(props.onClick.mock.calls).toHaveLength(1);
    });
});
