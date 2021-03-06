import React from 'react';
import {Field, reduxForm} from "redux-form";
import postsCSS from './MyPosts.module.css';
import {
    maxLengthCreator,
    minLengthCreator,
    requiredField
} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxPostLength = maxLengthCreator(10);
const minPostLength = minLengthCreator(2);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name='newPostText'
                   placeholder='Enter your post message'
                   cols='28'
                   validate={[requiredField, maxPostLength, minPostLength]}
            />
            <br/>
            <button className={postsCSS.post_button}>Add post</button>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'profileAddPostForm'})(AddPostForm);

export default AddPostFormRedux;
