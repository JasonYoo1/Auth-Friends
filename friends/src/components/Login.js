import React, { useEffect, useState } from 'react';
import { Form, Field, withFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import { createPost } from '../actions/index';

const LoginForm = ({ props, touched, errors, values, handleSubmit}) => {
    const [userLogin, setUserLogin] = useState({});
    useEffect(() => {
            setUserLogin(user => ({...userLogin, user}))
    }, []); 

    return(
        <div className="form-container">
            <h1>Sign In</h1>
            <Form className="form">
                {touched.name && errors.name && ( <p className="error">{errors.name}</p> )}
                <Field 
                    type="text" 
                    name="username" 
                    placeholder="Userame"/>
                    {touched.name && errors.name && <p className="error">{errors.name}</p>}
                <Field 
                    type="text" 
                    name="password" 
                    placeholder="Password" />
            <button type="submit" className="button">Submit</button>
            </Form>
        </div>
    );
    
};

const FormikLoginForm = withFormik({
    handleSubmit(values, { resetForm, props }) {
        console.log('inputs on submit', values, props)
        props.createPost(values);
        resetForm(); 
    },
    mapPropsToValues({ username, password }) {
        return {
          username: username || "",
          password: password || "",
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup
        .string()
        .required("Username Required"),
        password: Yup
        .string()
        .required("Password Required"),
    }),
})(LoginForm);
  
const mapStateToProps = state => {
    return {
        credentials: state.userLogin
        };
    };
    
export default connect( mapStateToProps,{ createPost })(FormikLoginForm);