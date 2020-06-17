import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListTodos from '../../components/ListTodos/ListTodos';
import TodoAction from '../../store/Todo/TodoAction';
import styles from './Todos.module.scss';

class Todos extends Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        return (
            <div className={styles.container}>
                <h3>List of Todos</h3>
                <ListTodos todos={this.props.todos} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todo.todos 
});

const mapDispatchToProps = dispatch => ({
    addTodo: (text) => dispatch(TodoAction.addTodo(text)),
    fetchTodos: () => dispatch(TodoAction.fetchTodos())
});

export { Todos as UnConnectedTodos };
export default connect(mapStateToProps, mapDispatchToProps)(Todos);