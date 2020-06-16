import * as actionTypes from '../actions/actionTypes';

const initialState = {
    todos: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return { ...state, todos: state.todos.concat(action.payload) };
        case actionTypes.MODIFY_TODO_STATUS:
            return { ...state, todos: action.payload };
        case actionTypes.DELETE_TODO:
            return { ...state, todos: action.payload };
        default:
            return state;
    }
};

export default reducer;