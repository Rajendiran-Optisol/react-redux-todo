import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../components/UI/Input/Input';
import HttpHandler from '../../utilities/HttpUtility/HttpHandler';
import HttpError from '../../utilities/HttpUtility/HttpError';
import { AuthService } from '../../utilities/HttpUtility/ServiceInstance';
import ToastAction from '../../store/Toast/ToastAction';
import styles from './SignUp.module.scss';

const mapDispatchToProps = dispatch => {
    return {
        toast: (message) => dispatch(ToastAction.requestToast({ message }))
    };
}

class SignUpClass extends Component {
    state = {
        form: {
            firstName: {
                text: '',
                error: null
            },
            lastName: {
                text: '',
                error: null
            },
            email: {
                text: '',
                error: null
            },
            password: {
                text: '',
                error: null
            }
        }
    };

    fieldChangeHandler = ({ target }, key) => {
        this.setState(prevState => ({ 
            ...prevState,
            form: { 
                ...prevState.form, 
                [key]: { 
                    ...prevState.form[key], 
                    text: target.value 
                }
            }
        }));
    }

    signUpHandler = async (e) => {
        e.preventDefault();

        const data = {
            email: this.state.form.email.text,
            firstName: this.state.form.firstName.text,
            lastName: this.state.form.lastName.text,
            password: this.state.form.password.text
        };
        let response = await HttpHandler.post('/sign-up', AuthService, { data }, false);

        if (response instanceof HttpError) {
            this.props.toast(response.message || response.error);
            return false;
        }
        this.props.history.push('/login');
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.signUpBox}>
                    <div className={styles.signUpHeader}>
                        <h4>Create a Todo Account</h4>
                        <p>One account for Everything</p>
                    </div>
                    <form onSubmit={this.signUpHandler}>
                        <label>Fisrt Name</label>
                        <Input 
                            type="text" 
                            value={this.state.form.firstName.text} 
                            placeHolder="First Name" 
                            field="firstName"
                            error={this.state.form.firstName.error}
                            changeHandler={this.fieldChangeHandler} />
                        <label>Last Name</label>
                        <Input 
                            type="text" 
                            value={this.state.form.lastName.text} 
                            placeHolder="Last Name" 
                            field="lastName"
                            error={this.state.form.lastName.error}
                            changeHandler={this.fieldChangeHandler} />
                        <label>Email</label>
                        <Input 
                            type="text" 
                            value={this.state.form.email.text} 
                            placeHolder="Email" 
                            field="email"
                            error={this.state.form.email.error}
                            changeHandler={this.fieldChangeHandler} />
                        <label>Password</label>
                        <Input 
                            type="text" 
                            value={this.state.form.password.text} 
                            placeHolder="Password" 
                            field="password"
                            error={this.state.form.password.error}
                            changeHandler={this.fieldChangeHandler} />
                        <button className={styles.signUpButton}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(SignUpClass);
export const SignUp = connect(null, mapDispatchToProps)(SignUpClass);;
