import React, { useEffect, useState } from 'react';
import { Form, Field, withFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import {newFriendData} from '../actions/index'

const AddFriend = () => {
    const [newFriend, setNewFriend] = useState({name: ""});

    useEffect(()=> {
        setNewFriend(stranger => ({...newFriend, stranger}))
    },[])


    return(
        <div>
            <Form>
                <Field
                    type="text" 
                    name="name" 
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
    
export default connect(mapStateToProps,{ newFriendData })(FormikAddFriend);
