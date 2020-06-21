import createStore from '../../AddOns/mock/reduxStore';
import ApiAction from '../../utilities/ApiAction';
import UserDetailActions from './UserDetailsAction';
import { UserDetailReducer } from './UserDetailsReducer';

const sampleResponse = {
    data: {
        firstName: 'Raj',
        lastName: 'Venkat',
        email: 'raj@test.com'
    }
}

describe('Test User Details Action', () => {
    let store;
    let spyMethod;

    beforeEach(() => {
        spyMethod = jest.spyOn(ApiAction, 'makeEffect').mockImplementation(() => sampleResponse);

        store = createStore({
            firstName: '',
            lastName: '',
            email: ''
        });
    });

    test('Should make call to API', async () => {

        await store.dispatch(UserDetailActions.fetchUserDetails());

        expect(spyMethod).toHaveBeenCalled();
    });

    test('Fetch User Details', async () => {
           
        spyMethod.mockImplementation(() => sampleResponse);

        await store.dispatch(UserDetailActions.fetchUserDetails());

        expect(store.getActions()).toEqual([{ type: UserDetailReducer.FETCH_USER_DETAILS, payload: sampleResponse.data.data }]);
    });

    test('Reset User Details', async () => {

        store.dispatch(UserDetailActions.resetUserDetails());
        
        expect(store.getActions()).toEqual([{ type: UserDetailReducer.RESET_USER_DETAILS }]);
    });

});