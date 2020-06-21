import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthAction from '../../store/Auth/AuthAction';
import UserDetails from '../../store/UserDetails/UserDetailsAction';
import Input from '../components/UI/Input/Input';
import validation from './LoginValidation';
import styles from './Login.module.scss';

const mapStateToProps = state => {
    return { isAuthenticated: state.auth.isAuthenticated }
}

const mapDispatchToProps = dispatch => {
    return {
        authenticate: (userName, password) => dispatch(AuthAction.authenticate(userName, password)),
        userDetails: () => dispatch(UserDetails.fetchUserDetails())
    }
}

class LoginClass extends Component {
    
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
        if (this.props.isAuthenticated)
            this.props.history.push('/');
    }

    render() {
        return (
            <div className={styles.container}>
                <form onSubmit={this.authenticate} className={styles.loginForm}>
                    <label>UserName</label>
                    <Input 
                        type="text" 
                        name="userName"
                        value={this.state.form.userName.text} 
                        placeHolder="User Name" 
                        error={this.state.form.userName.error}
                        changeHandler={this.userNameHandler} />
                    <label>Password</label>
                    <Input 
                        type="text" 
                        name="password"
                        value={this.state.form.password.text} 
                        placeHolder="Password" 
                        error={this.state.form.password.error}
                        changeHandler={this.userNameHandler} />
                    <button className={styles.loginButton}>Log In</button>
                    <h3><Link to="/sign-up" style={{ color: "#000" }}>Create New Account</Link></h3>
                </form>
            </div>
        );
    }

    userNameHandler = ({ target: { value, name } }) => {
        this.setState({ 
            form: {
                ...this.state.form,
                [name]: {
                    ...this.state.form.userName,
                    text: value,
                    error: validation(this.state.form.userName.rules, value, 'User Name')
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

    authenticate = async (event) => {
        event.preventDefault();
        await this.props.authenticate(this.state.form.userName.text, this.state.form.password.text);
        await this.props.userDetails();
        this.props.history.push('/');
    }
}

export { LoginClass as UnconnectedLogin };
export default connect(mapStateToProps, mapDispatchToProps)(LoginClass);
export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginClass);