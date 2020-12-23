import React from 'react';
import { shallow } from 'enzyme';
import Login from './login'

let wrapper;
beforeEach(() => {
    wrapper = shallow(<Login />);
});

describe('Test case for testing login', () => {
    test('username check', () => {
        // console.log(wrapper.find('h1'));
        expect(wrapper.find('input[name="username"]')).toHaveLength(1);
        // wrapper.find('input[type="text"]').simulate('change', { target: { name: 'username', value: 'krishankantsinghal' } });
        // expect(wrapper.state('username')).toEqual('krishankantsinghal');
    })
    test('user', () => {
        wrapper.find('input[name="username"]').simulate('change', { target: { name: 'username', value: 'krishankantsinghal' } });
        console.log(wrapper.state().username);
        expect(wrapper.state('username')).toBe('krishankantsinghal')
    })
})