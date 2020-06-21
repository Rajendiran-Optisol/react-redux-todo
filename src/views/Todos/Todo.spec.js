import React from 'react';
import { UnConnectedTodos } from '.';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ListTodos from '../../ListTodos/ListTodos';

configure({ adapter: new Adapter() });

describe('Todos', () => {

    let wrapperComponent = null;
    beforeEach(() => {
        wrapperComponent = shallow(<UnConnectedTodos fetchTodos = {() => {}}/>);
    });

    it('ListTodos', () => {
        expect(wrapperComponent.find(ListTodos)).toHaveLength(1);
    });
});