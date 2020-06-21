import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoAction from '../../store/Todo/TodoAction';
import UserTodo from './UserTodo';

const mapStateToProps = state => {
    return {
        usersTodo: state.todo.userTodos
    }
}

class TodoByUsers extends Component {

    componentDidMount() {
        this.props.dispatch(TodoAction.fetchTodoByUsers());
    }

    render() {
        let users = this.props.usersTodo;
        console.log(JSON.stringify(users, null, 2))
        users = users && users.map(user => <UserTodo key={user.userId} {...user} />);
        return (
            <div>
                {users}
            </div>
        );
    }
}

export const UserTodos = connect(mapStateToProps)(TodoByUsers);