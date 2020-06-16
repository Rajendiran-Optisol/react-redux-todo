import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import ListTodos from '../../components/ListTodos/ListTodos';

import * as actions from '../../store/actions/';

import styles from './Todos.module.scss';

class Todos extends Component {

    addTodoHandler = (text) => {
        const todo = {
            id: uuid(),
            text: text,
            status: 'PENDING'
        };
        this.setState(prevState => ({ todos: prevState.concat(todo) }));
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
    addTodo: (text) => dispatch(actions.addTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);