import React from 'react';
import { Link } from 'react-router-dom';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ListTodos from './ListTodos';

configure({ adapter: new Adapter() });

describe('Test ListTodo', () => {
    const mock = {
        id: "1",
        text: "text",
        status: "PENDING",
        createdAt: Date.now(),
        formatedDate: "1"
    };

    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<ListTodos todos={[]} />);
    });

    it('it should render nothing', () => {
        expect(wrapper.find(Link)).toHaveLength(1);
    });

    it('it should render nothing', () => {
        wrapper.setProps({ todos: [mock] });
        expect(wrapper.find('li')).toHaveLength(1);
    });
})