import AuthAction from './AuthAction';
import { AuthReducer } from './AuthReducer';
import HttpUtil from '../../utilities/HttpUtility/HttpHandler';
import createStore from '../../AddOns/mock/reduxStore';

describe('Authentication Store', () => {
    let store;
    let spyMethod;
    let expectedResponse;

    beforeEach(() => {
        store= createStore({
            isAuthenticated: false
        });

        expectedResponse = {
            data: {
                data: {
                    token: 'token'
                }
            }
        };

        spyMethod = jest.spyOn(HttpUtil, 'post').mockImplementation(async () => expectedResponse);
    });

    afterEach(() => {
        store.clearActions();
        localStorage.removeItem('token');
    });


    test('it should return logout', () => {
        store.dispatch(AuthAction.isAuthenticated({ push: () => ({})}));

        expect(store.getActions()).toEqual([{ type: AuthReducer.LOGOUT }]);
    });
    
    test('it should dispatch success authentication', async () => {

        await store.dispatch(AuthAction.authenticate('testUser', 'testPassword'));

        expect(spyMethod).toHaveBeenCalled();
        expect(store.getActions()).toEqual([{ type: AuthReducer.AUTHENTICATE }]);
    });

    test('it should dispatch logout', () => {
        store.dispatch(AuthAction.logout());

        expect(store.getActions()).toEqual([{ type: AuthReducer.LOGOUT }]);
    });

});