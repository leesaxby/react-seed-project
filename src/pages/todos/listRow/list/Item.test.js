import React from 'react';
import { shallow, render } from 'enzyme';
import { ListGroupItem } from 'react-bootstrap';
import Item from './Item';

function setup() {

    const props = {
        item: {
            _id: 1,
            text: 'Item one',
            done: false,
        },
        onClick: jest.fn(),
    };

    const wrapper = shallow(<Item { ...props }/>);

    return {
        props,
        wrapper,
    };
}

describe('An Item ', () => {

    it('renders a ListGroupItem containing some text', () => {
        const { wrapper, props } = setup();

        const listGroupItem = wrapper.find(ListGroupItem).first();
        expect(listGroupItem.is(ListGroupItem)).toBe(true);

        const staticWrapper = render(<Item { ...props } />);
        expect(staticWrapper.text()).toBe(props.item.text);
    });

    it('styles item text depending on whether the item is done', () => {
        const { wrapper, props } = setup();

        let styledElement = wrapper.childAt(0);
        expect(styledElement.prop('style')).toEqual({ 'textDecoration': '' });

        wrapper.setProps(Object.assign(
            {}, props, { item: Object.assign(
                {}, props.item, { done: true }
            ) }
        ));
        styledElement = wrapper.childAt(0);
        expect(styledElement.prop('style')).toEqual({ 'textDecoration': 'line-through' });
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
