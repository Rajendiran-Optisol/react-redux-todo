import React from 'react';

function UserTodo(props) {
    let { userName, Todos: todos } = props;
    return (
        <div>
            <h3>UserName: {userName}</h3>
            <h4>Tasks</h4>
            <ol type="1">
                {
                    todos.map((todo, idx) => {
                        return <li key={todo.id}>{idx+1}: {todo.text}</li>;
                    })
                }
            </ol>
            <hr />
        </div>
    );
}

export default UserTodo;
