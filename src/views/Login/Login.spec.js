import React from 'react';
import { UnconnectedLogin as Login} from './';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Login', () => {

    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Login auth={{ isAuthenticated: false }} />);
        return wrapper;
    });

    test('Should render without Error', () => {
        expect(wrapper.exists()).toBe(true);
    });

    test('Expect 2 Input Fields', () => {
        expect(wrapper.find('Input').length).toEqual(2);
    });

    it('Test UserName Input', () => {
        wrapper = shallow(<Login auth={{ isAuthenticated: false }} />);
        
        let { state: prevState } = wrapper.instance();
        wrapper.setState({ 
            ...prevState,
            form: {
                ...prevState.form,
                userName: {
                    ...prevState.form.userName,
                    text: "Rajendiran"
                }
            }
        });

        expect(wrapper.state(['form']).userName.text).toEqual('Rajendiran');
    });
});