const ToastReducer = {
    TOAST_REQUEST: 'TOAST_REQUEST',
    TOAST_FINISH: 'TOAST_FINISH',

    initialState: {
        isEnable: false,
        message: null
    },

    reducer: (state = ToastReducer.initialState, action) => {
        switch (action.type) {
            case ToastReducer.TOAST_REQUEST:
                return { ...state, ...action.payload };
            case ToastReducer.TOAST_FINISH:
                return { ...state, message: null, isEnable: false };
            default:
                return state;
        }
    }
};

export { ToastReducer };
export default ToastReducer.reducer;