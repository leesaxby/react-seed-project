import React from 'react';
import { TextField } from 'material-ui';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Form } from './Form';

describe('A Form', () => {
    const setup = (mountFunc = shallow) => {
        const props = {
            onAddItem: jest.fn(),
            intl: {
                formatMessage: jest.fn(),
            },
        };
        const wrapper = mountFunc(<Form {...props} />);

        return {
            props,
            wrapper,
        };
    };

    it('renders component', () => {
        const { props } = setup();
        const tree = renderer.create(
            <Form {...props} />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('keeps track of what is being entered in the input box', () => {
        const { wrapper } = setup();

        expect(wrapper.state('newItem')).toBe('');

        const todoInput = wrapper.find(TextField).first();
        todoInput.simulate('change', { target: { value: 'changed' } });
        expect(wrapper.state('newItem')).toBe('changed');
    });

    it('triggers a callback when the input box is submitted', () => {
        const { wrapper } = setup(mount);

        expect(wrapper.instance().props.onAddItem).not.toHaveBeenCalled();

        // Make sure we get the input within the textField to to call the change on.
        // Otherwise it dont work!!
        const todoInput = wrapper.find(TextField).first().find('input');
        todoInput.simulate('change', { target: { value: 'a value' } });

        const form = wrapper.find('form').first();
        form.simulate('submit');

        expect(wrapper.instance().props.onAddItem).toHaveBeenCalledWith('a value');
    });

    it('empties the input box when it is submitted', () => {
        const { wrapper } = setup(mount);
        const todoInput = wrapper.find(TextField).first();

        todoInput.simulate('change', { target: { value: 'not empty' } });
        wrapper.simulate('submit');
        expect(todoInput.prop('value')).toBe('');
    });
});
