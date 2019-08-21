import React from 'react';
import {Form, Field, withFormik } from 'formik';


const AddFriend = () => {
    const [newFriend, setNewFriend] = useState();

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

    handleSubmit(values, { resetForm, props}) {
        props.newFriend(values);
        resetForm(); 
    }

})(AddFriendForm);
  
const mapStateToProps = state => {
    return {
        friend: state.friend
        };
    };
    
export default connect(mapStateToProps,{ newFriend })(FormikAddFriend);
