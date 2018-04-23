import React, { Component } from 'react';
import FormErrors from './FormErrors';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            formErrors: { login: '', password: '' },
            loginValid: false,
            passwordValid: false,
            formValid: false
        };
    }

    handleUserInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value }, () => {
            this.validateField(name, value);
        });
    };

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let loginValid = this.state.loginValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'login':
                loginValid = value.length > 0;
                fieldValidationErrors.login = loginValid ? '' : 'Введите логин';
                break;
            case 'password':
                passwordValid = value.length >= 8;
                fieldValidationErrors.password = passwordValid ? '' : 'Не менее 8 символов';
                break;
            default:
                break;
        }
        this.setState(
            {
                formErrors: fieldValidationErrors,
                loginValid: loginValid,
                passwordValid: passwordValid
            },
            this.validateForm
        );
    }

    validateForm() {
        this.setState({
            formValid: this.state.loginValid && this.state.passwordValid
        });
    }

    render() {
        return (
            <form>
                <h2>Войти</h2>
                <div>
                    <TextField
                        error={this.state.formErrors.login}
                        name='login'
                        label="Логин"
                        placeholder='login'
                        margin="normal"
                        helperText={this.state.formErrors.login}
                        value={this.state.login}
                        onChange={this.handleUserInput}
                    />
                </div>
                <div>
                    <TextField
                        error={this.state.formErrors.password}
                        label="Пароль"
                        type="password"
                        name='password'
                        helperText={this.state.formErrors.password}
                        autoComplete="current-password"
                        margin="normal"
                        value={this.state.password}
                        onChange={this.handleUserInput}
                    />
                </div>
                <div>
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                <Button type="submit" disabled={!this.state.formValid}>
                    Войти
                </Button>
            </form>
        );
    }
}

export default Form;
