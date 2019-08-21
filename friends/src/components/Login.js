import React, { Component } from 'react';
import {Form, Field, Formik} from 'formik';


import { connect } from 'react-redux';
import { login } from '../actions/index';



class Login extends Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    componentDidMount(){
        this.props.login();
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
          name: this.props.name,
        };
        //action aka my fetch
        this.props.createPost(post);
      }

    render() {
        return (
            <>
            <Formik>
                <Form onSubmit={this.onSubmit}>
                    <Field type="text" name="username" value={this.props.username} onChange={this.handleChange}/>              
                    <Field type="password" name="password" value={this.props.password} onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </Form>  
            </Formik>
            </>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    //comes from reducer
    newPost: state.posts.item
  });

  export default connect(mapStateToProps, { login })(Login);