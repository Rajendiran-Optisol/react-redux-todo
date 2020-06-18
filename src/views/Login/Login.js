import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthAction from '../../store/Auth/AuthAction';
import Input from '../components/UI/Input/Input';
import validation from './LoginValidation';
import styles from './Login.module.scss';

const mapStateToProps = state => {
    return { auth: state.auth }
}

const mapDispatchToProps = dispatch => {
    return {
        authenticate: (userName, password) => dispatch(AuthAction.authenticate(userName, password))
    }
}

class Login extends Component {
    
    state = {
        form: {
            userName: {
                text: '',
                error: null,
                rules: {
                    required: true,
                    minLength: 6
                }
            },
            password: {
                text: '',
                error: null,
                rules: {
                    required: true,
                    minLength: 6
                }
            }
        },
        isValid: false
    };

    constructor(props) {
        super(props);
        if (this.props.auth.isAuthenticated)
            this.props.history.push('/');
    }

    render() {
        return (
            <div className={styles.container}>
                <form onSubmit={this.authenticate} className={styles.loginForm}>
                    <label>UserName</label>
                    <Input 
                        type="text" 
                        value={this.state.form.userName.text} 
                        placeHolder="User Name" 
                        error={this.state.form.userName.error}
                        changeHandler={this.userNameHandler} />
                    <label>Password</label>
                    <Input 
                        type="text" 
                        value={this.state.form.password.text} 
                        placeHolder="Password" 
                        error={this.state.form.password.error}
                        changeHandler={this.passwordHandler} />
                    <button className={styles.loginButton}>Log In</button>
                    <div><Link to="/sign-up" style={{ color: "#000" }}>Create New Account</Link></div>
                </form>
            </div>
        );
    }

    userNameHandler = ({ target }) => {
        this.setState({ 
            form: {
                ...this.state.form,
                userName: {
                    ...this.state.form.userName,
                    text: target.value,
                    error: validation(this.state.form.userName.rules, target.value, 'User Name')
                }
            }
        });
    }

    passwordHandler = ({ target }) => {
        this.setState({ 
            form: {
                ...this.state.form,
                password: {
                    ...this.state.form.password,
                    text: target.value,
                    error: validation(this.state.form.password.rules, target.value, 'Password')
                }
            }
        });
    }

    authenticate = (event) => {
        event.preventDefault();
        this.props.authenticate(this.state.form.userName.text, this.state.form.password.text);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);