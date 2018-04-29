import React, { Component } from 'react';
import { withFormik } from 'formik';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

class Form extends Component {
    render() {
        const {
            touched,
            values,
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
        } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <h2>Войти</h2>
                <div>
                    <TextField
                        label="Логин"
                        name="login"
                        placeholder="login"
                        margin="normal"
                        value={values.login}
                        error={touched.login && !!errors.login}
                        helperText={touched.login && errors.login}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div>
                    <TextField
                        label="Пароль"
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        margin="normal"
                        value={values.password}
                        error={touched.password && !!errors.password}
                        helperText={touched.password && errors.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <Button type="submit">Войти</Button>
            </form>
        );
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        login: '',
        password: ''
    }),
    validate: values => {
        const errors = {};

        Object.keys(values).forEach(fieldName => {
            const value = values[fieldName];

            switch (fieldName) {
                case 'login':
                    if (value.length <= 0) {
                        errors.login = 'Введите логин';
                    }
                    break;
                case 'password':
                    if (value.length < 8) {
                        errors.password = 'Не менее 8 символов';
                    }
                    break;
                default:
                    break;
            }
        });

        return errors;
    },
    handleSubmit: (values) => {
        console.log(values);  
    },
})(Form);
