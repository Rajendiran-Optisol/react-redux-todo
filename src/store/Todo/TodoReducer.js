const TodoReducer = {
    ADD_TODO: 'ADD_TODO',
    MODIFY_TODO_STATUS: 'MODIFY_TODO_STATUS',
    DELETE_TODO: 'DELETE_TODO',
    FETCH_TODOS: 'FETCH_TODOS',
    FETCH_USER_TODOS: 'FETCH_USER_TODOS',

    initialState: {
        todos: [],
        userTodos: []
    },

    reducer: (state = TodoReducer.initialState, action) => {
        switch (action.type) {
            case TodoReducer.ADD_TODO:
                return { ...state, todos: state.todos.concat(action.payload) };
            case TodoReducer.MODIFY_TODO_STATUS:
                return { ...state, todos: action.payload };
            case TodoReducer.DELETE_TODO:
                return { ...state, todos: action.payload };
            case TodoReducer.FETCH_TODOS:
                return { ...state, todos: action.payload };
            case TodoReducer.FETCH_USER_TODOS:
                return { ...state, userTodos: action.payload };
            default:
                return state;
        }
    }
};

export { TodoReducer };
export default TodoReducer.reducer;