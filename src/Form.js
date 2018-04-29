import React, { Component } from 'react';
import { withFormik } from 'formik';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Typography} from 'material-ui';
import Pay from './Pay';
import { withStyles } from "material-ui/styles";

const styles = theme => ({
    buttonCenter: {
      textAlign: "center"
    },
    button: {
      margin: theme.spacing.unit
    }
  });
class Form extends Component {
    render() {
        const {
            touched,
            values,
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            classes
        } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <Typography variant="headline">Вход</Typography>
                <div>
                    <TextField
                        label="Логин"
                        name="login"
                        placeholder="Логин"
                        margin="normal"
                        fullWidth
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
                        fullWidth
                        value={values.password}
                        error={touched.password && !!errors.password}
                        helperText={touched.password && errors.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className={classes.buttonCenter}>
                <Button 
                    type="submit"
                    className={classes.button}
                    variant="raised"
                    color="primary"
                    type="submit"
                    align="center"
                >
                    Войти
                </Button>
                </div>
                
            </form>
        );
    }
}

export default withStyles(styles)(withFormik({
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
    handleSubmit: (values, FormikBag) => {
        const errors = {}
        if(values.login === "login"){
            if(values.password==="password"){
                window.location.assign("/pay");
            }else{
                errors.password = "Неверный пароль"
                FormikBag.setErrors({"password": errors.password});
            }
        }else{
            errors.login = "Пользователя не существует";
            FormikBag.setErrors({"login":"Пользователя не существует"});
        }
        console.log(values);
    },
})(Form));
