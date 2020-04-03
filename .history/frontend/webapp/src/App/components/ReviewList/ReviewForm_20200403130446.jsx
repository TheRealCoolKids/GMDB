import React from 'react';
import {Formik, Form, Field} from "formik";
import {TextField} from "@material-ui/core";

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
                        <TextField id="outlined-basic" label="Outlined" variant="outlined">
                            <Field name="Title" type="text" />
                        </TextField>
                        <Field name="Your Review" type="text" />
                    </Form>
                )
                }
            </Formik>
        </>
    );
}

export default ReviewForm;