const UserDetailReducer = {
    FETCH_USER_DETAILS: 'FETCH_USER_DETAILS',
    RESET_USER_DETAILS: 'RESET_USER_DETAILS',
    initialState: {
        firstName: '',
        lastName: '',
        email: ''
    },

    reducer: (state = UserDetailReducer.initialState, action) => {
        switch (action.type) {
            case UserDetailReducer.FETCH_USER_DETAILS: {
                return { ...state, ...action.payload };
            }
            case UserDetailReducer.RESET_USER_DETAILS: {
                return { ...UserDetailReducer.initialState };
            }
            default:
                return state;
        }
    }
};

export { UserDetailReducer };
export default UserDetailReducer.reducer;