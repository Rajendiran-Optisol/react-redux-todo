const AuthReducer = {
    AUTHENTICATE: 'AUTHENTICATE',
    LOGOUT: 'LOGOUT',

    initialState: {
        isAuthenticated: false
    },

    reducer: (state = AuthReducer.initialState, action) => {
        switch (action.type) {
            case AuthReducer.AUTHENTICATE:
                return { ...state, isAuthenticated: true };
            case AuthReducer.LOGOUT:
                return { ...state, isAuthenticated: false };
            default:
                return state;
        }
    }
};

export { AuthReducer };
export default AuthReducer.reducer;