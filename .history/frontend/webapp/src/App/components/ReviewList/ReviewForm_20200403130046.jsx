import React from 'react';
import {Formik, Form, Field} from "formik";

function ReviewForm(props) {

    const [title, setTitle] = React.useState("");
    const [text, setText] = React.useState("");

    const submit = () =>{

    }

    return (
        <>
            <Formik
            initialValues={{title,text}}
            onSubmit={submit}
            >
                {props => (
                    <Form>
                        <Field name="Title" type="text" />
                        <Field name="Your Review" type="text" />
                    </Form>
                )
                }
            </Formik>
        </>
    );
}

export default ReviewForm;