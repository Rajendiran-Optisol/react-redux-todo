import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListTodos } from './ListTodos/';
import TodoAction from '../../store/Todo/TodoAction';
import styles from './Todos.module.scss';

class TodosClass extends Component {
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

const mapStateToProps = state => {
    return {
       todos: state.todo.todos 
    }
};

const mapDispatchToProps = dispatch => ({
    addTodo: (text) => dispatch(TodoAction.addTodo(text)),
    fetchTodos: () => dispatch(TodoAction.fetchTodos())
});

export { TodosClass as UnConnectedTodos };
export const Todos = connect(mapStateToProps, mapDispatchToProps)(TodosClass);
export default connect(mapStateToProps, mapDispatchToProps)(TodosClass);