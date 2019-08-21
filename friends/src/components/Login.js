
import React, { Component } from 'react'
import {Form, Field, Formik} from 'formik'

import axios from 'axios'

export default class Login extends Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    onChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    onSubmit(e) {
        e.preventDefault();
    
        const post = {
          name: this.state.name,
        };
        //action aka my fetch
        this.props.createPost(post);
      }

    render() {
        return (
            <>
            <Formik>
                <Form onSubmit={this.onSubmit}>
                    <Field type="text" name="username" value={this.state.username} onChange={this.handleChange}/>              
                    <Field type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </Form>  
            </Formik>
            </>
        )
    }
}