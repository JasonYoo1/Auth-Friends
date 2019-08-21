import React, { useEffect, useState } from 'react';
import { Form, Field, withFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import { login } from '../actions/index';

const LoginForm = ({ props, touched, errors, values, login}) => {
    const [user, setUser] = useState({
        username: '',
        password: '',
      });
    
    const handleChanges = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
      };

      const handleSubmit = event => {
        event.preventDefault();
        props.login(user);
        props.history.push('/friends')
      };

    return(
        <div className="form-container">
            <h1>Sign In</h1>
            <Form onSubmit={handleSubmit}>
                {touched.name && errors.name && ( <p className="error">{errors.name}</p> )}
                <Field 
                    type="text" 
                    name="username" 
                    placeholder="Userame"
                    value={user.username}
                    onChange={handleChanges}/>
                    {touched.name && errors.name && <p className="error">{errors.name}</p>}
                <Field 
                    type="text" 
                    name="password" 
                    placeholder="Password" 
                    value={user.password}
                    onChange={handleChanges}/>
            <button type="submit" className="button">Submit</button>
            </Form>
        </div>
    );
    
};

const FormikLoginForm = withFormik({
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

    
export default connect( null, { login })(FormikLoginForm);