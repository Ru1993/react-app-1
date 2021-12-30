import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createFild, Element } from '../Common/FormsControls/FormsControls';
import { required } from '../validators/validators';
import { login } from '../../redux/authReducer';
import { Redirect } from 'react-router';
import stile from './../Common/FormsControls/FormsControls.module.css'

let Input = Element ('input');

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            {/* {createFild('Email', 'email', Input, [required])}
            {createFild('Password', 'password', Input, [required], {type:'password'})}
            {createFild(null, 'rememberMe', Input, [], {type:'checkbox'}, 'remember me')} */}
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} 
                validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'}  
                component={Input} 
                validate={[required]} type={'password'}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={Input} type={'checkbox'} /> remember me
            </div>
            { props.error && <div className={stile.fromSummeryError} >
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {

    const onSubmit = (FormData) => {
        props.login(FormData.email, FormData.password, FormData.rememberMe);
    }

    if(props.isAuth){
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

let mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login })(Login);