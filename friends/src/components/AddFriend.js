import React, { useEffect, useState } from 'react';
import { Form, Field, withFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import {createPost} from '../actions/index'

const AddFriend = props => {
    const [friend, setFriend]  = useState({name: ""});

    // useEffect(()=> {
    //     setNewFriend(stranger => ({...newFriend, stranger}))
    // },[])

    const handleChanges = event => {
        setFriend({ ...friend, [event.target.name]: event.target.value });
      };
      const handleSubmit = event => {
        event.preventDefault();
        props.addFriend(friend);
        props.history.push('/friends')
      };


    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <Field
                    type="text" 
                    name="name" 
                    value={friend.name}
                    onChange={handleChanges}
                    placeholder="Name"
                    className="field"  />
            <button type="submit" className="button">Submit</button>
            </Form>
        </div>
    )
};


const FormikAddFriend = withFormik({
    mapPropsToValues({ name }) {
      return {
        name: name || "",
      };
    },
    
    validationSchema: Yup.object().shape({
        name: Yup
        .string()
        .required("Name Required"),
    }),
})(AddFriend);
  
const mapStateToProps = state => {
    return {
        friend: state.friend
        };
    };
    
export default connect(mapStateToProps,{ createPost })(FormikAddFriend);
