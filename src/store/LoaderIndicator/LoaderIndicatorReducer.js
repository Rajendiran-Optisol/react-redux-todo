const LoaderReducer = {
    REQUEST_LOADING: 'REQUEST_LOADING',
    STOP_LOADING: 'STOP_LOADING',

    initialState: {
        isLoading: false
    },

    reducer: (state = LoaderReducer.initialState, action) => {
        switch (action.type) {
            case LoaderReducer.REQUEST_LOADING:
                return { ...state, isLoading: true };
            case LoaderReducer.STOP_LOADING:
                return { ...state, isLoading: false };
            default:
                return state;
        }
    }
};

export { LoaderReducer };
export default LoaderReducer.reducer;